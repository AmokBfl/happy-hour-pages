import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Labarak Cafétéria Oran" },
      { name: "description", content: "Retrouvez Labarak à Oran : adresse, horaires et contact." },
      { property: "og:title", content: "Contact — Labarak" },
      { property: "og:description", content: "Adresse, horaires et contact." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Nous trouver</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Passez nous voir.</h1>
          <p className="text-muted-foreground mt-4 max-w-md">
            Une question, une commande spéciale, ou juste envie d'un bon café ?
            On vous attend chez Labarak.
          </p>

          <ul className="mt-10 space-y-5">
            <Info icon={<MapPin className="h-5 w-5" />} title="Adresse" value="Oran, Algérie" />
            <Info icon={<Clock className="h-5 w-5" />} title="Horaires" value="Tous les jours · 8h – 23h" />
            <Info icon={<Phone className="h-5 w-5" />} title="Téléphone" value="+213 5XX XX XX XX" />
            <Info icon={<Mail className="h-5 w-5" />} title="Email" value="contact@labarak.dz" />
          </ul>

          <div className="mt-10 flex gap-3">
            <a href="https://www.instagram.com/la_barak_oran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/cafelabarak/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/CJsFrfbd2MJGsNZ78"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-warm)] aspect-square md:aspect-auto md:h-[560px]"
        >
          <iframe
            title="Carte Labarak Oran"
            src="https://www.google.com/maps?q=35.7300101,-0.5858105&z=17&output=embed"
            className="w-full h-full pointer-events-none"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="h-11 w-11 rounded-full bg-[var(--gradient-warm)] text-primary-foreground grid place-items-center shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </li>
  );
}
