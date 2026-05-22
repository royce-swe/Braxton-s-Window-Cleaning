import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ChevronDown } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, CITY } from "../components/SiteLayout";

export const Route = createFileRoute("/_layout/contact")({
  component: Contact,
});

const faqs = [
  { q: "How much does window cleaning cost?", a: "Most homes fall between $150 and $400 depending on size, number of panes, and add-ons. We give free, no-obligation quotes — usually within an hour." },
  { q: "How often should I clean my windows?", a: "We recommend twice a year for most homes, and monthly or quarterly for commercial storefronts. Heavy pollen or coastal areas may want a third visit." },
  { q: "Are you insured?", a: "Yes — Braxton's carries full general liability insurance. We can email a certificate of insurance on request." },
  { q: "What areas do you serve?", a: "Lake Mary, Sanford, Longwood, Heathrow, Winter Springs, Oviedo, Winter Park, Orlando, and most surrounding communities. Not sure? Just ask." },
  { q: "Do I need to be home?", a: "Not for exterior cleanings. For interior work we'll coordinate a time that works for you." },
  { q: "What if it rains right after?", a: "Properly cleaned windows don't streak from rain. If you're not happy with the result, we'll come back and re-clean — guaranteed." },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Get a free quote — fast.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Tell us a little about your property and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-3">
        <div className="md:col-span-2">
          {sent ? (
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center">
              <h2 className="text-2xl font-bold text-sky-900">Thanks — we got it!</h2>
              <p className="mt-2 text-sky-800">
                We'll be in touch shortly with your free quote. For anything urgent, call{" "}
                <a className="font-semibold underline" href={PHONE_HREF}>
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required className="md:col-span-2" />
                <Field label="Address" name="address" className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Service interested in</label>
                  <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Residential window cleaning</option>
                    <option>Commercial window cleaning</option>
                    <option>Pressure washing</option>
                    <option>Hard water removal</option>
                    <option>Gutter cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Tell us about your project</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Number of stories, approximate window count, anything special…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                <Send className="h-4 w-4" /> Send Request
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-4">
          <InfoCard icon={Phone} title="Call or Text">
            <a className="text-sky-600 hover:underline" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </InfoCard>
          <InfoCard icon={Mail} title="Email">
            <a className="text-sky-600 hover:underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </InfoCard>
          <InfoCard icon={MapPin} title="Service Area">
            {CITY} & surrounding
          </InfoCard>
          <div className="rounded-2xl border border-border bg-slate-50 p-6 text-sm">
            <p className="font-semibold">Hours</p>
            <p className="mt-2 text-muted-foreground">Mon–Sat · 7am – 7pm</p>
            <p className="text-muted-foreground">Sun · Closed</p>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-600" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-sm">{children}</p>
    </div>
  );
}
