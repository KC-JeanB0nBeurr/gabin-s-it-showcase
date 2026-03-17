import { motion } from "framer-motion";
import { BookOpen, Lock } from "lucide-react";

const transition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] };

const tools = [
  {
    name: "Microsoft OneNote",
    role: "Méthodologie & Documentation",
    description:
      "Organisation des notes de veille technologique, documentation de procédures et structuration des apprentissages en carnets thématiques.",
    icon: BookOpen,
  },
  {
    name: "KeePass Pro",
    role: "Sécurité des accès",
    description:
      "Gestion centralisée et sécurisée des identifiants d'accès aux équipements réseau, serveurs et services cloud de l'entreprise.",
    icon: Lock,
  },
];

const VeilleSection = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Stack de veille technologique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -2 }}
              transition={transition}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-secondary p-2">
                  <tool.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {tool.name}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {tool.role}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VeilleSection;
