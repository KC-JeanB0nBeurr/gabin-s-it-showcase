import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Shield,
  Server,
  Code,
  Network,
  Flame,
  Globe,
  Sparkles,
  Lightbulb,
  Zap,
  Languages,
  Monitor,
} from "lucide-react";

const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

const formation = [
  {
    period: "2024 – 2026",
    title: "BTS SIO option SISR",
    place: "Lycée Privé Saint-Marc, Nivolas-Vermelle (alternance)",
    highlight: true,
  },
  {
    period: "2020 – 2024",
    title: "Bac STI2D",
    place: "Lycée Privé Saint-Marc, Nivolas-Vermelle",
  },
  {
    period: "2016 – 2020",
    title: "Brevet des collèges — Mention Assez Bien",
    place: "Collège privé Jeanne d'Arc, Pont-de-Beauvoisin",
  },
];

const experiences = [
  {
    period: "2024 – 2026",
    title: "Technicien support informatique (alternance)",
    description:
      "Support utilisateur, gestion de parc, déploiement Windows 11, application ISO 27001, gestion des sauvegardes serveur.",
  },
  {
    period: "Juillet 2020",
    title: "Employé polyvalent — Intermarché",
    description: "Mise en rayon, gestion du stock.",
  },
  {
    period: "Décembre 2020",
    title: "Stagiaire — Pasquier",
    description: "Production (observation), emballage, bureau d'étude, vente.",
  },
];

const hardSkills = [
  { icon: Server, label: "Administration systèmes", desc: "Windows Server, Active Directory, GPO" },
  { icon: Network, label: "Réseaux", desc: "TCP/IP, VLAN, Spanning Tree, VPN, DHCP, DNS" },
  { icon: Shield, label: "Cybersécurité", desc: "Firewall, ISO 27001, KeePass, politiques de sécurité" },
  { icon: Code, label: "Développement", desc: "Python, C/C++, scripting" },
  { icon: Monitor, label: "Déploiement", desc: "Migration Windows 11, imaging, déploiement de services" },
  { icon: Globe, label: "Web & Bureautique", desc: "Word, Excel, PowerPoint, SolidWorks, FreeCAD" },
];

const softSkills = [
  { icon: Lightbulb, label: "Curieux", desc: "Veille technologique permanente, auto-formation" },
  { icon: Zap, label: "Dynamique", desc: "Proactif, force de proposition" },
  { icon: Flame, label: "Travailleur", desc: "Rigueur et persévérance face aux défis techniques" },
];

const langues = [
  { label: "Anglais", level: "B2" },
  { label: "Espagnol", level: "A2" },
];

const ParcoursPage = () => (
  <main className="pt-12 pb-20">
    <div className="container max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
          Mon parcours
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Formation, expériences et compétences acquises
        </p>
      </motion.div>

      {/* Formation */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
        className="mb-14"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <GraduationCap className="h-5 w-5 text-primary" />
          Formation
        </h2>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          {formation.map((f, i) => (
            <div key={i} className="relative">
              <span
                className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
                  f.highlight
                    ? "border-primary bg-primary/20"
                    : "border-border bg-background"
                }`}
              />
              <span className="font-mono text-[11px] text-muted-foreground">{f.period}</span>
              <h3 className="text-sm font-semibold text-foreground mt-0.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.place}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Expériences */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.15 }}
        className="mb-14"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <Briefcase className="h-5 w-5 text-primary" />
          Expériences professionnelles
        </h2>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          {experiences.map((e, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-border bg-background" />
              <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
              <h3 className="text-sm font-semibold text-foreground mt-0.5">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Compétences techniques */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="mb-14"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          Compétences techniques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hardSkills.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="rounded-lg bg-primary/10 p-1.5">
                  <s.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{s.label}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Soft Skills */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.25 }}
        className="mb-14"
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <Flame className="h-5 w-5 text-primary" />
          Qualités personnelles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {softSkills.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-5 shadow-card text-center"
            >
              <div className="inline-flex rounded-lg bg-primary/10 p-2 mb-3">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{s.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Langues */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
      >
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
          <Languages className="h-5 w-5 text-primary" />
          Langues
        </h2>
        <div className="flex gap-4">
          {langues.map((l) => (
            <div
              key={l.label}
              className="rounded-xl border border-border bg-card px-6 py-4 shadow-card flex items-center gap-3"
            >
              <span className="text-sm font-semibold text-foreground">{l.label}</span>
              <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {l.level}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  </main>
);

export default ParcoursPage;
