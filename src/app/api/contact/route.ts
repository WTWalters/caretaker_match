import { NextResponse } from "next/server";

/**
 * Form submission handler for the marketing site.
 *
 * Delivery is provider-agnostic and resolved at request time, in order:
 *
 *   1. Resend        — set RESEND_API_KEY (and optionally CONTACT_FROM_EMAIL)
 *   2. Formspree     — set FORMSPREE_CONTACT_ENDPOINT / FORMSPREE_PARTNER_ENDPOINT
 *   3. Neither       — the submission is written to the server log so it is
 *                      recoverable, and the caller gets a 503 telling the
 *                      visitor to email us directly. Nothing fails silently.
 *
 * These are server-only env vars deliberately: the previous client-side
 * implementation would have shipped the Formspree endpoint to the browser,
 * where anyone could scrape and spam it.
 */

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hamid.sabet@caretakermatch.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const MAX_FIELD = 5000;

type FormType = "contact" | "partner";

const FIELDS: Record<FormType, { required: string[]; all: string[] }> = {
  contact: {
    required: ["name", "email"],
    all: ["name", "org", "email", "iam", "message"],
  },
  partner: {
    required: ["name", "email", "city"],
    all: ["name", "email", "phone", "city", "org", "availability", "message"],
  },
};

const LABELS: Record<string, string> = {
  name: "Name",
  org: "Organization",
  email: "Email",
  iam: "I am a",
  phone: "Phone",
  city: "City / Region",
  availability: "Availability",
  message: "Message",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function subjectFor(type: FormType, data: Record<string, string>) {
  return type === "partner"
    ? `Community Care Partner sign-up — ${data.name}`
    : `CaretakerMatch inquiry — ${data.iam || "Website"}`;
}

function bodyFor(type: FormType, data: Record<string, string>) {
  return FIELDS[type].all
    .filter((key) => data[key])
    .map((key) => `${LABELS[key] ?? key}: ${data[key]}`)
    .join("\n");
}

async function sendViaResend(subject: string, body: string, replyTo: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `CaretakerMatch <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: replyTo,
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

async function sendViaFormspree(
  endpoint: string,
  data: Record<string, string>,
  subject: string,
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _subject: subject }),
  });

  if (!response.ok) {
    throw new Error(`Formspree responded ${response.status}`);
  }
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const type = payload.formType === "partner" ? "partner" : "contact";
  const spec = FIELDS[type];

  // Honeypot: a hidden field real users never see, let alone fill in.
  if (typeof payload.company_website === "string" && payload.company_website) {
    // Accept silently so bots do not learn they were caught.
    return NextResponse.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const key of spec.all) {
    const value = payload[key];
    if (typeof value === "string" && value.trim()) {
      data[key] = value.trim().slice(0, MAX_FIELD);
    }
  }

  const missing = spec.required.filter((key) => !data[key]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Please fill in: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!isEmail(data.email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 },
    );
  }

  const subject = subjectFor(type, data);
  const body = bodyFor(type, data);

  try {
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(subject, body, data.email);
      return NextResponse.json({ ok: true });
    }

    const endpoint =
      type === "partner"
        ? process.env.FORMSPREE_PARTNER_ENDPOINT
        : process.env.FORMSPREE_CONTACT_ENDPOINT;

    if (endpoint) {
      await sendViaFormspree(endpoint, data, subject);
      return NextResponse.json({ ok: true });
    }
  } catch (error) {
    console.error("[contact] delivery failed", { subject, error });
    return NextResponse.json(
      { error: "delivery-failed", email: TO_EMAIL },
      { status: 502 },
    );
  }

  // No provider configured. Log it so the lead is at least recoverable from
  // the runtime logs, and tell the caller honestly.
  console.warn(
    `[contact] NO DELIVERY PROVIDER CONFIGURED — submission logged only\n${subject}\n${body}`,
  );

  return NextResponse.json(
    { error: "not-configured", email: TO_EMAIL },
    { status: 503 },
  );
}
