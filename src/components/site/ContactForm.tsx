"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, FORMSPREE_CONTACT } from "@/lib/site-config";

type Status = { kind: "idle" | "success" | "error"; text: string };

const AUDIENCES = [
  "Health System / Physician",
  "Patient / Family Member",
  "Community Organization",
  "Investor / Accelerator",
  "Other",
];

export default function ContactForm() {
  const [iam, setIam] = useState(AUDIENCES[0]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const formRef = useRef<HTMLFormElement>(null);

  /* Preserves the original behaviour: any "Explore a Pilot" / "Learn More" /
     "Become a Community Partner" button preselects the matching audience. */
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".to-contact"),
    );
    const handler = (event: Event) => {
      const type = (event.currentTarget as HTMLElement).dataset.type;
      if (type && AUDIENCES.includes(type)) setIam(type);
    };
    nodes.forEach((node) => node.addEventListener("click", handler));
    return () =>
      nodes.forEach((node) => node.removeEventListener("click", handler));
  }, []);

  function mailtoFallback(data: Record<string, string>) {
    const subject = encodeURIComponent(
      `CaretakerMatch inquiry — ${data.iam ?? ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name ?? ""}\nOrganization: ${data.org ?? ""}\nEmail: ${
        data.email ?? ""
      }\nI am a: ${data.iam ?? ""}\n\nMessage:\n${data.message ?? ""}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus({
      kind: "success",
      text: "Opening your email app to send this to us…",
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    if (!FORMSPREE_CONTACT) {
      mailtoFallback(data);
      return;
    }

    setSending(true);
    setStatus({ kind: "idle", text: "" });

    try {
      const response = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      setIam(AUDIENCES[0]);
      setStatus({
        kind: "success",
        text: "Thank you — we've received your message and will follow up within a few business days.",
      });
    } catch {
      setStatus({
        kind: "error",
        text: `Something went wrong sending that. Please email us directly at ${CONTACT_EMAIL}.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="signup" ref={formRef} onSubmit={handleSubmit}>
      <div className="form-row">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="org">Organization (if any)</label>
          <input
            type="text"
            id="org"
            name="org"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="iam">I am a...</label>
          <select
            id="iam"
            name="iam"
            value={iam}
            onChange={(event) => setIam(event.target.value)}
          >
            {AUDIENCES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row full">
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
      </div>

      <div className="form-foot">
        <span className="form-note">
          We&apos;ll follow up within a few business days.
        </span>
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending…" : "Send"}
        </button>
      </div>

      <div
        className={`form-status${status.kind === "idle" ? "" : " is-visible"}${
          status.kind === "error" ? " is-error" : ""
        }${status.kind === "success" ? " is-success" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status.text}
      </div>
    </form>
  );
}
