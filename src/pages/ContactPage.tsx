import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "gabindonnier@gmail.com",
    href: "mailto:gabindonnier@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 13 27 56 22",
    href: "tel:+33613275622",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gabin Donnier",
    href: "https://www.linkedin.com/in/gabin-donnier-792894300/",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "500 Routes des sources, 38490 Aoste, France",
    href: undefined,
  },
];

const ContactPage = () => (
  <main className="pt-12 pb-20">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
          Contact
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          N'hésitez pas à me contacter pour toute question ou opportunité.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
        className="space-y-4"
      >
        {contacts.map((c) => {
          const Inner = (
            <div className="rounded-xl border border-border bg-card p-6 shadow-card flex items-start gap-4 transition-colors hover:border-primary/30">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {c.label}
                </span>
                <p className="text-sm font-semibold text-foreground mt-0.5">{c.value}</p>
              </div>
            </div>
          );

          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              {Inner}
            </a>
          ) : (
            <div key={c.label}>{Inner}</div>
          );
        })}
      </motion.div>
    </div>
  </main>
);

export default ContactPage;
