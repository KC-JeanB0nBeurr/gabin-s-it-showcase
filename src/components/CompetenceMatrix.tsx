import { motion } from "framer-motion";
import { competences } from "@/data/portfolio";
import {
  Server,
  AlertTriangle,
  Globe,
  FolderKanban,
  MonitorCheck,
  GraduationCap,
} from "lucide-react";

const icons = [Server, AlertTriangle, Globe, FolderKanban, MonitorCheck, GraduationCap];

const transition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

interface Props {
  activeFilter: string | null;
  onFilter: (id: string | null) => void;
}

const CompetenceMatrix = ({ activeFilter, onFilter }: Props) => {
  return (
    <section className="pb-12">
      <div className="container">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Blocs de compétences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competences.map((c, i) => {
            const Icon = icons[i];
            const isActive = activeFilter === c.id;
            return (
              <motion.button
                key={c.id}
                whileHover={{ y: -2 }}
                transition={transition}
                onClick={() => onFilter(isActive ? null : c.id)}
                className={`text-left rounded-xl border p-5 shadow-card transition-all ${
                  isActive
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`rounded-lg p-2 ${c.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {c.id}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground leading-tight mt-0.5">
                      {c.label}
                    </h3>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompetenceMatrix;
