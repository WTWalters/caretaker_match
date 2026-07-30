"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submit-form";

type Status = {
  kind: "idle" | "success" | "error";
  text: string;
  mailto?: string;
};

export default function PartnerSignupForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    setSending(true);
    setStatus({ kind: "idle", text: "" });

    const result = await submitForm("partner", data);
    setSending(false);

    if (result.ok) {
      form.reset();
      setStatus({
        kind: "success",
        text: "Thank you for signing up — we'll follow up with background check and training details within a few business days.",
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="city">City / Region</label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="address-level2"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="org">Affiliated organization (if any)</label>
          <input
            type="text"
            id="org"
            name="org"
            autoComplete="organization"
            placeholder="e.g. Spark the Change Colorado"
          />
        </div>
        <div>
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            placeholder="e.g. Weekday mornings"
          />
        </div>
      </div>

      <div className="form-row full">
        <div>
          <label htmlFor="message">Anything else?</label>
          <textarea id="message" name="message" />
        </div>
      </div>

      <div className="form-foot">
        <span className="form-note">
          We&apos;ll follow up within a few business days.
        </span>
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending…" : "Sign Up"}
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
