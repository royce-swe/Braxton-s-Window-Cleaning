import { Link, Outlet } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/about.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const PHONE_DISPLAY = "(407) 686-0741";
export const PHONE_HREF = "tel:+14076860741";
export const EMAIL = "contact@braxtonswindows.com";
export const CITY = "Lake Mary, FL";

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <img src={logoImg} alt="Braxton's Window Cleaning logo" className="h-9 w-9 rounded-lg object-cover" />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-tight">Braxton's</span>
              <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">
                Window Cleaning
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-sky-600" }}
                className="text-sm font-medium text-foreground/80 transition hover:text-sky-600"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-sky-600" }}
                  className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <img src={logoImg} alt="Braxton's Window Cleaning logo" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-bold">Braxton's Window Cleaning</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Streak-free shine for homes and businesses across {CITY} and surrounding areas.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {CITY}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Service Areas</h4>
            <p className="mt-3 text-sm text-slate-400">
              Lake Mary · Sanford · Longwood · Heathrow · Winter Springs · Oviedo · Winter Park · Orlando
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Braxton's Window Cleaning. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
