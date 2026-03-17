import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Realisation, competences } from "@/data/portfolio";

const transition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] };

const categoryColors: Record<string, string> = {
  formation: "bg-primary/10 text-primary",
  "pro-1": "bg-emerald-50 text-emerald-600",
  "pro-2": "bg-amber-50 text-amber-600",
};

const RealisationCard = ({ r }: { r: Realisation }) => {
  const linkedComps = competences.filter((c) => r.competences.includes(c.id));

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={transition}
      className="rounded-xl border border-border bg-card p-6 shadow-card flex flex-col gap-4"
    >
      <div className="flex justify-between items-start gap-2">
        <span
          className={`text-[11px] font-mono font-medium px-2 py-1 rounded ${
            categoryColors[r.category] || "bg-secondary text-muted-foreground"
          }`}
        >
          {r.categoryLabel}
        </span>
        {r.period && (
          <time className="text-[11px] font-mono text-muted-foreground tabular-nums whitespace-nowrap">
            {r.period}
          </time>
        )}
      </div>

      <h3 className="text-base font-semibold text-foreground leading-snug">
        {r.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {r.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {r.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium bg-secondary text-muted-foreground px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {r.files && r.files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {r.files.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1 text-[11px] text-primary font-medium"
            >
              <FileText className="h-3 w-3" />
              {f}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-auto pt-4 border-t border-border">
        {linkedComps.map((c) => (
          <span
            key={c.id}
            className={`inline-flex items-center gap-1 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded ${c.color}`}
            title={c.label}
          >
            {c.id}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default RealisationCard;
