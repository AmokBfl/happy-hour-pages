import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin } from "lucide-react";
import logoAsset from "@/assets/labarak-logo.png.asset.json";
import { useState } from "react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)} aria-label="Labarak — Accueil">
            <span className="h-11 w-11 rounded-full grid place-items-center shadow-[var(--shadow-warm)]" style={{ background: "var(--gradient-warm)" }}>
              <img src={logoAsset.url} alt="Labarak" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display font-bold text-xl tracking-tight">
              Labarak
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Nous trouver
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
            </div>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-11 w-11 rounded-full grid place-items-center shadow-[var(--shadow-warm)]" style={{ background: "var(--gradient-warm)" }}>
                <img src={logoAsset.url} alt="Labarak" className="h-8 w-8 object-contain" />
              </span>
              <span className="font-display font-bold text-xl">Labarak</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Une pause gourmande au cœur d'Oran. Sucré, salé et café de spécialité.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Adresse</h4>
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              Oran, Algérie
            </p>
            <p className="text-sm text-muted-foreground mt-2">Ouvert 7j/7 · 8h – 23h</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 grid place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Labarak · Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
