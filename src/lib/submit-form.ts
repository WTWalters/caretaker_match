import { CONTACT_EMAIL } from "@/lib/site-config";

export type SubmitResult =
  | { ok: true }
  | { ok: false; message: string; mailto?: string };

/**
 * Posts a form to /api/contact and turns the response into something the UI
 * can show directly. When delivery is unavailable the visitor is given a
 * working mailto escape hatch rather than a dead end — but unlike the original
 * static pages we never silently redirect them into a mail client and call it
 * success.
 */
export async function submitForm(
  formType: "contact" | "partner",
  data: Record<string, string>,
): Promise<SubmitResult> {
  let response: Response;

  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, ...data }),
    });
  } catch {
    return {
      ok: false,
      message: "We couldn't reach the server. Please check your connection and try again.",
      mailto: buildMailto(formType, data),
    };
  }

  if (response.ok) return { ok: true };

  let payload: { error?: string; email?: string } = {};
  try {
    payload = await response.json();
  } catch {
    /* fall through to the generic message below */
  }

  if (response.status === 400 && payload.error) {
    return { ok: false, message: payload.error };
  }

  const email = payload.email || CONTACT_EMAIL;
  return {
    ok: false,
    message: `We couldn't send that automatically. Please email us at ${email} — your details are below, ready to copy.`,
    mailto: buildMailto(formType, data),
  };
}

function buildMailto(
  formType: "contact" | "partner",
  data: Record<string, string>,
) {
  const subject =
    formType === "partner"
      ? `Community Care Partner sign-up — ${data.name ?? ""}`
      : `CaretakerMatch inquiry — ${data.iam ?? ""}`;

  const body = Object.entries(data)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
