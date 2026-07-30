"use client";

import { useState } from "react";
import { CONTACT_EMAIL, FORMSPREE_PARTNER } from "@/lib/site-config";

type Status = { kind: "idle" | "success" | "error"; text: string };

export default function PartnerSignupForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  function mailtoFallback(data: Record<string, string>) {
    const subject = encodeURIComponent(
      `Community Care Partner sign-up — ${data.name ?? ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name ?? ""}\nEmail: ${data.email ?? ""}\nPhone: ${
        data.phone ?? ""
      }\nCity/Region: ${data.city ?? ""}\nAffiliated organization: ${
        data.org ?? ""
      }\nAvailability: ${data.availability ?? ""}\n\nMessage:\n${
        data.message ?? ""
      }`,
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

    if (!FORMSPREE_PARTNER) {
      mailtoFallback(data);
      return;
    }

    setSending(true);
    setStatus({ kind: "idle", text: "" });

    try {
      const response = await fetch(FORMSPREE_PARTNER, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error(String(response.status));

      form.reset();
      setStatus({
        kind: "success",
        text: "Thank you for signing up — we'll follow up with background check and training details within a few business days.",
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
    <form className="signup" onSubmit={handleSubmit}>
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
      </div>
    </form>
  );
}
