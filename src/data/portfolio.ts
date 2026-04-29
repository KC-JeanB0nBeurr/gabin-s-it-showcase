export interface Competence {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  details: string[];
}

export const competences: Competence[] = [
  {
    id: "B1",
    label: "Gérer le patrimoine informatique",
    shortLabel: "Patrimoine",
    color: "bg-primary/10 text-primary",
    details: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards",
      "Mettre en place et vérifier les niveaux d'habilitation",
      "Vérifier les conditions de la continuité d'un service",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation",
    ],
  },
  {
    id: "B2",
    label: "Répondre aux incidents et aux demandes",
    shortLabel: "Incidents",
    color: "bg-orange-50 text-orange-600",
    details: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services réseau et système",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    id: "B3",
    label: "Développer la présence en ligne",
    shortLabel: "Présence en ligne",
    color: "bg-violet-50 text-violet-600",
    details: [
      "Participer à la valorisation de l'image de l'organisation",
      "Référencer les services en ligne et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web",
    ],
  },
  {
    id: "B4",
    label: "Travailler en mode projet",
    shortLabel: "Mode projet",
    color: "bg-emerald-50 text-emerald-600",
    details: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    ],
  },
  {
    id: "B5",
    label: "Mettre à disposition un service informatique",
    shortLabel: "Service",
    color: "bg-cyan-50 text-cyan-600",
    details: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    id: "B6",
    label: "Organiser son développement professionnel",
    shortLabel: "Développement pro",
    color: "bg-rose-50 text-rose-600",
    details: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];

export interface RealisationFile {
  label: string;
  url: string;
}

export interface Realisation {
  title: string;
  category: "formation" | "pro-1" | "pro-2";
  categoryLabel: string;
  description: string;
  competences: string[]; // ids
  tags: string[];
  period?: string;
  files?: RealisationFile[];
}

export const realisations: Realisation[] = [
  // En cours de formation
  {
    title: "Interconnexion de 3 sites distants",
    category: "formation",
    categoryLabel: "Projet Académique",
    description:
      "Mise en place d'une architecture réseau redondante via protocole Spanning Tree pour assurer la continuité de service et la gestion des boucles réseau entre 3 sites distants.",
    competences: ["B1", "B5"],
    tags: ["SISR", "Spanning Tree", "Réseau"],
    period: "Sept 2024",
    files: [
      { label: "Schéma Réseau", url: "/files/Projet1_schema.pkt" },
      { label: "Cahier des charges", url: "/files/Cahier_des_charges_projet_1.odt" },
    ],
  },
  {
    title: "Réseaux VPN et mise en place d'un serveur applicatif",
    category: "formation",
    categoryLabel: "Projet Académique",
    description:
      "Mise en place d'un réseau VPN sécurisé et déploiement d'un serveur applicatif. Gestion de l'applicatif sur le serveur et déploiement de l'applicatif côté serveur, avec production du fichier technique et du schéma du projet.",
    competences: ["B1", "B3", "B5"],
    tags: ["SISR", "VPN", "Serveur", "Applicatif"],
    period: "2024–2025",
    files: [
      { label: "Fiche technique", url: "/files/Fiche_technique_projet_2.odt" },
      { label: "Schéma Projet", url: "/files/Projet2_schema.pkt" },
    ],
  },
  // Milieu professionnel — 1ère année
  {
    title: "Application de la norme ISO 27001",
    category: "pro-1",
    categoryLabel: "Stage 1ère année",
    description:
      "Mise en œuvre des exigences de la norme ISO 27001 pour la gestion de la sécurité de l'information au sein de l'infrastructure de l'entreprise.",
    competences: ["B1", "B6"],
    tags: ["ISO 27001", "Sécurité", "Conformité"],
    period: "2024",
  },
  {
    title: "Gestion et résolution des tickets du support",
    category: "pro-1",
    categoryLabel: "Stage 1ère année",
    description:
      "Collecte, suivi, orientation et résolution des demandes d'assistance utilisateur via le système de ticketing de l'entreprise.",
    competences: ["B2"],
    tags: ["Support", "Ticketing", "Helpdesk"],
    period: "2024",
  },
  {
    title: "Déploiement de Windows 11 avant la fin de Windows 10",
    category: "pro-1",
    categoryLabel: "Stage 1ère année",
    description:
      "Migration des postes de travail de Windows 10 vers Windows 11 en anticipation de la fin de support, incluant la préparation des images et le déploiement sur le parc.",
    competences: ["B5"],
    tags: ["Windows 11", "Migration", "Déploiement"],
    period: "2024",
  },
  {
    title: "Utilisation de OneNote et KeePass Pro",
    category: "pro-1",
    categoryLabel: "Stage 1ère année",
    description:
      "Mise en place d'un environnement d'apprentissage et de veille technologique avec OneNote pour la documentation et KeePass Pro pour la gestion sécurisée des accès.",
    competences: ["B6"],
    tags: ["OneNote", "KeePass", "Veille"],
    period: "2024",
  },
  // Milieu professionnel — 2ème année
  {
    title: "Application de la norme ISO 27001",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Poursuite et approfondissement de l'application de la norme ISO 27001, audit des processus et mise à jour de la documentation de sécurité.",
    competences: ["B1", "B6"],
    tags: ["ISO 27001", "Sécurité", "Audit"],
    period: "2025",
  },
  {
    title: "Changement de cassettes de sauvegarde serveur",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Gestion des rotations de cassettes de sauvegarde sur les serveurs de production, vérification de l'intégrité des sauvegardes et suivi du plan de sauvegarde.",
    competences: ["B1"],
    tags: ["Sauvegarde", "Serveur", "Cassettes"],
    period: "2025",
  },
  {
    title: "Gestion et résolution des tickets du support",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Traitement avancé des demandes de support : diagnostic, résolution d'incidents et suivi des escalades techniques.",
    competences: ["B2"],
    tags: ["Support", "Ticketing", "Incidents"],
    period: "2025",
  },
  {
    title: "Suivi des renouvellements de postes annuels",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Recensement du parc informatique, planification du renouvellement des postes et suivi des indicateurs de projet associés.",
    competences: ["B1", "B5"],
    tags: ["Parc", "Renouvellement", "Planification"],
    period: "2025",
  },
  {
    title: "Déploiement de Windows 11 avant la fin de Windows 10",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Continuation du projet de migration Windows 11 sur l'ensemble du parc, avec gestion des compatibilités applicatives et formation des utilisateurs.",
    competences: ["B5"],
    tags: ["Windows 11", "Migration", "150 postes"],
    period: "2025",
  },
  {
    title: "Utilisation de OneNote et KeePass Pro",
    category: "pro-2",
    categoryLabel: "Stage 2ème année",
    description:
      "Consolidation de l'environnement de veille : structuration des carnets OneNote et gestion centralisée des mots de passe avec KeePass Pro.",
    competences: ["B6"],
    tags: ["OneNote", "KeePass", "Veille"],
    period: "2025",
  },
];
