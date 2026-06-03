import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Labarak Cafétéria Oran" },
      { name: "description", content: "Découvrez le menu de Labarak : pâtisseries, sandwichs, boissons chaudes et froides à Oran." },
      { property: "og:title", content: "Menu — Labarak" },
      { property: "og:description", content: "Sucré, salé et boissons de spécialité." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Sucré",
    items: [
      { name: "Croissant beurre", desc: "Pur beurre, feuilletage maison", price: "80 DA" },
      { name: "Pain au chocolat", price: "100 DA" },
      { name: "Donut glacé", desc: "Chocolat, vanille ou fraise", price: "120 DA" },
      { name: "Mille-feuille", desc: "Crème pâtissière vanille", price: "200 DA" },
      { name: "Tarte aux fruits", price: "220 DA" },
      { name: "Cheesecake", desc: "Coulis fruits rouges", price: "250 DA" },
    ],
  },
  {
    title: "Salé",
    items: [
      { name: "Sandwich poulet", desc: "Pain artisanal, crudités, sauce maison", price: "350 DA" },
      { name: "Panini fromage", price: "300 DA" },
      { name: "Quiche lorraine", price: "280 DA" },
      { name: "Tartine avocat & œuf", price: "400 DA" },
      { name: "Croque-monsieur", price: "320 DA" },
      { name: "Salade César", price: "450 DA" },
    ],
  },
  {
    title: "Boissons chaudes",
    items: [
      { name: "Espresso", price: "80 DA" },
      { name: "Cappuccino", price: "150 DA" },
      { name: "Café Latte", price: "180 DA" },
      { name: "Chocolat chaud", price: "200 DA" },
      { name: "Thé à la menthe", price: "100 DA" },
    ],
  },
  {
    title: "Boissons fraîches",
    items: [
      { name: "Jus d'orange pressé", price: "200 DA" },
      { name: "Smoothie banane-fraise", price: "300 DA" },
      { name: "Ice latte", price: "220 DA" },
      { name: "Limonade maison", price: "180 DA" },
    ],
  },
];

function MenuPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">La carte</span>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Notre menu</h1>
        <p className="text-muted-foreground mt-4">
          Tous nos produits sont préparés sur place, chaque jour, avec des ingrédients soigneusement sélectionnés.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {sections.map((s) => (
          <div key={s.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {s.items.map((it) => (
                <li key={it.name} className="flex items-baseline gap-3">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-semibold text-lg">{it.name}</span>
                      <span className="flex-1 border-b border-dashed border-border/80 translate-y-[-4px]" />
                      <span className="font-display font-semibold text-primary">{it.price}</span>
                    </div>
                    {it.desc && <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
