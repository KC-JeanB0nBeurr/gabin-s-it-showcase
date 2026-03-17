import { realisations } from "@/data/portfolio";
import RealisationCard from "./RealisationCard";

interface Props {
  activeFilter: string | null;
}

const sectionOrder: { key: string; label: string }[] = [
  { key: "formation", label: "Réalisations en cours de formation" },
  { key: "pro-1", label: "Réalisations en milieu professionnel — 1ère année" },
  { key: "pro-2", label: "Réalisations en milieu professionnel — 2ème année" },
];

const RealisationsSection = ({ activeFilter }: Props) => {
  const filtered = activeFilter
    ? realisations.filter((r) => r.competences.includes(activeFilter))
    : realisations;

  return (
    <section className="pb-16">
      <div className="container">
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Réalisations professionnelles
        </h2>
        {activeFilter && (
          <p className="text-sm text-muted-foreground mb-6">
            Filtre actif : <span className="font-mono font-medium text-primary">{activeFilter}</span>
          </p>
        )}
        {!activeFilter && <div className="mb-6" />}

        {sectionOrder.map(({ key, label }) => {
          const items = filtered.filter((r) => r.category === key);
          if (items.length === 0) return null;
          return (
            <div key={key} className="mb-10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {label}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((r, i) => (
                  <RealisationCard key={`${r.title}-${r.category}-${i}`} r={r} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RealisationsSection;
