// translations.js
// Objeto centralizado con todos los textos del sitio en español e inglés.

const translations = {
  es: {

    // Meta / título de pestaña
    pageTitleHome: "Inicio · Fer Rojas - Dev",
    pageTitleAbout: "Sobre mí · Fer Rojas - Dev",

    // Navbar
    navHome: "inicio",
    navAbout: "sobre mí",
    navPortfolio: "portfolio",
    navContact: "contacto",
    navToggleLabel: "Abrir menú",

    // Hero (index)
    heroEyebrow: "Software que se adapta al problema",
    heroTitle: 'Diseño con <span class="accent">criterio</span>, ingeniería con propósito.',
    heroLede: "Cada proyecto parte de entender el problema antes de escribir la primera línea de código.",
    ctaPortfolio: "Ver portfolio",
    ctaContact: "Contactar",

    // Roles animados (typed effect)
    roles: ["Desarrollador Full Stack", "Diseño · Solucion · Evolucion", "De la idea al deploy"],

    // Stack
    stackEyebrow: "Tecnologías",
    stackTitle: "El stack detrás de cada proyecto",
    stackDesc: "Tecnologías elegidas según las necesidades de cada proyecto, con foco en rendimiento, escalabilidad y mantenibilidad.",
    stackFrontend: "Frontend",
    stackBackend: "Backend",
    stackData: "Datos & Infraestructura",

    // Portfolio
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Proyectos recientes",
    portfolioDesc: "Una selección de trabajos, con código abierto para revisar en GitHub.",
    projectCodeLabel: "Código",

    project1Title: "App Gestion Impositiva",
    project1Desc: "Dashboard de gestión de clientes y liquidación de impuestos. Automatizacion en clasificación de datos vía Excel, reduciendo el proceso de 1 hora a 5-10 minutos.",

    project2Title: "Despejado",
    project2Desc: "Gestor de tareas minimalista, pensado para bajar la fricción de organizarse. Sin categorías rígidas ni curva de aprendizaje — anotás y ordenás a tu ritmo.",

    project3Title: "KIPUBANK",
    project3Desc: "Smart contract tipo bóveda bancaria en Solidity, con depósitos/retiros en USDC. Foco en patrones de seguridad (checks-effects-interactions) y testing con Foundry.",

    portfolioMoreBtn: "Ver todos los repositorios en GitHub",

    // Footer (compartido)
    footerCopyright: "© 2026 Fer Rojas. Todos los derechos reservados.",
    cvLabel: "CV",

    // About
    aboutEyebrow: "Sobre mí",
    aboutTitle: 'Fernando<br><span class="accent">Rojas.</span>',
    aboutPhotoAlt: "Fernando Rojas, Desarrollador Full Stack",
    aboutLede1: "Soy desarrollador Full Stack y me gusta diseñar pensando en qué se quiere comunicar, no en seguir un estándar. Cada landing o producto que construyo parte de entender qué se necesita transmitir antes de decidir cómo se va a ver.",
    aboutLede2: "Trabajo principalmente con React, TypeScript, Next.js, C# y ASP.NET. Del lado del backend, me interesa la estructura que sostiene esa experiencia: cómo una buena arquitectura y una gestión adecuada de los datos pueden traducirse en tiempo y valor real.",
    aboutLede3: "En una aplicación de gestión impositiva que lideré junto a un equipo de colegas, logramos reducir el proceso de clasificación de información de aproximadamente 1 hora a 5–10 minutos mediante la automatización del flujo.",
    aboutLede4: "Trabajo con un criterio simple: la interfaz tiene que ser atractiva, pero también funcional y capaz de sostenerse en el tiempo. Me interesan los equipos donde se puede pensar en conjunto, entender el problema y construir soluciones, no solo ejecutar tareas.",
    aboutMetaLocation: "CABA, Argentina",
    aboutMetaAvailability: "Presencial / Híbrido / Remoto",
    aboutCtaCv: "Ver CV",
    aboutCtaContact: "Hablemos"
  },

  en: {


    // Meta / tab title
    pageTitleHome: "Index · Fer Rojas - Dev",
    pageTitleAbout: "About · Fer Rojas - Dev",

    // Navbar
    navHome: "home",
    navAbout: "about",
    navPortfolio: "portfolio",
    navContact: "contact",
    navToggleLabel: "Open menu",

    // Hero (index)
    heroEyebrow: "Software that adapts to the problem",
    heroTitle: 'Design with <span class="accent">discernment</span>, engineering with purpose.',
    heroLede: "Every project starts with understanding the problem before writing the first line of code.",
    ctaPortfolio: "View portfolio",
    ctaContact: "Get in touch",

    // Typed roles
    roles: ["Full Stack Developer", "Design · Solution · Evolution", "From idea to deploy"],

    // Stack
    stackEyebrow: "Technologies",
    stackTitle: "The stack behind every project",
    stackDesc: "Technologies selected based on the needs of each project, focusing on performance, scalability, and maintainability.",
    stackFrontend: "Frontend",
    stackBackend: "Backend",
    stackData: "Data & Infrastructure",

    // Portfolio
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Recent projects",
    portfolioDesc: "A selection of work, with open source code available on GitHub.",
    projectCodeLabel: "Code",

    project1Title: "Tax Management App",
    project1Desc: "Dashboard for client management and tax settlement. Automated data classification via Excel, reducing the process from one hour to 5–10 minutes.",

    project2Title: "Clear",
    project2Desc: "A minimalist task manager designed to reduce the friction of getting organized. No rigid categories or learning curve—you jot things down and organize them at your own pace.",

    project3Title: "KIPUBANK",
    project3Desc: "Bank-vault-style smart contract in Solidity, featuring USDC deposits and withdrawals. Focus on security patterns (checks-effects-interactions) and testing with Foundry.",

    portfolioMoreBtn: "View all repositories on GitHub",

    // Footer (shared)
    footerCopyright: "© 2026 Fer Rojas. All rights reserved.",
    cvLabel: "CV",

    // About
    aboutEyebrow: "About me",
    aboutTitle: 'Fernando<br><span class="accent">Rojas.</span>',
    aboutPhotoAlt: "Fernando Rojas, Full Stack Developer",
    aboutLede1: "I am a Full Stack developer who prioritizes the message over adhering to rigid standards when designing. For every landing page or product I build, I start by understanding what needs to be conveyed before deciding on the visual design.",
    aboutLede2: "My primary tech stack includes React, TypeScript, Next.js, C#, and ASP.NET. On the backend, I focus on the underlying structure that supports the user experience—specifically, how robust architecture and effective data management translate into real value and time savings.",
    aboutLede3: "While leading a team on a tax management application, we successfully reduced the information classification process from approximately one hour to just 5–10 minutes by automating the workflow.",
    aboutLede4: "My approach is simple: the interface must be visually appealing, yet also functional and built to last. I thrive in teams that collaborate to understand problems and build solutions, rather than simply executing tasks.",
    aboutMetaLocation: "CABA, Argentina",
    aboutMetaAvailability: "On-site / Hybrid / Remote",
    aboutCtaCv: "View CV",
    aboutCtaContact: "Let's talk"
  }
};