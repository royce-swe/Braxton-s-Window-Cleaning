import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Shield, Clock, Leaf, Star, Phone, Sparkles, Home, Building2 } from "lucide-react";
import hero from "../assets/hero.jpg";
import residential from "../assets/residential.jpg";
import commercial from "../assets/commercial.jpg";
import pressure from "../assets/pressure.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "../components/SiteLayout";

export const Route = createFileRoute("/_layout/")({
  component: Home_,
});

const stats = [
  { v: "750+", l: "Happy Customers" },
  { v: "5★", l: "Google Rating" },
  { v: "100%", l: "Satisfaction" },
  { v: "Lake Mary", l: "Locally Owned" },
];

const services = [
  { icon: Home, title: "Residential", img: residential, desc: "Interior, exterior, screens, tracks, and sills — every pane spotless." },
  { icon: Building2, title: "Commercial", img: commercial, desc: "Storefronts and offices kept inviting with reliable scheduled cleanings." },
  { icon: Sparkles, title: "Add-Ons", img: pressure, desc: "Pressure washing, hard water removal, gutter cleaning, and mirrors." },
];

const why = [
  { icon: Shield, t: "Fully Insured", d: "Full liability coverage on every job — total peace of mind." },
  { icon: Star, t: "5-Star Rated", d: "Hundreds of Lake Mary homeowners trust the Braxton's name." },
  { icon: Clock, t: "On-Time, Every Time", d: "We respect your schedule. Punctual, tidy, professional." },
  { icon: CheckCircle2, t: "100% Satisfaction", d: "Not happy? We'll come back and make it right — guaranteed." },
  { icon: Leaf, t: "Eco-Friendly", d: "Safe for your family, pets, plants, and the environment." },
  { icon: Sparkles, t: "Streak-Free Shine", d: "Pro-grade tools and technique for a flawless finish." },
];

const testimonials = [
  { q: "Braxton and his team made our windows look brand new. Friendly, fast, and worth every penny.", n: "Megan H., Longwood" },
  { q: "Our storefront has never been cleaner. Customers actually noticed. Highly recommend!", n: "Marcus T., Lake Mary" },
  { q: "Honest pricing and incredible attention to detail. Already booked them for next season.", n: "Priya S., Winter Springs" },
  { q: "On time, courteous, and the results speak for themselves. Best in town.", n: "Daniel R., Sanford" },
];

function Home_() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Professional window cleaner squeegeeing a large home window"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            Lake Mary, FL's Trusted Window Cleaning Pros
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Crystal Clear <span className="text-sky-300">Windows</span>, Every Time.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            Professional residential & commercial window cleaning. Let the sunshine in —
            streak-free, guaranteed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-900/40 transition hover:bg-sky-400"
            >
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-white">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-slate-300">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-3 text-muted-foreground">
            From single-story homes to multi-unit commercial properties — we do it all.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <s.icon className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose Braxton's?</h2>
            <p className="mt-3 text-muted-foreground">We're more than a cleaning company — we're your neighbors.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {why.map((w) => (
              <div key={w.t} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sky-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center text-white md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-3xl font-bold">Ready for Spotless Windows?</h2>
            <p className="mt-2 text-sky-100">
              Join hundreds of happy Lake Mary homeowners. Get a free quote today — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-sky-700 hover:bg-sky-50">
              Get a Free Quote
            </Link>
            <a href={PHONE_HREF} className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mt-3 text-muted-foreground">Real reviews from real Lake Mary neighbors.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="border-t border-border bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-2xl font-bold">Proudly Serving Lake Mary, FL & Surrounding Areas</h2>
          <p className="mt-3 text-muted-foreground">
            Lake Mary · Sanford · Longwood · Heathrow · Winter Springs · Oviedo · Winter Park · Orlando
          </p>
        </div>
      </section>
    </>
  );
}
