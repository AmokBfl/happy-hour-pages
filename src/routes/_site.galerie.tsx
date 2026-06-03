import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/labarak-1.jpg.asset.json";
import interiorAsset from "@/assets/labarak-2.jpg.asset.json";
import sweet from "@/assets/sweet.jpg";
import savory from "@/assets/savory.jpg";
import coffee from "@/assets/coffee.jpg";

const hero = heroAsset.url;
const interior = interiorAsset.url;

export const Route = createFileRoute("/_site/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Labarak Cafétéria Oran" },
      { name: "description", content: "Découvrez l'ambiance et les créations de Labarak en images." },
      { property: "og:title", content: "Galerie — Labarak" },
      { property: "og:description", content: "L'ambiance et les délices de Labarak en images." },
    ],
  }),
  component: Galerie,
});

const photos = [
  { src: hero, alt: "Comptoir de la cafétéria", span: "md:col-span-2 md:row-span-2" },
  { src: sweet, alt: "Pâtisseries" },
  { src: coffee, alt: "Café latte" },
  { src: savory, alt: "Sandwichs et quiches", span: "md:col-span-2" },
  { src: interior, alt: "Salle de la cafétéria", span: "md:col-span-3" },
];

function Galerie() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">En images</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Galerie</h1>
        <p className="text-muted-foreground mt-4">
          Un aperçu de notre univers : l'ambiance, les saveurs, les détails.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl bg-secondary group ${p.span ?? ""}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
