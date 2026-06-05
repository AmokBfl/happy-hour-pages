import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import logoAsset from "@/assets/labarak-logo.png.asset.json";
import { useState } from "react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Menu" },
  { to: "/galerie", label: "Galerie" },
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
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Nous trouver
            </a>
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
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* CONTACT SECTION (en bas de chaque page) */}
      <section id="contact" className="scroll-mt-20 border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Nous trouver</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Passez nous voir.</h2>
              <p className="text-muted-foreground mt-4 max-w-md">
                Une question, une commande spéciale, ou juste envie d'un bon café ?
                On vous attend chez Labarak.
              </p>

              <ul className="mt-10 space-y-5">
                <Info icon={<MapPin className="h-5 w-5" />} title="Adresse" value="Oran, Algérie" />
                <Info icon={<Clock className="h-5 w-5" />} title="Horaires" value="Tous les jours · 8h – 23h" />
                <Info icon={<Phone className="h-5 w-5" />} title="Téléphone" value="0798 39 75 22" />
              </ul>

              <div className="mt-10 flex gap-3">
                <a href="https://www.instagram.com/la_barak_oran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 grid place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/cafelabarak/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 grid place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/CJsFrfbd2MJGsNZ78"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-warm)] aspect-square md:aspect-auto md:h-[520px]"
            >
              <iframe
                title="Carte Labarak Oran"
                src="https://www.google.com/maps?q=35.7300101,-0.5858105&z=17&output=embed"
                className="w-full h-full pointer-events-none"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
              <img src={logoAsset.url} alt="Labarak" className="h-6 w-6 object-contain" />
            </span>
            <span className="font-display font-bold">Labarak</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Labarak · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="h-11 w-11 rounded-full text-primary-foreground grid place-items-center shrink-0" style={{ background: "var(--gradient-warm)" }}>
        {icon}
      </span>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </li>
  );
}
