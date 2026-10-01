// =====================================================================
//  DATOS DEL PORTAFOLIO
//  Todo el contenido de la página sale de aquí. Para agregar un proyecto,
//  una habilidad o cambiar un texto, edita este archivo (no el HTML).
//
//  "tags" indica a qué perfil pertenece cada cosa:
//    "web"     → Desarrollo web
//    "python"  → Python y automatización
//    "soporte" → Soporte TI
//    "ciber"   → Ciberseguridad
// =====================================================================

const PERFIL = {
  nombre: "Giovanni Garrido",
  nombreCompleto: "Giovanni Alexis Garrido Rodríguez",
  titulo: "Ingeniero en Informática",
  ubicacion: "Santiago, Chile",
  email: "giovanni.a.garrido14@gmail.com",
  telefono: "+56 9 3130 8776",
  whatsapp: "56931308776",
  linkedin: "https://www.linkedin.com/in/giovanni-garrido-/",
  github: "https://github.com/GiovanniGarridoR",
};

// Cada enfoque cambia el color, el texto principal, el CV que se descarga
// y qué proyectos/habilidades se destacan.
const ENFOQUES = {
  todo: {
    etiqueta: "Ver todo",
    icono: "✨",
    rol: "Desarrollo y Soporte TI",
    pitch:
      "Ingeniero en Informática titulado de Duoc UC. Desarrollo aplicaciones web y de escritorio, automatizo tareas con Python y tengo experiencia real en soporte TI y Active Directory.",
    razones: [
      "Práctica profesional en CAREN como desarrollador y soporte TI.",
      "Proyectos propios en PHP, JavaScript y Python, funcionando de punta a punta.",
      "Formación en ciberseguridad certificada por Google (2026).",
    ],
    claves: ["PHP", "JavaScript", "Python", "SQL", "Active Directory", "Git"],
    cv: "assets/cv/CV_Giovanni_Garrido_Desarrollo.pdf",
  },
  web: {
    etiqueta: "Desarrollo web",
    icono: "🌐",
    rol: "Desarrollador Web Full Stack Junior",
    pitch:
      "Construyo aplicaciones web completas: interfaz en HTML, CSS y JavaScript, backend en PHP y base de datos SQL. En mi práctica desarrollé una app de logística que usó el equipo a diario.",
    razones: [
      "Desarrollé una aplicación web de logística en producción (PHP, JS, SQL) durante mi práctica.",
      "SongQuest: juego web con login, ranking, amigos y consumo de la API de Deezer.",
      "Código ordenado en helpers, sesiones seguras y respuestas JSON.",
    ],
    claves: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "APIs REST", "Git"],
    cv: "assets/cv/CV_Giovanni_Garrido_Desarrollo.pdf",
  },
  python: {
    etiqueta: "Python / Automatización",
    icono: "🐍",
    rol: "Desarrollador Python",
    pitch:
      "Uso Python para automatizar tareas repetitivas y crear aplicaciones de escritorio que la gente realmente usa: inventario con lector de códigos de barra, organizador de archivos y convertidor multimedia.",
    razones: [
      "Sistema de inventario y punto de venta con PySide6 y SQLite, sin depender de internet.",
      "Apps empaquetadas como .exe para que cualquier usuario las use sin instalar Python.",
      "Certificado Crash Course on Python de Google (2026).",
    ],
    claves: ["Python", "PySide6", "CustomTkinter", "SQLite", "PyInstaller", "FFmpeg"],
    cv: "assets/cv/CV_Giovanni_Garrido_Python.pdf",
  },
  soporte: {
    etiqueta: "Soporte TI",
    icono: "🛠️",
    rol: "Analista de Soporte TI",
    pitch:
      "Mantengo equipos, usuarios y accesos funcionando. Resolví incidencias de hardware y software en un entorno corporativo y administré cuentas en Active Directory.",
    razones: [
      "Resolución de incidencias de hardware y software para usuarios internos en CAREN.",
      "Gestión de identidades y control de accesos con Active Directory.",
      "Mantención preventiva y correctiva de equipos corporativos.",
    ],
    claves: ["Active Directory", "Windows Server", "Redes LAN", "Hardware", "Soporte a usuarios"],
    cv: "assets/cv/CV_Giovanni_Garrido_Soporte.pdf",
  },
  ciber: {
    etiqueta: "Ciberseguridad",
    icono: "🔐",
    rol: "Analista de Ciberseguridad Junior",
    pitch:
      "Tengo formación en ciberseguridad de Google: seguridad de redes, gestión de riesgos y análisis de logs, más experiencia práctica en control de accesos con Active Directory.",
    razones: [
      "4 cursos de Google: Foundations of Cybersecurity, Play It Safe, Connect and Protect y Python.",
      "Experiencia real en gestión de identidades y accesos (IAM) con Active Directory.",
      "Conocimientos de TCP/IP, DNS, Linux y análisis de logs.",
    ],
    claves: ["Seguridad de redes", "Análisis de logs", "Gestión de riesgos", "IAM", "Linux", "TCP/IP"],
    cv: "assets/cv/CV_Giovanni_Garrido_Ciberseguridad.pdf",
  },
};

const PROYECTOS = [
  {
    nombre: "SongQuest",
    emoji: "🎵",
    tipo: "Aplicación web · Juego",
    resumen: "Juego web para adivinar canciones, con cuentas de usuario, ranking global y sistema de amigos.",
    detalle:
      "Juego musical en el navegador: escuchas un fragmento y tienes que adivinar la canción. Las canciones se obtienen en tiempo real desde la API de Deezer, filtradas por género. Tiene registro e inicio de sesión, perfiles personalizables y un modo ranking para competir.",
    funciones: [
      "Registro, login y sesiones de usuario con PHP.",
      "Canciones en tiempo real desde la API de Deezer, por género.",
      "Modo ranking con tabla global de puntajes.",
      "Amigos: búsqueda, solicitudes y lista de amigos.",
      "Avatares, banners y cosméticos para el perfil.",
      "Formulario de contacto con envío de correos (PHPMailer).",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "API Deezer", "PHPMailer"],
    tags: ["web"],
    repo: null,
    nota: "Repositorio privado: puedo mostrarlo en una entrevista.",
  },
  {
    nombre: "Gestión de envíos (CAREN)",
    emoji: "📦",
    tipo: "Aplicación web interna",
    resumen: "App web para gestionar y hacer seguimiento de envíos, con dashboard y reportes, usada por el equipo de logística.",
    detalle:
      "Herramienta interna que desarrollé durante mi práctica profesional en CAREN – Repuestos Flotacentro para optimizar los procesos logísticos del equipo. Centraliza el seguimiento de envíos y muestra métricas de gestión en dashboards.",
    funciones: [
      "Registro y seguimiento del estado de cada envío.",
      "Dashboard con métricas de gestión del área.",
      "Reportes para el equipo de logística.",
    ],
    stack: ["PHP", "JavaScript", "SQL"],
    tags: ["web", "soporte"],
    repo: null,
    nota: "Código propiedad de la empresa.",
  },
  {
    nombre: "Inventario y punto de venta",
    emoji: "🧾",
    tipo: "App de escritorio",
    resumen: "Sistema para un local comercial: vende escaneando códigos de barra, ingresa mercadería y controla el stock.",
    detalle:
      "Aplicación de escritorio pensada para el día a día de un local. Funciona sin internet y guarda todo en una base de datos local. El lector de códigos de barra funciona sin configuración y todo se maneja con atajos de teclado (F1 a F4) para atender rápido.",
    funciones: [
      "Venta escaneando productos y descuento automático de stock.",
      "Ingreso de mercadería: suma stock o registra productos nuevos.",
      "Inventario con búsqueda, edición y alertas de stock bajo.",
      "Historial de ventas por día, con anulación que devuelve el stock.",
      "Se empaqueta como .exe con PyInstaller.",
    ],
    stack: ["Python", "PySide6", "SQLite", "PyInstaller"],
    tags: ["python", "soporte"],
    repo: null,
    nota: "Próximamente en GitHub.",
  },
  {
    nombre: "KingDev File Organizer",
    emoji: "🗂️",
    tipo: "Automatización · Escritorio",
    resumen: "Ordena una carpeta completa (como Descargas) en un clic, separando documentos, imágenes, videos y más.",
    detalle:
      "Aplicación con interfaz moderna (modo claro y oscuro) que clasifica automáticamente los archivos de la carpeta que elijas. Muestra el progreso en tiempo real y un registro de cada archivo movido. Se distribuye como .exe para usuarios sin conocimientos técnicos.",
    funciones: [
      "Clasificación automática por tipo de archivo.",
      "Barra de progreso y registro en vivo.",
      "Modo claro y oscuro.",
      "Ejecutable .exe listo para usar.",
    ],
    stack: ["Python", "CustomTkinter", "os / shutil", "PyInstaller"],
    tags: ["python", "soporte"],
    repo: "https://github.com/GiovanniGarridoR/organizador-descargas-python",
    descarga: "https://kingde-v.itch.io/",
  },
  {
    nombre: "Convertidor de archivos KingDev",
    emoji: "🎬",
    tipo: "App de escritorio",
    resumen: "Convierte archivos de audio y video entre formatos, y también desde un enlace de YouTube.",
    detalle:
      "Aplicación de escritorio con pestañas: en una eliges un archivo local y en otra pegas un enlace de YouTube. Usa FFmpeg para la conversión y procesa en un hilo aparte para que la interfaz no se congele.",
    funciones: [
      "Conversión de formatos con FFmpeg.",
      "Descarga y conversión desde enlaces de YouTube.",
      "Procesamiento en segundo plano con threading.",
      "Tema visual personalizado.",
    ],
    stack: ["Python", "CustomTkinter", "FFmpeg", "threading"],
    tags: ["python"],
    repo: "https://github.com/GiovanniGarridoR/Convertidor-Archivos",
  },
  {
    nombre: "VuelosDuoc",
    emoji: "✈️",
    tipo: "Proyecto académico",
    resumen: "Sistema de reservas de vuelos: asientos disponibles, compra y edición de boletos.",
    detalle: "Proyecto de Duoc UC en Python que modela la reserva de asientos de un vuelo, con compra y edición de boletos.",
    funciones: ["Visualización de asientos disponibles.", "Compra de boletos.", "Edición de boletos ya comprados."],
    stack: ["Python"],
    tags: ["python"],
    repo: "https://github.com/GiovanniGarridoR/VuelosDuoc",
  },
  {
    nombre: "AutomotoraApp y ComputizadosApp",
    emoji: "☕",
    tipo: "Proyectos académicos",
    resumen: "Aplicaciones en Java con programación orientada a objetos: listado de autos, registro y login.",
    detalle: "Dos proyectos de Duoc UC en Java para practicar programación orientada a objetos: un listado de vehículos para una automotora y vistas de registro e inicio de sesión.",
    funciones: ["Programación orientada a objetos.", "Vistas de registro y login.", "Gestión de inventario de vehículos."],
    stack: ["Java", "POO"],
    tags: [],
    repo: "https://github.com/GiovanniGarridoR/AutomotoraApp",
  },
];

const EXPERIENCIA = [
  {
    cargo: "Desarrollador Web Junior / Soporte TI (Práctica Profesional)",
    lugar: "CAREN – Repuestos Flotacentro",
    fecha: "Sep 2025 – Dic 2025",
    puntos: [
      { texto: "Desarrollé una aplicación web para optimizar procesos logísticos (PHP, JS, SQL).", tags: ["web"] },
      { texto: "Contribuí a crear dashboards para visualizar métricas de gestión del área.", tags: ["web", "soporte"] },
      { texto: "Identifiqué y resolví incidencias de hardware y software en el entorno corporativo.", tags: ["soporte"] },
      { texto: "Colaboré en la gestión de identidades y control de accesos con Active Directory.", tags: ["soporte", "ciber"] },
      { texto: "Realicé mantención preventiva y correctiva de equipos corporativos.", tags: ["soporte"] },
    ],
  },
  {
    cargo: "Ingeniería en Informática (titulado)",
    lugar: "Instituto Profesional Duoc UC",
    fecha: "2021 – 2026",
    puntos: [
      { texto: "Programación en Python, Java (POO), PHP y JavaScript.", tags: ["web", "python"] },
      { texto: "Bases de datos MySQL y SQL Server.", tags: ["web"] },
      { texto: "Redes, sistemas operativos y soporte de infraestructura.", tags: ["soporte", "ciber"] },
    ],
  },
];

const CERTIFICACIONES = [
  { nombre: "Foundations of Cybersecurity", emisor: "Google · Coursera", fecha: "Ago 2026", tags: ["ciber"], url: "https://www.coursera.org/account/accomplishments/verify/1DODA7PP1F1O" },
  { nombre: "Play It Safe: Manage Security Risks", emisor: "Google · Coursera", fecha: "Ago 2026", tags: ["ciber"], url: null },
  { nombre: "Connect and Protect: Networks and Network Security", emisor: "Google · Coursera", fecha: "Ago 2026", tags: ["ciber", "soporte"], url: null },
  { nombre: "Crash Course on Python", emisor: "Google · Coursera", fecha: "Ago 2026", tags: ["python"], url: "https://www.coursera.org/account/accomplishments/verify/5OOT65GTGDIA" },
];

const HABILIDADES = [
  { grupo: "Desarrollo web", icono: "🌐", tags: ["web"], items: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "SQL Server", "APIs REST"] },
  { grupo: "Python", icono: "🐍", tags: ["python"], items: ["Python", "PySide6", "CustomTkinter", "SQLite", "PyInstaller", "FFmpeg"] },
  { grupo: "Soporte e infraestructura", icono: "🛠️", tags: ["soporte"], items: ["Active Directory", "Windows Server", "Redes LAN", "Diagnóstico de hardware", "Mantención de equipos", "Soporte a usuarios"] },
  { grupo: "Ciberseguridad", icono: "🔐", tags: ["ciber"], items: ["Análisis de logs", "Seguridad de redes", "Gestión de riesgos", "Control de accesos (IAM)", "TCP/IP y DNS", "Linux"] },
  { grupo: "Herramientas", icono: "🧰", tags: ["web", "python", "soporte", "ciber"], items: ["Git", "GitHub", "VS Code", "Java (POO)"] },
  { grupo: "Habilidades blandas", icono: "🤝", tags: ["web", "python", "soporte", "ciber"], items: ["Resolución de problemas", "Trabajo en equipo", "Comunicación efectiva", "Pensamiento analítico", "Adaptabilidad"] },
];
