"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/content/site-config";
import { homepageOfferings } from "@/content/offerings";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const serviceOptions = [...homepageOfferings.map((o) => o.title), "Other"];

interface FormState {
  name: string;
  whatsapp: string;
  email: string;
  service: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  whatsapp: "",
  email: "",
  service: "",
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    errors.whatsapp = "Enter a valid WhatsApp number with country code.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email or leave it blank.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  if (values.message.trim().length < 5) {
    errors.message = "Tell us briefly how we can help.";
  }

  return errors;
}

function buildMessage(values: FormState): string {
  const lines = [
    `New enquiry from ${values.name.trim()}.`,
    `Service needed: ${values.service}.`,
    `WhatsApp: ${values.whatsapp.trim()}`,
  ];
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
  lines.push(`Message: ${values.message.trim()}`);
  return lines.join("\n");
}

export function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [values, setValues] = useState<FormState>({ ...initialState, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string>(whatsappLink());

  function update<K extends keyof FormState>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No backend in v1: hand off to WhatsApp click-to-chat with a prefilled
    // message. The structure (submitLead) is ready to swap for an API later.
    const link = whatsappLink(buildMessage(values));
    setWaLink(link);
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-success/30 bg-success-soft p-8 text-center"
      >
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink">
          Your enquiry is ready. If your WhatsApp did not open automatically, use the button
          below and we will reply with a clear next step.
        </p>
        <div className="mt-6">
          <Button href={waLink} size="lg">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Open WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
        />

        <Field
          id="whatsapp"
          label="WhatsApp number"
          required
          error={errors.whatsapp}
          value={values.whatsapp}
          onChange={(v) => update("whatsapp", v)}
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
        />

        <Field
          id="email"
          label="Email (optional)"
          error={errors.email}
          value={values.email}
          onChange={(v) => update("email", v)}
          type="email"
          autoComplete="email"
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-sm font-semibold text-navy">
            Service needed <span className="text-brand">*</span>
          </label>
          <select
            id="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={cn(
              "rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand",
              errors.service ? "border-warning" : "border-line",
            )}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="text-sm text-warning">
              {errors.service}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-semibold text-navy">
            Message <span className="text-brand">*</span>
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Tell us briefly what you need help with."
            className={cn(
              "resize-y rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand",
              errors.message ? "border-warning" : "border-line",
            )}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-sm text-warning">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" fullWidth withArrow>
          Send Enquiry
        </Button>

        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
          We never ask for PAN, Aadhaar, portal passwords, bank statements, or document uploads
          on this form. Your enquiry goes to us over WhatsApp.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand",
          error ? "border-warning" : "border-line",
        )}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-warning">
          {error}
        </p>
      )}
    </div>
  );
}
