export const company = {
  name: "REUTER IT NETWORKS",
  shortName: "REUTER",
  tagline: "Soluciones tecnológicas integrales para instituciones y empresas en Córdoba.",
  subtitle:
    "Integramos redes, seguridad, servidores y software para que la tecnología deje de ser un parche.",
  whatsappHref: "https://wa.me/5493512803872",
  email: "contacto@reuter.com.ar",
  phone: "+54 9 351-2803-872",
  location: "Córdoba Capital, interior provincial y alcance nacional según proyecto."
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-reales", label: "Casos reales" },
  { href: "/desarrollo", label: "Software y Plataformas" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" }
];

export const highlights = [
  "Un solo proveedor para infraestructura, seguridad, software y automatización.",
  "Cobertura en toda la provincia de Córdoba con alcance nacional según proyecto.",
  "Soporte real para instituciones y empresas que no pueden darse el lujo de improvisar."
];

export const partnerBrands = ["MikroTik", "Ubiquiti", "Dahua", "Hikvision", "HP", "TP-Link", "Legamaster"];

export const services = [
  {
    icon: "network",
    title: "Redes y conectividad",
    description:
      "Diseño de red, WiFi institucional, cableado estructurado y conectividad estable para edificios educativos, sanitarios, hoteleros y administrativos."
  },
  {
    icon: "server",
    title: "Servidores y backups",
    description:
      "Servidores Linux propios y en la nube, contenedores Docker, backups automatizados, disaster recovery, acceso remoto y VPN — infraestructura self-hosted diseñada para que la operación no dependa de que nada salga bien a la primera."
  },
  {
    icon: "security",
    title: "Seguridad y videovigilancia",
    description:
      "Cámaras, monitoreo, control de acceso y criterios de despliegue para espacios con circulación constante."
  },
  {
    icon: "software",
    title: "Software y sistemas a medida",
    description:
      "Herramientas internas, automatizaciones y soluciones puntuales para procesos que hoy dependen de planillas o tareas manuales."
  },
  {
    icon: "automation",
    title: "Automatización y domótica",
    description:
      "Control inteligente de dispositivos, iluminación y operaciones repetitivas con foco en orden y eficiencia."
  },
  {
    icon: "support",
    title: "Soporte y mantenimiento",
    description:
      "Diagnóstico, corrección, seguimiento y mejora continua para infraestructura crítica."
  }
];

export const educationalProblems = [
  "Internet inestable en aulas, administración o espacios comunes.",
  "Crecimiento desordenado de cámaras, equipos y cableado.",
  "Varios proveedores resolviendo partes sueltas sin una visión global.",
  "Falta de respaldo, monitoreo y criterios de seguridad básicos.",
  "Tiempo perdido en fallas que afectan la operación diaria."
];

export const differentiators = [
  "Enfoque integral: resolvemos el problema completo, no una sola capa.",
  "Criterio técnico transversal para integrar redes, servidores, seguridad y software.",
  "Capacidad de diagnóstico en escenarios complejos donde otros proveedores se frenan.",
  "Implementación y acompañamiento con lenguaje claro para directivos y responsables operativos."
];

export const cases = [
  {
    title: "Instalación de cámaras en gimnasio escolar",
    location: "Barrio Crisol, Córdoba Capital",
    image: "/images/trabajos/instalacion-altura.jpg",
    imageAlt: "Instalación técnica en altura dentro de un gimnasio escolar.",
    challenge:
      "El colegio necesitaba reforzar la cobertura de seguridad en el gimnasio con una instalación confiable y bien resuelta en altura.",
    solution:
      "Se realizó la instalación de una cámara en el gimnasio, resolviendo el montaje, el tendido y la puesta en servicio dentro del entorno escolar.",
    outcome:
      "La institución sumó visibilidad y seguridad en un espacio clave, con una implementación adaptada a las condiciones reales del lugar."
  },
  {
    title: "Armado de rack y distribución para red escolar",
    location: "Escuela en Cosquín",
    image: "/images/trabajos/rack-y-cableado.jpg",
    imageAlt: "Instalación de rack con patcheras y cableado estructurado para una escuela.",
    challenge:
      "La escuela necesitaba centralizar conexiones, ordenar el cableado y distribuir la conectividad hacia antenas WiFi y dispositivos finales.",
    solution:
      "Se implementó un rack con patcheras, cableado y organización física de la infraestructura para mejorar la distribución de red y su mantenimiento.",
    outcome:
      "La instalación quedó mucho más ordenada, escalable y preparada para sostener mejor la conectividad de toda la institución."
  },
  {
    title: "Coordinación técnica de transmisiones en pandemia",
    location: "Córdoba Capital",
    image: "/images/trabajos/coordinacion-transmision.jpg",
    imageAlt: "Puesto de trabajo para coordinación técnica de una transmisión por Zoom y YouTube.",
    challenge:
      "Durante la pandemia hubo instituciones y organizaciones que necesitaron sostener reuniones y eventos por streaming sin margen para fallas técnicas.",
    solution:
      "Se coordinó la operación técnica utilizando Zoom y YouTube, resolviendo monitoreo, emisión y seguimiento de la transmisión en tiempo real.",
    outcome:
      "Los encuentros pudieron realizarse con continuidad, soporte técnico concreto y una operación mucho más ordenada durante toda la emisión."
  },
  {
    title: "Instalación de pizarras táctiles y cañones proyectores",
    location: "Formosa, proyecto coordinado desde Buenos Aires",
    image: "/images/trabajos/formosa-pizarra-tactil.jpg",
    imageAlt: "Pantalla y proyector instalados en funcionamiento durante el proyecto realizado en Formosa.",
    hoverImage: "/images/trabajos/formosa-pizarra-prueba.jpg",
    hoverImageAlt: "Segunda vista de la pantalla instalada y encendida durante la puesta en marcha en Formosa.",
    video: "/media/formosa-prueba-pantalla.mp4",
    videoPoster: "/images/trabajos/formosa-pizarra-tactil.jpg",
    challenge:
      "Una empresa de Buenos Aires que había vendido los equipos a Los Salesianos de Formosa necesitaba un equipo con experiencia real para manipular, instalar y poner en marcha tecnología delicada en sitio.",
    solution:
      "Se realizó la instalación de pizarras táctiles y cañones proyectores, resolviendo montaje, conexión, configuración y pruebas para dejar el sistema funcionando correctamente dentro del aula.",
    outcome:
      "La institución quedó equipada para clases y presentaciones con tecnología interactiva, y el proyecto pudo ejecutarse con respaldo técnico concreto gracias a la experiencia previa en instalación y configuración de este tipo de equipos."
  },
  {
    title: "Segmentación de red y tecnología operativa para un bar",
    location: "Zona de Güemes, Córdoba",
    image: "/images/trabajos/bar-redes-y-pantalla.jpg",
    imageAlt: "Infraestructura tecnológica instalada en un bar con pantalla LED y conectividad segmentada.",
    hoverImage: "/images/trabajos/bar-ap-unifi.jpg",
    hoverImageAlt: "Punto de acceso UniFi instalado en el sector del bar.",
    challenge:
      "El bar necesitaba separar correctamente la operación interna del acceso de clientes, sin mezclar el sistema del local, los tickets de Postnet de los meseros y el uso de gerencia en una sola red.",
    solution:
      "Se instaló un router MikroTik y un AP UniFi para dividir la conectividad en tres redes independientes: una para el sistema del bar y los tickets de cobro, otra para clientes y una tercera para gerencia. Además, se configuró una pantalla LED gigante y un sistema de conteo de horas trabajadas por huella digital.",
    outcome:
      "El negocio quedó con una infraestructura mucho más ordenada y segura, con separación clara de tráfico, mejor control operativo y tecnología de apoyo lista para el funcionamiento diario."
  }
];

export const coverage = [
  "Córdoba Capital",
  "Villa Carlos Paz",
  "Despeñaderos",
  "Interior de Córdoba",
  "Formosa",
  "Alcance nacional según proyecto"
];

// Soluciones propias — Home, sección "Nuestras soluciones".
// Cada `href` ancla a su bloque en /desarrollo.
export const ownSolutions = [
  {
    slug: "miaulanube",
    category: "Plataforma educativa",
    name: "MiAulaNube",
    summary: "Plataforma multitenant de aulas virtuales y gestión escolar.",
    bullets: [
      "Multiinstitución: cada colegio opera de forma independiente",
      "Cursos, unidades, temas y seguimiento académico",
      "Tareas, evaluaciones y mensajería entre docentes y estudiantes"
    ],
    image: "/images/desarrollo/mian-hero.png",
    imageAlt: "Landing de MiAulaNube"
  },
  {
    slug: "comucon",
    category: "Comunicación institucional",
    name: "ComuCon",
    summary: "Comunicaciones y autorizaciones digitales entre instituciones y familias.",
    bullets: [
      "Comunicados con confirmación de lectura",
      "Autorizaciones con registro y trazabilidad de la respuesta",
      "App Android, PWA e instalable en computadoras"
    ],
    image: "/images/desarrollo/comucon-logo.png",
    imageAlt: "Logo de ComuCon",
    imageContain: true
  },
  {
    slug: "nettopo",
    category: "Redes",
    name: "NetTopo Discovery",
    summary: "Descubrimiento, inventario y análisis profundo de redes.",
    bullets: [
      "Mapa de topología inferido automáticamente",
      "Inventario de switches, APs y endpoints",
      "Documentación de infraestructura lista para troubleshooting"
    ],
    image: "/images/trabajos/home-topologia-software-propio.png",
    imageAlt: "Mapa de topología de red generado con NetTopo Discovery"
  },
  {
    slug: "self-hosted",
    category: "Infraestructura",
    name: "Infraestructura Self-Hosted",
    summary: "Backup, recuperación ante desastres y acceso remoto institucional.",
    bullets: [
      "Backups automáticos a servidor propio (UrBackup)",
      "Recuperación completa de un puesto, no solo archivos",
      "Acceso remoto seguro vía VPN privada (Tailscale + RustDesk)"
    ],
    image: "/images/desarrollo/self-hosted-arquitectura.png",
    imageAlt: "Diagrama de la arquitectura self-hosted de backup, recuperación y acceso remoto de REUTER: Tailscale, UrBackup y RustDesk"
  }
];

