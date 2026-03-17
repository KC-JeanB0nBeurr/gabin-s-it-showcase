import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";

const transition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] };

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <MapPin className="h-3 w-3" />
              Lycée Saint-Marc
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Session 2025
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Gabin Donnier
          </h1>
          <p className="mt-2 text-xl font-medium text-muted-foreground">
            Solutions d'infrastructure et cybersécurité — BTS SIO SISR
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xl">
            Portfolio de compétences numériques et gestion d'infrastructure,
            conforme au référentiel BTS Services Informatiques aux Organisations.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
              <Download className="h-4 w-4" />
              Télécharger le Tableau de Synthèse (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
