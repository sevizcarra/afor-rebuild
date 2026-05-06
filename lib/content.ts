export const SITE = {
  brand: "AFOR",
  slogan: "Facilities para minería e industria",
  email: "contacto@afor.cl",
  phone: "+56 9 6350 1854",
  address: "Las Condes, Santiago, Chile",
  intranet: "https://intranet.afor.cl",
  dossierUrl: "/AFOR_Dossier_2025.pdf",
};

export const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO = {
  eyebrow: "Facilities para minería e industria",
  summary:
    "Somos una firma chilena especializada en el desarrollo de facilities para operaciones mineras e industriales. Más de diez años integrando arquitectura, ingeniería y criterios técnicos en proyectos del sector.",
};

export const ABOUT = {
  eyebrow: "Quiénes somos",
  title: "No contamos horas. Aplicamos criterio técnico.",
  paragraphs: [
    "Desarrollamos facilities para minería e industria: oficinas, casas de cambio, salas de control, salas eléctricas y técnicas, truck shops, RESPEL y áreas de almacenamiento. Integramos arquitectura, ingeniería y coordinación multidisciplinar bajo una misma dirección técnica.",
    "Nos incorporamos al equipo del proyecto como una extensión de su ingeniería. Adoptamos la codificación, manuales y estándares de entrega del mandante, y operamos bajo sus protocolos internos para garantizar entregables compatibles con su sistema de gestión documental.",
    "El equipo que toma el proyecto desde el levantamiento técnico es el mismo que coordina la entrega final. Continuidad técnica completa, sin transferencias internas ni intermediarios.",
  ],
};

export const PRINCIPLES = [
  { n: "01", title: "Diseño operacional", body: "Cada facility responde a la lógica del proceso productivo: operación, flujo de personal, seguridad y continuidad de servicio." },
  { n: "02", title: "Rigor normativo", body: "Dominio de normativas y estándares de seguridad para gran minería e industria. Expedientes completos para aprobaciones." },
  { n: "03", title: "Coordinación BIM", body: "Trabajamos en Revit/BIM con la codificación que su proyecto requiera. Modelos coordinados, sin interferencias." },
  { n: "04", title: "Integración al equipo", body: "Equipo dedicado al proyecto, sin overhead. Acoplamiento a sus procesos, manuales y plazos." },
];

export const SERVICES = {
  eyebrow: "Servicios",
  title: "Disciplinas técnicas integradas.",
  items: [
    {
      title: "Master Plan de facilities",
      body: "Diseño conceptual de instalaciones para faenas mineras e industriales: layouts, programa arquitectónico, flujos operacionales, estimación de superficies y plan maestro coordinado con disciplinas estructurales y MEP.",
    },
    {
      title: "Oficinas administrativas y casas de cambio",
      body: "Diseño y ejecución de espacios para personal: oficinas técnicas, salas de reunión, comedores, casas de cambio para operadores, vestuarios y baños bajo normativa minera.",
    },
    {
      title: "Salas de control, servidores, eléctricas y técnicas",
      body: "Recintos críticos con piso técnico, climatización de precisión, control lumínico y acústico, distribución ergonómica de puestos de operación con monitores multipantalla y revestimientos especializados.",
    },
    {
      title: "RESPEL, almacenamiento y truck shops",
      body: "Edificación técnica para residuos peligrosos, bodegas industriales y talleres de mantenimiento de equipos pesados, con cumplimiento normativo y seguridad operacional certificada.",
    },
    {
      title: "Coordinación multidisciplinar y revisión de contraparte",
      body: "Integración de disciplinas estructural, mecánica, eléctrica, instrumentación y civil. Revisión técnica de planos y documentos de terceros bajo los estándares del mandante.",
    },
    {
      title: "Supervisión de terreno y avances",
      body: "Inspección técnica en obra, control de avances físicos, validación de entregables, gestión de no conformidades y cierre de proyecto con documentación as-built.",
    },
    {
      title: "Project Management multidisciplinar",
      body: "Gestión integral de proyectos: planificación, control de plazos y costos, coordinación de proveedores, gestión de riesgos y reporte ejecutivo al mandante.",
    },
  ],
};

// Cada proyecto destacado con estructura completa (carrusel)
export const FEATURED_PROJECTS = [
  {
    id: "cho",
    image: "/images/projects/edificio-cho.jpg",
    client: "BHP · Puerto Coloso",
    year: "2025",
    title: "Remediación Edificio CHO",
    category: "Facility técnica · Ingeniería de detalle",
    body:
      "Remediación integral de 420 m² para reconvertir el edificio CHO en una facility técnica de alta disponibilidad. Distribución interna, accesos, sala técnica para equipos eléctricos y UPS, oficinas, áreas de cowork y mejoras arquitectónicas en cielos, mobiliario y sistemas auxiliares.",
    highlights: [
      { label: "Superficie", value: "420 m²" },
      { label: "Cliente", value: "BHP / ARCADIS" },
      { label: "Año", value: "2025" },
      { label: "Estado", value: "Ejecutado" },
    ],
  },
  {
    id: "enat",
    image: "/images/projects/facilities-enat.jpg",
    client: "Minera Escondida · EN-AT",
    year: "2025",
    title: "Facilities Camiones Autónomos",
    category: "Sala de control + auxiliares · BIM",
    body:
      "Diseño de facilities de soporte para el programa de Camiones Autónomos en Minera Escondida. Sala de Control de Perforadoras con piso técnico elevado, revestimientos de madera, estaciones de monitoreo multiscreen, climatización de precisión y señalética normativa. Ingeniería Interim apta para construcción.",
    highlights: [
      { label: "Programa", value: "EN-AT" },
      { label: "Cliente", value: "Minera Escondida" },
      { label: "Año", value: "2025" },
      { label: "Tipo", value: "Ingeniería Interim · BIM" },
    ],
  },
  {
    id: "gom",
    image: "/images/projects/gom-enat.jpg",
    client: "Minera Escondida · EN-AT",
    year: "2024",
    title: "Sala de Control GOM",
    category: "Facility técnica · Ingeniería de detalle",
    body:
      "Intervención integral del recinto con cielo metálico lineal, revestimiento mural en listonería de madera, iluminación LED lineal empotrada y distribución ergonómica de puestos de operación con brazos articulados y monitores multipantalla. Diseño que prioriza concentración operacional, confort acústico y control lumínico para jornadas extendidas.",
    highlights: [
      { label: "Programa", value: "GOM EN-AT" },
      { label: "Cliente", value: "Minera Escondida" },
      { label: "Año", value: "2024" },
      { label: "Tipo", value: "Ingeniería de detalle" },
    ],
  },
  {
    id: "yacas",
    image: "/images/projects/las-yacas.jpg",
    client: "Minera Las Yacas · Vicuña",
    year: "2023",
    title: "Barrio Cívico e Infraestructura",
    category: "Master plan de facilities · Faena",
    body:
      "Diseño arquitectónico del barrio cívico e infraestructura de apoyo para el proyecto minero Las Yacas. Definición de oficinas administrativas, control de ingreso, baños y salas de cambio con distribución modular orientada a optimizar flujos de circulación y cumplimiento normativo. Layouts de emplazamiento, estacionamientos y accesos vehiculares integrados al plan general de faena.",
    highlights: [
      { label: "Tipo", value: "Master Plan" },
      { label: "Cliente", value: "Minera Las Yacas" },
      { label: "Año", value: "2023" },
      { label: "Sector", value: "Vicuña" },
    ],
  },
  {
    id: "mecasfy",
    image: "/images/projects/santa-alejandra.jpg",
    client: "Mecasfy · Santa Alejandra",
    year: "2024",
    title: "Edificio Industrial y Corporativo",
    category: "Facility industrial · Diseño integral",
    body:
      "Diseño arquitectónico de edificio industrial y corporativo para Mecasfy. Nave industrial con oficinas administrativas integradas, fachada de policarbonato translúcido con estructura metálica vista, accesos vehiculares y peatonales diferenciados, paisajismo perimetral y estacionamientos.",
    highlights: [
      { label: "Tipo", value: "Diseño integral" },
      { label: "Cliente", value: "Mecasfy" },
      { label: "Año", value: "2024" },
      { label: "Sector", value: "Santa Alejandra" },
    ],
  },
  {
    id: "gt",
    image: "/images/projects/gt-chile.jpg",
    client: "Grant Thornton Chile",
    year: "2024",
    title: "Oficinas Corporativas",
    category: "Habilitación · Ejecutado",
    body:
      "Habilitación de nuevas oficinas corporativas para Grant Thornton Chile. Diseño elegante y moderno con mobiliario de madera natural, cielo expuesto con iluminación lineal LED, estanterías metálicas con vegetación integrada como separadores de ambientes y estaciones de trabajo colaborativas. Prioridad en luz natural, calidez de materiales y distribución abierta.",
    highlights: [
      { label: "Tipo", value: "Habilitación corporativa" },
      { label: "Cliente", value: "Grant Thornton Chile" },
      { label: "Año", value: "2024" },
      { label: "Estado", value: "Ejecutado" },
    ],
  },
];

export const PORTFOLIO = [
  { year: "2025", project: "Remediación Edificio CHO – Puerto Coloso", company: "BHP / ARCADIS" },
  { year: "2025", project: "Facilities EN-AT – Camiones Autónomos", company: "Minera Escondida" },
  { year: "2024", project: "Sala de Control GOM EN-AT", company: "Minera Escondida" },
  { year: "2024", project: "Oficinas Grant Thornton Chile", company: "GT Chile" },
  { year: "2024", project: "Edificio Industrial Mecasfy – Santa Alejandra", company: "Mecasfy" },
  { year: "2023", project: "Barrio Cívico Las Yacas – Vicuña", company: "Las Yacas" },
  { year: "2023", project: "Garita y Accesos – Cerro Colorado", company: "BHP" },
  { year: "2023", project: "Casas de Cambio – Spence Growth Options", company: "BHP" },
  { year: "2022", project: "Truck Shop Norte – Spence", company: "BHP" },
  { year: "2022", project: "Sala Eléctrica – Quebrada Blanca", company: "Teck" },
  { year: "2022", project: "Master Plan Faena – Salar de Atacama", company: "SQM" },
  { year: "2021", project: "Centro de Operaciones Integradas (COI)", company: "Codelco" },
  { year: "2021", project: "Edificio Servicios – Distrito Norte", company: "Codelco" },
  { year: "2020", project: "Casa de Cambio Lixiviación – Radomiro Tomic", company: "Codelco" },
  { year: "2020", project: "Sala Servidores – Antucoya", company: "Antofagasta Minerals" },
  { year: "2019", project: "Truck Shop Centinela", company: "Antofagasta Minerals" },
  { year: "2019", project: "RESPEL y Almacenamiento – Pelambres", company: "Antofagasta Minerals" },
  { year: "2018", project: "Habilitación Salas Técnicas – El Teniente", company: "Codelco" },
  { year: "2017", project: "Instalaciones Auxiliares – Spence Growth Options", company: "ARCADIS" },
];

export const RESOURCES = {
  eyebrow: "Recursos",
  title: "Material para licitaciones y procesos formales.",
  items: [
    {
      title: "Dossier corporativo 2025",
      description: "Presentación completa con trayectoria, equipo, metodología de trabajo y portafolio detallado.",
      cta: "Descargar PDF",
      href: "/AFOR_Dossier_2025.pdf",
      meta: "PDF · 1.9 MB",
    },
    {
      title: "Ficha técnica de empresa",
      description: "RUT, certificaciones, datos de contacto formales y representante legal para procesos de inscripción.",
      cta: "Solicitar ficha",
      href: "mailto:contacto@afor.cl?subject=Solicitud%20de%20ficha%20t%C3%A9cnica",
      meta: "Por email",
    },
    {
      title: "Acceso al equipo",
      description: "Portal interno para coordinación con clientes activos y equipos en proyectos multidisciplinares.",
      cta: "Acceder al portal",
      href: "https://intranet.afor.cl",
      meta: "Solo clientes",
    },
  ],
};

export const CONTACT = {
  eyebrow: "Contacto",
  title: "Iniciemos un proyecto.",
  body: "Cuéntanos qué necesitas. Respondemos en 24 horas hábiles.",
};
