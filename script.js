const projects = [
    {
        id: "refocus",
        featured: true,
        title: {
            en: "ReFocus",
            es: "ReFocus",
            pt: "ReFocus"
        },
        description: {
            en: "AI-Powered Desktop Productivity Coach. As Intelligence Team Lead, I developed the 'brain' of the application, implementing computer vision models that analyze user engagement locally in real-time. This provided the benefits of AI-driven habit tracking without the security risks of cloud-based video processing.",
            es: "Entrenador de productividad de escritorio impulsado por IA. Como Líder del Equipo de Inteligencia, desarrollé el 'cerebro' de la aplicación, implementando modelos de visión por computadora que analizan la participación del usuario localmente en tiempo real. Esto proporcionó los beneficios del seguimiento de hábitos impulsado por IA sin los riesgos de seguridad del procesamiento de video en la nube.",
            pt: "Treinador de Produtividade de Desktop com IA. Como Líder da Equipe de Inteligência, desenvolvi o 'cérebro' do aplicativo, implementando modelos de visão computacional que analisam o engajamento do usuário localmente em tempo real. Isso forneceu os benefícios do rastreamento de hábitos orientado por IA sem os riscos de segurança do processamento de vídeo em nuvem."
        },
        category: "personal",
        tags: [
            { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "OpenCV", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
            { name: "MediaPipe", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "NumPy", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/AlexWS12/ReFocus" }
        ]
    },
    {
        id: "gradtrack",
        featured: true,
        title: {
            en: "GradTrack AI Agent",
            es: "Agente de IA GradTrack",
            pt: "Agente de IA GradTrack"
        },
        description: {
            en: "Developed an AI-powered web application to help students explore, plan, and visualize extensive academic pathways and transfer options using real course and university data.",
            es: "Desarrolló una aplicación web impulsada por IA para ayudar a los estudiantes a explorar, planificar y visualizar rutas académicas y opciones de transferencia utilizando datos reales de cursos y universidades.",
            pt: "Desenvolveu uma aplicação web baseada em IA para ajudar estudantes a explorar, planejar e visualizar caminhos acadêmicos extensivos e opções de transferência usando dados reais de cursos e universidades."
        },
        category: "personal",
        tags: [
            { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Google Gemini API", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "Tailwind CSS", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" }
        ],
        links: [
            { text: "Live Demo", url: "https://mdcgradtrack.netlify.app/" },
            { text: "View Code", url: "https://github.com/PaulPio/GradTrack/tree/AIAgent" }
        ]
    },
    {
        id: "plate-spotter",
        featured: true,
        title: {
            en: "PlateSpotter AI",
            es: "PlateSpotter IA",
            pt: "PlateSpotter IA"
        },
        description: {
            en: "A Progressive Web App for mechanics and auto repair shops to quickly log vehicle license plates and service details. Features AI-powered camera scanning with Gemini 3.0 Pro Vision, smart manual entry formatting, Google Sheets integration, and offline history.",
            es: "Una aplicación web progresiva para mecánicos y talleres de reparación de automóviles para registrar rápidamente placas de vehículos y detalles de servicio. Incluye escaneo de cámara impulsado por IA con Gemini 3.0 Pro Vision, formato inteligente de entrada manual, integración con Google Sheets e historial sin conexión.",
            pt: "Um Progressive Web App para mecânicos e oficinas de reparação de automóveis para registrar rapidamente placas de veículos e detalhes de serviço. Apresenta digitalização de câmera com IA usando Gemini 3.0 Pro Vision, formatação inteligente de entrada manual, integração com Google Sheets e histórico offline."
        },
        category: "personal",
        tags: [
            { name: "React 19", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Google Gemini AI", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "Tailwind CSS", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "PWA", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        links: [
            { text: "Live Demo", url: "https://plate-spotter.vercel.app" },
            { text: "View Code", url: "https://github.com/PaulPio/plate-spotter" }
        ]
    },
    {
        id: "prof-summarizer",
        featured: true,
        title: {
            en: "ProfSummarizer",
            es: "ProfSummarizer",
            pt: "ProfSummarizer"
        },
        description: {
            en: "AI-powered lecture transcription and summarization tool. Record lectures, get automatic transcriptions, and receive intelligent summaries to help students review course material efficiently.",
            es: "Herramienta de transcripción y resumen de conferencias impulsada por IA. Graba conferencias, obtén transcripciones automáticas y recibe resúmenes inteligentes para ayudar a los estudiantes a revisar el material del curso de manera eficiente.",
            pt: "Ferramenta de transcrição e resumo de palestras com IA. Grave palestras, obtenha transcrições automáticas e receba resumos inteligentes para ajudar os alunos a revisar o material do curso de forma eficiente."
        },
        category: "personal",
        tags: [
            { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Google Gemini API", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "Supabase", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        links: [
            { text: "Live Demo", url: "https://prof-summarizer.vercel.app/" },
            { text: "View Code", url: "https://github.com/PaulPio/Prof-Summarizer" }
        ]
    },
    {
        id: "senior-helper",
        featured: true,
        title: {
            en: "Senior Helper - AI Companion",
            es: "Senior Helper - Compañero de IA",
            pt: "Senior Helper - Companheiro de IA"
        },
        description: {
            en: "Led a 3-person team in a 36-hour hackathon to build a full-stack, conversational AI agent for seniors, featuring emergency alerts and live data.",
            es: "Dirigió un equipo de 3 personas en un hackathon de 36 horas para construir un agente de IA conversacional full-stack para personas mayores, con alertas de emergencia y datos en vivo.",
            pt: "Liderou uma equipe de 3 pessoas em um hackathon de 36 horas para construir um agente de IA conversacional full-stack para idosos, com alertas de emergência e dados ao vivo."
        },
        category: "personal",
        tags: [
            { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Google Gemini", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "Flask", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
            { name: "Render", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200" },
            { name: "Netlify", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200" },
            { name: "REST API", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" }
        ],
        links: [
            { text: "Live Demo", url: "https://seniorhelper.netlify.app/" },
            { text: "View Code", url: "https://github.com/PaulPio/SeniorHelper" }
        ]
    },
    {
        id: "finance-flow",
        title: {
            en: "FinanceFlow",
            es: "FinanceFlow",
            pt: "FinanceFlow"
        },
        description: {
            en: "A full-stack personal finance management app with a dashboard for tracking income, expenses, budgets, goals, and investments. Features an AI-powered financial advisor chatbot built with Google Gemini, interactive charts, and secure authentication.",
            es: "Una aplicación full-stack de gestión de finanzas personales con un panel para rastrear ingresos, gastos, presupuestos, metas e inversiones. Incluye un chatbot de asesor financiero impulsado por IA con Google Gemini, gráficos interactivos y autenticación segura.",
            pt: "Um aplicativo full-stack de gestão de finanças pessoais com painel para rastrear receitas, despesas, orçamentos, metas e investimentos. Apresenta um chatbot de consultor financeiro com IA usando Google Gemini, gráficos interativos e autenticação segura."
        },
        category: "personal",
        tags: [
            { name: "React 19", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
            { name: "MongoDB", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
            { name: "Google Gemini AI", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
            { name: "Tailwind CSS", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" }
        ],
        links: [
            { text: "Live Demo", url: "https://finance-flow-lac.vercel.app" },
            { text: "View Code", url: "https://github.com/PaulPio/financeFlow" }
        ]
    },
    {
        id: "water-quality",
        featured: true,
        title: {
            en: "Water Quality Monitoring Dashboard",
            es: "Tablero de Monitoreo de Calidad del Agua",
            pt: "Painel de Monitoramento da Qualidade da Água"
        },
        description: {
            en: "A full-stack web application for monitoring ocean water quality data with interactive visualizations and real-time filtering.",
            es: "Una aplicación web full-stack para monitorear datos de calidad del agua del océano con visualizaciones interactivas y filtrado en tiempo real.",
            pt: "Uma aplicação web full-stack para monitorar dados de qualidade da água do oceano com visualizações interativas e filtragem em tempo real."
        },
        category: "school",
        tags: [
            { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Flask", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Streamlit", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
            { name: "MongoDB", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
            { name: "Pandas", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/ClassProjectIR2025" }
        ]
    },
    {
        id: "fiu-a3",
        title: {
            en: "Event Organizer System",
            es: "Sistema Organizador de Eventos",
            pt: "Sistema Organizador de Eventos"
        },
        description: {
            en: "A Java-based command-line event management application enabling users to organize, track, and query events. Features custom Date/DateTime classes, built-in validation logic, robust exception handling, and smart sorting capabilities using Object-Oriented Programming principles.",
            es: "Una aplicación de gestión de eventos en línea de comandos basada en Java que permite a los usuarios organizar, rastrear y consultar eventos. Cuenta con clases personalizadas de Fecha/Hora, lógica de validación integrada, manejo robusto de excepciones y capacidades de clasificación inteligente utilizando principios de Programación Orientada a Objetos.",
            pt: "Um aplicativo de gerenciamento de eventos em linha de comando baseado em Java que permite aos usuários organizar, rastrear e consultar eventos. Apresenta classes personalizadas de Data/Hora, lógica de validação integrada, tratamento robusto de exceções e recursos inteligentes de classificação usando princípios de Programação Orientada a Objetos."
        },
        category: "school",
        tags: [
            { name: "Java", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
            { name: "OOP", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
            { name: "Data Structures", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
            { name: "CLI", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects/tree/main/A3" }
        ]
    },
    {
        id: "fiu-a4",
        title: {
            en: "Alphabet Sum Puzzle Solver",
            es: "Solucionador de Suma Alfabética",
            pt: "Solucionador de Soma Alfabética"
        },
        description: {
            en: "A recursive backtracking algorithm that solves cryptarithmetic puzzles, where letters represent unique digits and words form valid arithmetic equations. Features constraint satisfaction, leading zero prevention, and efficient solution space pruning.",
            es: "Un algoritmo de retroceso recursivo que resuelve rompecabezas criptoaritméticos, donde las letras representan dígitos únicos y las palabras forman ecuaciones aritméticas válidas. Cuenta con satisfacción de restricciones, prevención de ceros a la izquierda y poda eficiente del espacio de soluciones.",
            pt: "Um algoritmo de backtracking recursivo que resolve quebra-cabeças criptoaritméticos, onde letras representam dígitos únicos e palavras formam equações aritméticas válidas. Apresenta satisfação de restrições, prevenção de zeros à esquerda e poda eficiente do espaço de soluções."
        },
        category: "school",
        tags: [
            { name: "Java", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
            { name: "Algorithms", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
            { name: "Recursion", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects/tree/main/A4" }
        ]
    },
    {
        id: "data-utility",
        title: {
            en: "Data Processing & Validation Utility",
            es: "Utilidad de Procesamiento y Validación de Datos",
            pt: "Utilitário de Processamento e Validação de Dados"
        },
        description: {
            en: "A reusable Java utility class to streamline data handling, featuring robust methods for input validation, file I/O, statistical calculations, array manipulation, and sorting algorithms.",
            es: "Una clase de utilidad Java reutilizable para optimizar el manejo de datos, con métodos robustos para validación de entrada, E/S de archivos, cálculos estadísticos, manipulación de arrays y algoritmos de ordenamiento.",
            pt: "Uma classe utilitária Java reutilizável para otimizar o manuseio de dados, com métodos robustos para validação de entrada, E/S de arquivos, cálculos estatísticos, manipulação de arrays e algoritmos de ordenação."
        },
        category: "school",
        tags: [
            { name: "Java", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
            { name: "OOP", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
            { name: "Data Structures", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
            { name: "File I/O", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200" }
        ],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects" }
        ]
    }
];

const translations = {
    en: {
        nav_about: "About",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_resume: "Resume",
        nav_contact: "Contact Me",
        hero_greeting: "Hi, I'm Paul Piotrowski",
        hero_title: "Computer Science Student & AI Engineer",
        hero_desc: "I build data-driven, full-stack applications that bridge the gap between business needs and intelligent tech solutions. I'm passionate about solving complex problems and thrive in fast-paced environments.",
        btn_view_projects: "View My Projects",
        btn_github: "GitHub Profile",
        section_about: "About Me",
        about_desc_1: "I am a Computer Science student at Florida International University (3.80 GPA) with a journey rooted in solving real-world business challenges. My goal has always been to get into tech, and my professional role as a Sales Supervisor & Technical Operations Lead has been the key to supporting my education.",
        about_desc_2: "This unique path has given me a powerful blend of skills: I not only understand how to architect a Java algorithm or a Python backend, but I also know how to lead a team and use data to drive real business results, like increasing customer satisfaction by over 80%. I thrive on building, leading, and learning.",
        section_education: "Education",
        edu_school: "Florida International University",
        edu_degree: "B.S. in Computer Science",
        edu_period: "Expected August 2027",
        edu_gpa: "GPA: 3.80 / 4.00",
        edu_coursework_label: "Relevant Coursework",
        edu_coursework: "Data Structures & Algorithms · Object-Oriented Programming · Database Systems · Software Engineering · Computer Networks · Operating Systems",
        section_projects: "Featured Projects",
        filter_featured: "Featured Projects",
        filter_all: "All Projects",
        filter_personal: "Personal Projects",
        filter_school: "School Assignments",
        section_experience: "Work Experience",
        stat_faster_response: "Faster Response",
        stat_reservations_month: "Reservations/mo",
        stat_saved_week: "Saved/week",
        stat_vehicles_managed: "Vehicles Managed",
        job_title_stride: "Software Engineer",
        job_company_stride: "Stride Rent a Car | Sep 2022 - Present",
        job_stride_desc_1: "Built and maintain a 6-module internal business dashboard covering Reservations, Claims, Reports, Chargebacks, Florida Renters, and Reviews. The dashboard integrates the Rently and HQ Car Rental APIs with a Supabase PostgreSQL backend and is used every day by the team to manage over 1,200 vehicles and roughly 5,000 reservations per month across a company of 100 employees, saving an estimated 45 hours of manual work per week.",
        job_stride_desc_2: "Cut chargeback response time by 90%, bringing the average from 30 minutes down to under 3 minutes. Instead of jumping between disconnected systems, the team now has all reservation, payment, and vehicle data in one place.",
        job_stride_desc_3: "Gave the team access to live fleet availability and reservation data for the first time, which improved pricing decisions, sped up customer responses, and reduced the amount of time vehicles sat idle between bookings.",
        job_stride_desc_4: "Serve as the sole engineer responsible for reservations, pricing, and chargeback workflows, taking projects from business requirement all the way to production for a company that processes over 5,000 reservations per month.",
        job_title_buo: "Software Engineer Intern",
        job_company_buo: "Buo | Jan 2026 - Apr 2026",
        job_buo_desc_1: "Built the core dining hall data pipeline powering Buo's iOS app (live on the App Store), scraped real-time menu data from multiple college campus dining systems using Puppeteer and Playwright, enabling the app's flagship feature of personalized AI meal plans based on what's available in students' dining halls today.",
        job_buo_desc_2: "Designed and structured database tables to store and serve scraped menu data; integrated Mistral AI to normalize, classify, and enrich raw scraped meal data into structured nutritional records consumed by the app's meal planning engine.",
        section_skills: "Core Competencies",
        skill_proficiency: "Technical Proficiency",
        skill_data: "Data Analysis & Databases",
        skill_prog: "Programming & Tools",
        skill_lead: "Leadership & Soft Skills",
        section_contact: "Let's Connect",
        contact_desc: "I'm actively seeking challenging computer science and data internships. I'd love to chat about how my skills and experience can help your team.",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        btn_send: "Send Message",
        btn_touch: "Get In Touch",
        footer_text: "&copy; 2026 Paul Piotrowski. Built with HTML, Tailwind CSS, and passion."
    },
    es: {
        nav_about: "Sobre Mí",
        nav_education: "Educación",
        nav_projects: "Proyectos",
        nav_experience: "Experiencia",
        nav_skills: "Habilidades",
        nav_resume: "Currículum",
        nav_contact: "Contáctame",
        hero_greeting: "Hola, soy Paul Piotrowski",
        hero_title: "Estudiante de Ciencias de la Computación e Ingeniero de IA",
        hero_desc: "Creo aplicaciones full-stack impulsadas por datos que unen las necesidades empresariales con soluciones tecnológicas inteligentes. Me apasiona resolver problemas complejos y prospero en entornos de ritmo rápido.",
        btn_view_projects: "Ver Mis Proyectos",
        btn_github: "Perfil de GitHub",
        section_about: "Sobre Mí",
        about_desc_1: "Soy estudiante de Ciencias de la Computación en la Universidad Internacional de Florida (3.80 GPA) con una trayectoria arraigada en la resolución de desafíos empresariales del mundo real. Mi objetivo siempre ha sido entrar en la tecnología, y mi rol profesional como Supervisor de Ventas y Líder de Operaciones Técnicas ha sido clave para apoyar mi educación.",
        about_desc_2: "Este camino único me ha dado una mezcla poderosa de habilidades: no solo entiendo cómo arquitectar un algoritmo en Java o un backend en Python, sino que también sé cómo liderar un equipo y usar datos para impulsar resultados empresariales reales, como aumentar la satisfacción del cliente en más del 80%. Prospero construyendo, liderando y aprendiendo.",
        section_education: "Educación",
        edu_school: "Florida International University",
        edu_degree: "B.S. en Ciencias de la Computación",
        edu_period: "Graduación esperada: Agosto 2027",
        edu_gpa: "GPA: 3.80 / 4.00",
        edu_coursework_label: "Cursos Relevantes",
        edu_coursework: "Estructuras de Datos y Algoritmos · Programación Orientada a Objetos · Sistemas de Bases de Datos · Ingeniería de Software · Redes de Computadoras · Sistemas Operativos",
        section_projects: "Proyectos Destacados",
        filter_featured: "Proyectos Destacados",
        filter_all: "Todos los Proyectos",
        filter_personal: "Proyectos Personales",
        filter_school: "Tareas Escolares",
        section_experience: "Experiencia Laboral",
        stat_faster_response: "Respuesta más rápida",
        stat_reservations_month: "Reservas/mes",
        stat_saved_week: "Ahorradas/semana",
        stat_vehicles_managed: "Vehículos gestionados",
        job_title_stride: "Ingeniero de Software",
        job_company_stride: "Stride Rent a Car | Sep 2022 - Presente",
        job_stride_desc_1: "Construí y mantengo un panel de control empresarial interno de 6 módulos que cubre Reservas, Reclamos, Reportes, Contracargos, Arrendatarios de Florida y Reseñas. El panel integra las API de Rently y HQ Car Rental con un backend de Supabase PostgreSQL y es utilizado diariamente por el equipo para administrar más de 1,200 vehículos y aproximadamente 5,000 reservas por mes en una empresa de 100 empleados, ahorrando unas 45 horas de trabajo manual por semana.",
        job_stride_desc_2: "Reduje el tiempo de respuesta de contracargos en un 90%, reduciendo el promedio de 30 minutos a menos de 3 minutos. En lugar de alternar entre sistemas desconectados, el equipo ahora tiene todos los datos de reservas, pagos y vehículos en un solo lugar.",
        job_stride_desc_3: "Le di al equipo acceso a datos de disponibilidad de flota y reservas en vivo por primera vez, lo que mejoró las decisiones de precios, aceleró las respuestas de los clientes y redujo la cantidad de tiempo que los vehículos estaban inactivos entre reservas.",
        job_stride_desc_4: "Me desempeño como el único ingeniero responsable de los flujos de trabajo de reservas, precios y contracargos, llevando los proyectos desde los requisitos del negocio hasta la producción para una empresa que procesa más de 5,000 reservas por mes.",
        job_title_buo: "Pasante de Ingeniería de Software",
        job_company_buo: "Buo | Ene 2026 - Abr 2026",
        job_buo_desc_1: "Construí el flujo de datos central de los comedores universitarios que impulsa la aplicación de iOS de Buo (disponible en el App Store), extraje datos de menús en tiempo real de múltiples sistemas de comedores de campus universitarios usando Puppeteer y Playwright, habilitando la función principal de la aplicación de planes de comidas personalizados con IA basados en lo que está disponible hoy en los comedores de los estudiantes.",
        job_buo_desc_2: "Diseñé y estructuré tablas de bases de datos para almacenar y servir datos de menús extraídos; integré Mistral AI para normalizar, clasificar y enriquecer los datos brutos de comidas extraídas en registros nutricionales estructurados consumidos por el motor de planificación de comidas de la aplicación.",
        section_skills: "Competencias Principales",
        skill_proficiency: "Dominio Técnico",
        skill_data: "Análisis de Datos y Bases de Datos",
        skill_prog: "Programación y Herramientas",
        skill_lead: "Liderazgo y Habilidades Blandas",
        section_contact: "Conectemos",
        contact_desc: "Estoy buscando activamente pasantías desafiantes en ciencias de la computación y datos. Me encantaría charlar sobre cómo mis habilidades y experiencia pueden ayudar a su equipo.",
        contact_name: "Tu Nombre",
        contact_email: "Tu Correo Electrónico",
        contact_message: "Tu Mensaje",
        btn_send: "Enviar Mensaje",
        btn_touch: "Ponte en Contacto",
        footer_text: "&copy; 2026 Paul Piotrowski. Construido con HTML, Tailwind CSS y pasión."
    },
    pt: {
        nav_about: "Sobre Mim",
        nav_education: "Educação",
        nav_projects: "Projetos",
        nav_experience: "Experiência",
        nav_skills: "Habilidades",
        nav_resume: "Currículo",
        nav_contact: "Contate-me",
        hero_greeting: "Olá, sou Paul Piotrowski",
        hero_title: "Estudante de Ciência da Computação e Engenheiro de IA",
        hero_desc: "Crio aplicações full-stack baseadas em dados que unem as necessidades de negócios a soluções tecnológicas inteligentes. Sou apaixonado por resolver problemas complexos e prospero em ambientes dinâmicos.",
        btn_view_projects: "Ver Meus Projetos",
        btn_github: "Perfil do GitHub",
        section_about: "Sobre Mim",
        about_desc_1: "Sou estudante de Ciência da Computação na Florida International University (3.80 GPA) com uma jornada enraizada na resolução de desafios de negócios do mundo real. Meu objetivo sempre foi entrar na tecnologia, e meu papel profissional como Supervisor de Vendas e Líder de Operações Técnicas foi fundamental para apoiar minha educação.",
        about_desc_2: "Esse caminho único me deu uma mistura poderosa de habilidades: não apenas entendo como arquitetar um algoritmo Java ou um backend Python, mas também sei como liderar uma equipe e usar dados para impulsionar resultados reais de negócios, como aumentar a satisfação do cliente em mais de 80%. Eu prospero construindo, liderando e aprendendo.",
        section_education: "Educação",
        edu_school: "Florida International University",
        edu_degree: "B.S. em Ciência da Computação",
        edu_period: "Conclusão prevista: Agosto 2027",
        edu_gpa: "GPA: 3.80 / 4.00",
        edu_coursework_label: "Disciplinas Relevantes",
        edu_coursework: "Estruturas de Dados e Algoritmos · Programação Orientada a Objetos · Sistemas de Banco de Dados · Engenharia de Software · Redes de Computadores · Sistemas Operacionais",
        section_projects: "Projetos em Destaque",
        filter_featured: "Projetos em Destaque",
        filter_all: "Todos os Projetos",
        filter_personal: "Projetos Pessoais",
        filter_school: "Trabalhos Escolares",
        section_experience: "Experiência Profissional",
        stat_faster_response: "Resposta mais rápida",
        stat_reservations_month: "Reservas/mês",
        stat_saved_week: "Economizadas/semana",
        stat_vehicles_managed: "Veículos gerenciados",
        job_title_stride: "Engenheiro de Software",
        job_company_stride: "Stride Rent a Car | Set 2022 - Presente",
        job_stride_desc_1: "Construí e mantenho um painel de negócios interno de 6 módulos cobrindo Reservas, Reclamações, Relatórios, Estornos, Locatários da Flórida e Avaliações. O painel integra as APIs Rently e HQ Car Rental com um backend Supabase PostgreSQL e é usado todos os dias pela equipe para gerenciar mais de 1.200 veículos e cerca de 5.000 reservas por mês em uma empresa de 100 funcionários, economizando cerca de 45 horas de trabalho manual por semana.",
        job_stride_desc_2: "Reduzi o tempo de resposta a estornos em 90%, diminuindo a média de 30 minutos para menos de 3 minutos. Em vez de alternar entre sistemas desconectados, a equipe agora tem todos os dados de reservas, pagamentos e veículos em um só lugar.",
        job_stride_desc_3: "Dei à equipe acesso a dados de disponibilidade de frota e reservas ao vivo pela primeira vez, o que melhorou as decisões de preços, acelerou as respostas dos clientes e reduziu o tempo que os veículos ficavam ociosos entre as reservas.",
        job_stride_desc_4: "Atuo como o único engenheiro responsável pelos fluxos de trabalho de reservas, preços e estornos, levando projetos desde os requisitos de negócios até a produção para uma empresa que processa mais de 5.000 reservas por mês.",
        job_title_buo: "Estagiário de Engenharia de Software",
        job_company_buo: "Buo | Jan 2026 - Abr 2026",
        job_buo_desc_1: "Construí o pipeline de dados central de refeitórios que alimenta o aplicativo iOS da Buo (disponível na App Store), raspei dados de menus em tempo real de vários sistemas de refeitórios de campi universitários usando Puppeteer e Playwright, habilitando o principal recurso do aplicativo de planos de refeições personalizados com IA com base no que está disponível hoje nos refeitórios dos alunos.",
        job_buo_desc_2: "Projetei e estruturei tabelas de banco de dados para armazenar e servir dados de menus raspados; integrei o Mistral AI para normalizar, classificar e enriquecer dados brutos de refeições raspados em registros nutricionais estruturados consumidos pelo mecanismo de planejamento de refeições do aplicativo.",
        section_skills: "Principais Competências",
        skill_proficiency: "Proficiência Técnica",
        skill_data: "Análise de Dados e Bancos de Dados",
        skill_prog: "Programação e Ferramentas",
        skill_lead: "Liderança e Soft Skills",
        section_contact: "Vamos Conectar",
        contact_desc: "Estou buscando ativamente estágios desafiadores em ciência da computação e dados. Adoraria conversar sobre como minhas habilidades e experiência podem ajudar sua equipe.",
        contact_name: "Seu Nome",
        contact_email: "Seu E-mail",
        contact_message: "Sua Mensagem",
        btn_send: "Enviar Mensagem",
        btn_touch: "Entre em Contato",
        footer_text: "&copy; 2026 Paul Piotrowski. Construído com HTML, Tailwind CSS e paixão."
    }
};

let currentLang = 'en';
let currentCategory = 'featured';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    renderProjects();
    updateLanguage();
    setupEventListeners();
    initScrollAnimations();
    initStaggerAnimations();
    initBackToTop();
    initSkillBars();
    initContactForm();
    initScrollProgress();
    initHeroParticles();
    initStatCounters();
    initActiveNav();
});

function setupEventListeners() {
    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }

    // Language Selector
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateLanguage();
            renderProjects();
        });
    }

    // Category Filters — nav dropdown items
    document.querySelectorAll('.project-filter').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = e.target.dataset.category || e.currentTarget.dataset.category;
            renderProjects();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Category Filters — page-level buttons
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            renderProjects();
        });
    });
}

function updateFilterButtons() {
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        const isActive = btn.dataset.category === currentCategory;
        btn.classList.toggle('bg-blue-600', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('shadow-md', isActive);
        btn.classList.toggle('bg-gray-100', !isActive);
        btn.classList.toggle('dark:bg-gray-700', !isActive);
        btn.classList.toggle('text-gray-700', !isActive);
        btn.classList.toggle('dark:text-gray-200', !isActive);
        btn.classList.toggle('hover:bg-gray-200', !isActive);
        btn.classList.toggle('dark:hover:bg-gray-600', !isActive);
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Update section heading to reflect the active filter
    const sectionHeading = document.querySelector('[data-i18n="section_projects"]');
    if (sectionHeading) {
        const categoryKeyMap = {
            featured: 'filter_featured',
            all: 'filter_all',
            personal: 'filter_personal',
            school: 'filter_school'
        };
        const t = translations[currentLang];
        const headingKey = categoryKeyMap[currentCategory] || 'filter_featured';
        sectionHeading.textContent = t[headingKey];
    }

    // Sync filter button active state
    updateFilterButtons();

    container.innerHTML = '';

    const filteredProjects = projects.filter(p => {
        if (currentCategory === 'featured') return p.featured === true;
        if (currentCategory === 'all') return true;
        return p.category === currentCategory;
    });

    filteredProjects.forEach((project, index) => {
        const title = project.title[currentLang];
        const description = project.description[currentLang];

        const card = document.createElement('div');
        card.className = "glass-card flex flex-col h-full stagger-item";
        card.style.transitionDelay = `${index * 0.08}s`;

        const tagsHtml = project.tags.map(tag =>
            `<span class="text-xs font-semibold px-3 py-1 rounded-full ${tag.color}">${tag.name}</span>`
        ).join('');

        const linksHtml = project.links.map(link =>
            `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mr-4">${link.text} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>`
        ).join('');

        card.innerHTML = `
            <div class="p-6 flex flex-col h-full">
                <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">${title}</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-grow leading-relaxed">
                    ${description}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${tagsHtml}
                </div>
                <div class="mt-auto">
                    ${linksHtml}
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    if (isNearViewport(container)) {
        revealStaggerItems(container);
    }
}

function updateLanguage() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (key === 'footer_text') {
                element.innerHTML = t[key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
}

// === Scroll Fade-in Animations ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// === Back to Top Button ===
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            btn.classList.add('opacity-100', 'translate-y-0');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            btn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// === Skill Bar Animations ===
function initSkillBars() {
    const container = document.getElementById('skill-bars');
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(container);
}

// === Staggered Animations ===
function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealStaggerItems(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('#projects-container, .grid').forEach(el => observer.observe(el));
}

function revealStaggerItems(container) {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 80);
    });
}

function isNearViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

// === Scroll Progress Bar ===
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
    }, { passive: true });
}

// === Hero Particles ===
function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        const size = Math.random() * 8 + 3;
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = (Math.random() * 8 + 6) + 's';
        span.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(span);
    }
}

// === Stat Counters ===
function initStatCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const separator = el.dataset.separator || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        let current = Math.floor(eased * target);
        let display = separator ? current.toLocaleString() : current.toString();
        el.textContent = display + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// === Active Nav Highlighting ===
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav .hidden.md\\:flex a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('nav-link-active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('nav-link-active');
            }
        });
    }, { passive: true });
}

// === Contact Form (Formspree) ===
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const status = document.getElementById('form-status');

        btn.disabled = true;
        btn.textContent = '...';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                status.textContent = "Message sent! I'll get back to you soon.";
                status.className = 'mt-4 text-green-400 font-medium';
            } else {
                status.textContent = 'Something went wrong. Please try emailing me directly.';
                status.className = 'mt-4 text-red-400 font-medium';
            }
        } catch {
            status.textContent = 'Something went wrong. Please try emailing me directly.';
            status.className = 'mt-4 text-red-400 font-medium';
        }

        btn.disabled = false;
        const t = translations[currentLang];
        btn.textContent = t.btn_send || 'Send Message';
    });
}
