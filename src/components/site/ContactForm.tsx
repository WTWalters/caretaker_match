"use client";

import { useEffect, useState } from "react";
import { submitForm } from "@/lib/submit-form";

type Status = {
  kind: "idle" | "success" | "error";
  text: string;
  mailto?: string;
};

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    setSending(true);
    setStatus({ kind: "idle", text: "" });

    const result = await submitForm("contact", data);
    setSending(false);

    if (result.ok) {
      form.reset();
      setIam(AUDIENCES[0]);
      setStatus({
        kind: "success",
        text: "Thank you — we've received your message and will follow up within a few business days.",
      });
      return;
    }

    setStatus({ kind: "error", text: result.message, mailto: result.mailto });
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
        {status.mailto && (
          <>
            {" "}
            <a href={status.mailto}>Open this in your email app</a>.
          </>
        )}
      </div>
    </form>
  );
}
