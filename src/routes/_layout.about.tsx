import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import about from "../assets/about.jpg";

export const Route = createFileRoute("/_layout/about")({
  component: About,
});

const values = [
  { icon: Heart, t: "Care", d: "We treat every property like it's our own — clean, careful, considerate." },
  { icon: Users, t: "Community", d: "Locally owned in Lake Mary. Your neighbors, not a faceless chain." },
  { icon: Award, t: "Craft", d: "Trained technicians, pro-grade tools, and a relentless eye for detail." },
  { icon: Sparkles, t: "Consistency", d: "The same streak-free finish on every job, every time." },
];

function About() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Hi, I'm Braxton — and I love clean windows.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            What started as a side hustle washing windows for friends and family, has grown into many Lake Mary homeowners go-to local cleaning service. Same hands-on care, just a bigger ladder.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <img src={about} alt="Braxton with the company van" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">A local business with a sky-high standard.</h2>
          <p className="mt-4 text-muted-foreground">
            I built my window cleaning business on a simple promise: do great work, show up when we say we will, and leave every home better than we found it. Today our small team serves homeowners and businesses across Lake Mary and the surrounding Orlando area, and every customer gets that personal touch.
          </p>
          <p className="mt-4 text-muted-foreground">
            We're eco-conscious in the products we use and obsessed with making your windows look brand new.
          </p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700">
            Work With Us
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-100 text-sky-700">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
