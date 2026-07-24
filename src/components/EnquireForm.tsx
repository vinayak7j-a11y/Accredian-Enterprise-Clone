"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquireForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      teamSize: formData.get("teamSize"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedback(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(result.message);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Network error — please check your connection and try again.");
    }
  }

  return (
    <section id="enquire" className="bg-mist-50 py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Get a custom proposal for your team
          </h2>
          <p className="mt-4 text-ink-600">
            Tell us a bit about your organization — an enterprise learning
            consultant will follow up within one business day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid grid-cols-1 gap-5 rounded-3xl border border-navy-950/8 bg-white p-8 sm:grid-cols-2 sm:p-10"
        >
          <Field label="Full name" name="name" required placeholder="Jordan Patel" />
          <Field
            label="Work email"
            name="email"
            type="email"
            required
            placeholder="jordan@company.com"
          />
          <Field label="Company" name="company" required placeholder="Acme Corp" />
          <Field label="Team size" name="teamSize" placeholder="e.g. 50–200" />

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy-950">
              What are you hoping to solve?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your team's skill gaps or goals..."
              className="focus-ring w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/50 focus:border-gold-500"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col items-start gap-4">
            <Button type="submit" variant="primary" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Submitting...
                </>
              ) : (
                "Request Proposal"
              )}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <CheckCircle2 size={16} /> {feedback}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                <AlertCircle size={16} /> {feedback}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy-950">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring w-full rounded-xl border border-navy-950/15 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-600/50 focus:border-gold-500"
      />
    </div>
  );
}
