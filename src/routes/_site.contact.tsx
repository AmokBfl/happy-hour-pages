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
            <a href="#" className="h-11 w-11 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-11 w-11 grid place-items-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-warm)] aspect-square md:aspect-auto md:h-[560px]">
          <iframe
            title="Carte Oran"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.75%2C35.65%2C-0.55%2C35.75&layer=mapnik&marker=35.6971%2C-0.6308"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
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
