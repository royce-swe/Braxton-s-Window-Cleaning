import { createFileRoute, Link } from "@tanstack/react-router";
import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import residential from "../assets/residential.jpg";
import commercial from "../assets/commercial.jpg";
import pressure from "../assets/pressure.jpg";
import hero from "../assets/hero.jpg";
import solarBefore from "../assets/solarBefore.jpg";
import solarAfter from "../assets/solarAfter.jpg";

export const Route = createFileRoute("/_layout/gallery")({
  component: Gallery,
});

const beforeAfter = [
  { before: before1, after: after1, label: "Dusty exterior pane" },
  { before: before2, after: after2, label: "Dirty exterior window" },
  { before: solarBefore, after: solarAfter, label: "Dirty solar panels" },
];

const gallery = [hero, residential, commercial, pressure];

function Gallery() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Gallery</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            See the CRP Exterior difference.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Before & afters and recent jobs from across Lake Mary and the greater Orlando area. Drag the slider in your mind — the difference speaks for itself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Before & After</h2>
        <div className="mt-10 space-y-12">
          {beforeAfter.map((ba) => (
            <div key={ba.label}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {ba.label}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <figure className="relative overflow-hidden rounded-2xl border border-border">
                  <img src={ba.before} alt="Before" loading="lazy" width={800} height={800} className="aspect-square w-full object-cover" />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative overflow-hidden rounded-2xl border border-border">
                  <img src={ba.after} alt="After" loading="lazy" width={800} height={800} className="aspect-square w-full object-cover" />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
                    After
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold">Recent Work</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Recent job ${i + 1}`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-block rounded-full bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">
              Book Your Cleaning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
