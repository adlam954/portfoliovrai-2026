import { TechWatchItem } from "@/components/portfolio/TechWatchSection";

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "devops" | "tools" | "soft";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  year: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  image: string;
  technologies: string[];
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  pdfUrl?: string; // Lien vers le PDF du projet
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
  profileImage: string;
  socials: SocialLink[];
  highlights: string[];
  languages: { name: string; level: string }[];
}

// ============ DONNÉES À PERSONNALISER ============

export const personalInfo: PersonalInfo = {
  name: "Adam Lamech",
  title: "BTS SIO",
  tagline: "Étudiant BTS SIO option SISR passionné par l'infrastructure et le réseau.",
  bio: "Étudiant en première année de BTS SIO option SISR, je souhaite continuer mes études en licence professionelle Administration et Sécurité des Réseaux, des Systèmes et des Applications.",
  location: "Créteil, 94000",
  email: "adamlam108@gmail.com",
  phone: "06 67 92 54 43",
  cvUrl: "/assets/alternance LP 2026.pdf", // Remplacer par le lien vers votre CV
  profileImage: "/profile-photo.jpg",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adam-lamech-974a63261/?originalSubdomain=fr", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/adlam954", icon: "github" },
  ],
  highlights: [
    "Rigoureux et organisé",
    "Forte capacité d'adaptation",
    "Esprit d'équipe",
    "Permis B & A2",
  ],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "B2" },
    { name: "Espagnol", level: "B2" },
  ],
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 4, category: "frontend" },
  { name: "JavaScript", level: 3, category: "frontend" },
  { name: "React", level: 2, category: "frontend" },
  
  // Backend
  { name: "Python", level: 3, category: "backend" },
  { name: "PHP", level: 2, category: "backend" },
  { name: "SQL", level: 3, category: "backend" },
  
  // DevOps / Infrastructure
  { name: "Windows Server", level: 3, category: "devops" },
  { name: "Linux", level: 3, category: "devops" },
  { name: "Active Directory", level: 3, category: "devops" },
  { name: "Virtualisation", level: 3, category: "devops" },
  { name: "Réseau TCP/IP", level: 3, category: "devops" },
  
  // Outils
  { name: "VS Code", level: 4, category: "tools" },
  { name: "Git", level: 3, category: "tools" },
  { name: "Office 365", level: 4, category: "tools" },
  { name: "VirtualBox/VMware", level: 3, category: "tools" },
  
  // Soft Skills
  { name: "Travail d'équipe", level: 5, category: "soft" },
  { name: "Communication", level: 4, category: "soft" },
  { name: "Résolution de problèmes", level: 4, category: "soft" },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Technicien Informatique",
    company: "OMC",
    location: "Maisons-Alfort",
    startDate: "Mai 2025",
    endDate: "Présent",
    description: "Stage en entreprise dans le domaine de l'informatique.",
    achievements: [
      "Support utilisateur et dépannage informatique",
      "Installation et configuration de postes de travail",
      "Gestion du parc informatique",
      "Documentation des procédures techniques",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "BTS Services Informatiques aux Organisations (SIO)",
    school: "Lycée Saint Gabriel",
    location: "Bagneux",
    year: "2025",
    description: "Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)",
  },
  {
    id: "edu-2",
    degree: "BUT Génie Industriel et Maintenance",
    school: "UPEC",
    location: "Lieusaint",
    year: "2024",
    description: "Première année",
  },
  {
    id: "edu-3",
    degree: "Baccalauréat Général",
    school: "Lycée Rosa Parks",
    location: "Montgeron",
    year: "2023",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Mise en place Active Directory & GLPI – GSB",
    description: "Ce projet a pour objectif de mettre en place une infrastructure informatique centralisée permettant de gérer les utilisateurs, les droits et le support informatique de l'entreprise GSB. Il vise à intégrer Active Directory et GLPI afin d'automatiser la gestion des comptes et le traitement des tickets.",
    role: "Administrateur Système",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    pdfUrl: "/assets/pr2.pdf",
    technologies: ["Windows Server", "Active Directory", "GLPI", "GPO", "DNS", "DHCP"],
    results: "Infrastructure centralisée avec gestion automatisée des tickets et des utilisateurs",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Mise en place des VLAN et sécurisation du réseau GSB",
    description: "Ce TP a pour objectif de concevoir et déployer un réseau segmenté en plusieurs VLAN afin de séparer les services de l'entreprise. Il permet de sécuriser les communications, d'améliorer l'organisation du réseau et de contrôler les accès inter-VLAN et Wi-Fi.",
    role: "Technicien Réseau",
    image: "/assets/tp-vlan-gsb.png",
    technologies: ["VLAN", "Switch Cisco", "Routage Inter-VLAN", "Wi-Fi", "Sécurité Réseau"],
    results: "Réseau segmenté et sécurisé avec contrôle des accès inter-services",
    pdfUrl: "/assets/pr1.pdf",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Exploration du protocole SNMP avec iReasoning",
    description: "Ce TP a pour objectif de découvrir le fonctionnement du protocole SNMP utilisé pour la supervision des équipements réseau. Il permet de consulter, modifier et analyser les informations système d'une machine via sa MIB et d'observer les échanges réseau.",
    role: "Technicien Supervision",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["SNMP", "iReasoning", "MIB Browser", "Wireshark", "Supervision"],
    results: "Maîtrise de la supervision SNMP et analyse des échanges réseau",
    pdfUrl: "/assets/snmp.pdf",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Mise en place de réseaux IPv6 et DHCPv6",
    description: "Ce TP a pour objectif de configurer un réseau en IPv6 avec routage entre plusieurs réseaux. Il permet de comprendre l'autoconfiguration SLAAC, le routage IPv6 et la distribution d'options réseau via un serveur DHCPv6.",
    role: "Technicien Réseau",
    image: "/assets/tp-ipv6.png",
    technologies: ["IPv6", "DHCPv6", "SLAAC", "Routage", "Cisco Packet Tracer"],
    results: "Réseau IPv6 fonctionnel avec autoconfiguration et routage multi-réseaux",
    pdfUrl: "/assets/ipv6.pdf", 
    featured: true,
  },
  {
    id: "proj-5",
    title: "Organisation du développement professionnel",
    description: "Ce TP a pour objectif de structurer un projet professionnel en mettant en place une identité numérique, une veille technologique et un plan de formation. Il permet de préparer l'insertion professionnelle dans les métiers des systèmes et réseaux.",
    role: "Étudiant BTS SIO",
    image: "/assets/tp-organisation-pro.png",
    technologies: ["Veille Technologique", "LinkedIn", "Portfolio", "Formation", "Certification"],
    results: "Identité numérique structurée et plan de développement professionnel établi",
    pdfUrl: "/assets/tp1.pdf",
    featured: false,
  },
];

export const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "Infrastructure & DevOps",
  tools: "Outils",
  soft: "Soft Skills",
};

