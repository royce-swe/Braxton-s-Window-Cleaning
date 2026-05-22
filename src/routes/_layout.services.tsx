import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Home, Building2, Sparkles, Droplets, Wind, Layers } from "lucide-react";
import residential from "../assets/residential.jpg";
import commercial from "../assets/commercial.jpg";
import pressure from "../assets/pressure.jpg";
import screen from "../assets/screen.jpg";

export const Route = createFileRoute("/_layout/services")({
  component: Services,
});

const services = [
  {
    icon: Home,
    title: "Residential Window Cleaning",
    img: residential,
    bullets: [
      "Interior & exterior glass",
      "Window tracks and sills",
      // "Screen cleaning",
      "Skylights & storm windows",
      "Plans available",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Window Cleaning",
    img: commercial,
    bullets: [
      "Storefronts & offices",
      "Weekly, monthly, or quarterly plans",
      "Low-rise multi-unit properties",
      "After-hours scheduling available",
    ],
  },
  {
    icon: Droplets,
    title: "Screen Cleaning",
    img: screen,
    bullets: [
      "Pool enclosure screens",
      "Lanai & patio screens",
      "Window screen cleaning",
      "Screen frame & track detailing",
    ],
  },
];

const extras = [
  { icon: Sparkles, t: "Hard Water Stain Removal", d: "Restore foggy, mineral-stained glass to a clear shine." },
  { icon: Wind, t: "Screen Cleaning", d: "Gentle deep-clean to keep your view sharp and bug-free." },
  { icon: Layers, t: "Mold and Mildew Removal", d: "Remove mold and mildew leaving your windows looking brand new." },
  { icon: Droplets, t: "Planned Cleanings", d: "Inquire about our cleaning plans to make sure you never worry about your windows again." },
];

function Services() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Our Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Everything you need for spotless glass — inside and out.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            From a one-time refresh to ongoing care, Braxton's offers professional cleaning services tailored to homes and businesses across Lake Mary and the greater Orlando area.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-20">
        {services.map((s, i) => (
          <div key={s.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                <s.icon className="h-4 w-4" /> Service
              </div>
              <h2 className="mt-3 text-3xl font-bold">{s.title}</h2>
              <ul className="mt-5 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-sky-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-block rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700">
                Request a Quote
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold">Renouned Services</h2>
          <p className="mt-2 text-muted-foreground">Everything we do to make your home sparkle.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {extras.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
