import type { CaseItem } from "./site";

export const company = {
  name: "REUTER IT NETWORKS",
  shortName: "REUTER",
  tagline: "Comprehensive technology solutions for institutions and businesses in Córdoba, Argentina.",
  subtitle:
    "We integrate networks, security, servers, and software so technology stops being a patchwork of quick fixes.",
  whatsappHref: "https://wa.me/5493512803872",
  email: "contacto@reuter.com.ar",
  phone: "+54 9 351-2803-872",
  location: "Córdoba Capital, the provincial interior, and nationwide reach depending on the project."
};

export const navigation = [
  { href: "/en", label: "Home" },
  { href: "/en/services", label: "Services" },
  { href: "/en/case-studies", label: "Case Studies" },
  { href: "/en/software", label: "Software & Platforms" },
  { href: "/en/about", label: "About Us" },
  { href: "/en/contact", label: "Contact" }
];

export const highlights = [
  "A single provider for infrastructure, security, software, and automation.",
  "Coverage across the entire province of Córdoba, with nationwide reach depending on the project.",
  "Real support for institutions and businesses that can't afford to improvise."
];

export const partnerBrands = ["MikroTik", "Ubiquiti", "Dahua", "Hikvision", "HP", "TP-Link", "Legamaster"];

export const services = [
  {
    icon: "network",
    title: "Networking & Connectivity",
    description:
      "Network design, institutional Wi-Fi, structured cabling, and stable connectivity for educational, healthcare, hospitality, and administrative buildings."
  },
  {
    icon: "server",
    title: "Servers & Backups",
    description:
      "Our own Linux and cloud servers, Docker containers, automated backups, disaster recovery, remote access, and VPNs — self-hosted infrastructure designed so operations never depend on everything going right the first time."
  },
  {
    icon: "security",
    title: "Security & Video Surveillance",
    description:
      "Cameras, monitoring, access control, and deployment criteria for spaces with constant foot traffic."
  },
  {
    icon: "software",
    title: "Custom Software & Systems",
    description:
      "Internal tools, automation, and targeted solutions for processes that still run on spreadsheets or manual work."
  },
  {
    icon: "automation",
    title: "Automation & Building Control",
    description:
      "Smart control of devices, lighting, and repetitive operations, with a focus on order and efficiency."
  },
  {
    icon: "support",
    title: "Support & Maintenance",
    description:
      "Diagnosis, troubleshooting, follow-up, and continuous improvement for critical infrastructure."
  }
];

export const educationalProblems = [
  "Unstable internet in classrooms, administrative offices, or common areas.",
  "Disorderly growth of cameras, equipment, and cabling.",
  "Multiple providers each solving a separate piece, with no overall vision.",
  "No backup, monitoring, or basic security practices in place.",
  "Time lost to failures that disrupt day-to-day operations."
];

export const differentiators = [
  "A comprehensive approach: we solve the whole problem, not just one layer of it.",
  "Cross-disciplinary technical judgment to integrate networks, servers, security, and software.",
  "Diagnostic ability in complex scenarios where other providers get stuck.",
  "Implementation and support explained in plain language for directors and operations managers."
];

export const cases: CaseItem[] = [
  {
    title: "Camera Installation in a School Gymnasium",
    location: "Crisol Neighborhood, Córdoba Capital",
    image: "/images/trabajos/instalacion-altura.jpg",
    imageAlt: "Technical installation at height inside a school gymnasium.",
    challenge:
      "The school needed to reinforce security coverage in its gymnasium with a reliable installation, properly executed at height.",
    solution:
      "We installed a camera in the gymnasium, handling the mounting, cabling, and commissioning within the school environment.",
    outcome:
      "The institution gained visibility and security in a key space, with an installation adapted to the real conditions of the site."
  },
  {
    title: "Rack Assembly & Cabling for a School Network",
    location: "School in Cosquín",
    image: "/images/trabajos/rack-y-cableado.jpg",
    imageAlt: "Rack installation with patch panels and structured cabling for a school.",
    challenge:
      "The school needed to centralize connections, organize its cabling, and distribute connectivity to Wi-Fi access points and end devices.",
    solution:
      "We installed a rack with patch panels and cabling, physically organizing the infrastructure to improve network distribution and maintenance.",
    outcome:
      "The installation became far more organized, scalable, and ready to support connectivity across the entire institution."
  },
  {
    title: "Technical Coordination for Live Broadcasts During the Pandemic",
    location: "Córdoba Capital",
    image: "/images/trabajos/coordinacion-transmision.jpg",
    imageAlt: "Workstation for technical coordination of a live broadcast on Zoom and YouTube.",
    challenge:
      "During the pandemic, several institutions and organizations needed to hold meetings and events via livestream with no room for technical failure.",
    solution:
      "We coordinated the technical operation using Zoom and YouTube, handling monitoring, broadcasting, and real-time follow-up of the stream.",
    outcome:
      "The events ran without interruption, with concrete technical support and a much more organized operation throughout the broadcast."
  },
  {
    title: "Installation of Interactive Whiteboards & Projectors",
    location: "Formosa, project coordinated from Buenos Aires",
    image: "/images/trabajos/formosa-pizarra-tactil.jpg",
    imageAlt: "Screen and projector installed and running during the project carried out in Formosa.",
    hoverImage: "/images/trabajos/formosa-pizarra-prueba.jpg",
    hoverImageAlt: "Second view of the installed screen, powered on during commissioning in Formosa.",
    video: "/media/formosa-prueba-pantalla.mp4",
    videoPoster: "/images/trabajos/formosa-pizarra-tactil.jpg",
    challenge:
      "A company in Buenos Aires that had sold the equipment to Los Salesianos in Formosa needed a team with real experience handling, installing, and commissioning delicate technology on-site.",
    solution:
      "We installed interactive whiteboards and projectors, handling mounting, wiring, configuration, and testing to leave the system running correctly inside the classroom.",
    outcome:
      "The institution was equipped for classes and presentations with interactive technology, and the project was carried out with solid technical backing thanks to prior experience installing and configuring this type of equipment."
  },
  {
    title: "Network Segmentation & Operational Technology for a Bar",
    location: "Güemes area, Córdoba",
    image: "/images/trabajos/bar-redes-y-pantalla.jpg",
    imageAlt: "Technology infrastructure installed in a bar, with an LED screen and segmented connectivity.",
    hoverImage: "/images/trabajos/bar-ap-unifi.jpg",
    hoverImageAlt: "UniFi access point installed in the bar area.",
    challenge:
      "The bar needed to properly separate its internal operations from customer access, without mixing the point-of-sale system, the waitstaff's Postnet terminals, and management use on a single network.",
    solution:
      "We installed a MikroTik router and a UniFi access point to split connectivity into three independent networks: one for the bar's point-of-sale and payment terminals, another for customers, and a third for management. We also set up a giant LED screen and a fingerprint-based time-tracking system for staff.",
    outcome:
      "The business ended up with far more organized, secure infrastructure, clear traffic separation, better operational control, and supporting technology ready for daily use."
  }
];

export const coverage = [
  "Córdoba Capital",
  "Villa Carlos Paz",
  "Despeñaderos",
  "Interior of Córdoba",
  "Formosa",
  "Nationwide reach depending on the project"
];

// Own solutions — Home, "Our solutions" section.
// Each `href` anchors to its block on /en/software.
export const ownSolutions = [
  {
    slug: "miaulanube",
    category: "Educational platform",
    name: "MiAulaNube",
    summary: "Multi-tenant virtual classroom and school management platform.",
    bullets: [
      "Multi-institution: each school operates independently",
      "Courses, units, topics, and academic tracking",
      "Assignments, assessments, and messaging between teachers and students"
    ],
    image: "/images/desarrollo/mian-hero.png",
    imageAlt: "MiAulaNube landing page"
  },
  {
    slug: "comucon",
    category: "Institutional communication",
    name: "ComuCon",
    summary: "Digital communications and authorizations between institutions and families.",
    bullets: [
      "Announcements with read confirmation",
      "Authorizations with logged, traceable responses",
      "Android app, PWA, and installable on desktop"
    ],
    image: "/images/desarrollo/comucon-logo.png",
    imageAlt: "ComuCon logo",
    imageContain: true
  },
  {
    slug: "nettopo",
    category: "Networking",
    name: "NetTopo Discovery",
    summary: "Network discovery, inventory, and in-depth analysis.",
    bullets: [
      "Automatically inferred topology map",
      "Inventory of switches, access points, and endpoints",
      "Infrastructure documentation ready for troubleshooting"
    ],
    image: "/images/trabajos/home-topologia-software-propio.png",
    imageAlt: "Network topology map generated with NetTopo Discovery"
  },
  {
    slug: "self-hosted",
    category: "Infrastructure",
    name: "Self-Hosted Infrastructure",
    summary: "Backup, disaster recovery, and institutional remote access.",
    bullets: [
      "Automatic backups to our own server (UrBackup)",
      "Full workstation recovery, not just file recovery",
      "Secure remote access over a private VPN (Tailscale + RustDesk)"
    ],
    image: "/images/desarrollo/self-hosted-arquitectura.png",
    imageAlt:
      "Diagram of REUTER's self-hosted backup, disaster recovery, and remote access architecture: Tailscale, UrBackup, and RustDesk"
  }
];
