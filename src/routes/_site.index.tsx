import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Sparkles, Star } from "lucide-react";
import heroAsset from "@/assets/labarak-1.jpg.asset.json";
import secondaryAsset from "@/assets/labarak-2.jpg.asset.json";
import sweet from "@/assets/sweet.jpg";
import savory from "@/assets/savory.jpg";
import coffee from "@/assets/coffee.jpg";

const hero = heroAsset.url;
const coffeeSmall = secondaryAsset.url;

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Labarak — Cafétéria à Oran · Sucré, Salé & Café" },
      { name: "description", content: "Labarak, votre cafétéria conviviale à Oran. Pâtisseries maison, sandwichs frais et café de spécialité dans une ambiance chaleureuse." },
      { property: "og:title", content: "Labarak — Cafétéria à Oran" },
      { property: "og:description", content: "Sucré, salé et café de spécialité au cœur d'Oran." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/70">
              <Sparkles className="h-3 w-3 text-accent" /> Cafétéria à Oran
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Une pause <em className="not-italic text-primary">gourmande</em>,
              <br /> à chaque heure.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Chez <strong className="text-foreground">Labarak</strong>, on prépare avec soin
              ce qui réveille vos matins et adoucit vos après-midis : sucré, salé, café.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition shadow-[var(--shadow-warm)]"
              >
                Voir le menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.google.com/maps/place/La+barak/@35.7300101,-0.5858105,17z/data=!3m1!4b1!4m6!3m5!1s0xd7e636349717c83:0x8ef017626e386866!8m2!3d35.7300101!4d-0.5858105!16s%2Fg%2F11hzpytwh9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold hover:border-primary transition"
              >
                Nous rendre visite
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Oran, Algérie</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 8h – 23h, 7j/7</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-warm)]">
              <img
                src={hero}
                alt="Intérieur chaleureux de la cafétéria Labarak"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-44 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <img src={coffeeSmall} alt="Bibliothèque de Labarak" width={400} height={500} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <a
              href="https://maps.app.goo.gl/CJsFrfbd2MJGsNZ78"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex absolute -top-6 -right-4 items-center gap-2 rounded-full bg-background border border-border px-4 py-2 shadow-lg hover:border-primary transition"
              aria-label="Note 4,4 sur 5 sur Google Maps"
            >
              <span className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <Star className="h-4 w-4 fill-current opacity-50" />
              </span>
              <span className="font-display font-bold text-sm">4,4</span>
              <span className="text-xs text-muted-foreground">sur Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Nos spécialités</h2>
            <p className="text-muted-foreground mt-2">Du sucré, du salé, et tout ce qu'il faut entre les deux.</p>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
            Tout le menu →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: sweet, title: "Sucré", desc: "Croissants, donuts, tartes, mille-feuilles…" },
            { img: savory, title: "Salé", desc: "Paninis, sandwichs, quiches, tartines chaudes." },
            { img: coffee, title: "Boissons", desc: "Espresso, cappuccino, latte, jus pressés." },
          ].map((c) => (
            <article key={c.title} className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-warm)] transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl bg-[var(--gradient-warm)] text-primary-foreground p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Passez nous voir. Le café est déjà prêt.
          </h2>
          <p className="mt-4 opacity-90 max-w-md mx-auto">
            Labarak vous accueille tous les jours à Oran, dans une ambiance cosy et conviviale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-background text-foreground px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            Voir l'adresse <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
