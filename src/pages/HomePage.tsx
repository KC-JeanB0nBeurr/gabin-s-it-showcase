import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server, Code, Network } from "lucide-react";

const transition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const };

const highlights = [
  { icon: Server, label: "Administration systèmes" },
  { icon: Network, label: "Réseaux & Infrastructure" },
  { icon: Shield, label: "Cybersécurité" },
  { icon: Code, label: "Développement" },
];

const HomePage = () => (
  <main>
    <section className="pt-24 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            BTS SIO — Option SISR
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Gabin Donnier
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Étudiant en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux),
            je m'intéresse particulièrement à l'administration des systèmes, aux réseaux et à la
            cybersécurité. À travers ma formation et mes projets, je développe des compétences
            techniques solides ainsi qu'un esprit d'analyse et de résolution de problèmes.
            Curieux et motivé, je cherche constamment à approfondir mes connaissances et à relever
            de nouveaux défis dans le domaine de l'informatique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.15 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-4 shadow-card flex flex-col items-center gap-2 text-center"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Voir le portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/parcours"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            Mon parcours
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default HomePage;
