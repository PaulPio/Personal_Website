const projects = [
    {
        id: "prof-summarizer",
        featured: true,
        image: "assets/thumbs/prof-summarizer.png",
        year: "2026",
        title: {
            en: "ProfSummarizer",
            es: "ProfSummarizer",
            pt: "ProfSummarizer"
        },
        description: {
            en: "AI lecture tool used by FIU students to turn recordings into Cornell Notes, flashcards, and quizzes. Serverless Supabase Edge Functions for transcription, summarization, and chat — secured with Google OAuth and PostgreSQL.",
            es: "Herramienta de IA para clases usada por estudiantes de FIU: convierte grabaciones en notas Cornell, flashcards y quizzes. Backend serverless en Supabase Edge Functions con OAuth de Google y PostgreSQL.",
            pt: "Ferramenta de IA para aulas usada por alunos da FIU: transforma gravações em notas Cornell, flashcards e quizzes. Backend serverless com Supabase Edge Functions, OAuth Google e PostgreSQL."
        },
        category: "personal",
        tags: ["TypeScript", "React 19", "Supabase", "Gemini", "Vercel"],
        links: [
            { text: "Live Demo", url: "https://prof-summarizer.vercel.app/", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/Prof-Summarizer", kind: "code" }
        ]
    },
    {
        id: "resume-fit",
        featured: true,
        image: "assets/thumbs/resume-fit.png",
        year: "2026",
        title: {
            en: "ResumeFit",
            es: "ResumeFit",
            pt: "ResumeFit"
        },
        description: {
            en: "AI resume health check + ranked internship matching + listing-specific tailoring with Gemma via OpenRouter. Built for 305 SummerCodex — upload a PDF, get evidence-backed fit scores against live internship postings, and download a tailored resume.",
            es: "Chequeo de salud del CV con IA + ranking de pasantías + adaptación a ofertas con Gemma vía OpenRouter. Sube un PDF, obtén scores con evidencia y descarga un CV adaptado.",
            pt: "Check de saúde do currículo com IA + ranking de estágios + adaptação a vagas com Gemma via OpenRouter. Envie um PDF, receba scores com evidência e baixe um currículo sob medida."
        },
        category: "personal",
        tags: ["Next.js", "TypeScript", "Gemma", "OpenRouter", "Tailwind"],
        links: [
            { text: "Live Demo", url: "https://starter-hackathon-project.vercel.app", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/ResumeFit", kind: "code" }
        ]
    },
    {
        id: "plate-spotter",
        featured: true,
        image: "assets/thumbs/plate-spotter.png",
        year: "2026",
        title: {
            en: "PlateSpotter AI",
            es: "PlateSpotter IA",
            pt: "PlateSpotter IA"
        },
        description: {
            en: "Production PWA for auto shops to log license plates with Gemini Vision scanning, Flash Lite text formatting, and Google Sheets sync — cutting repair-order logging time by ~80% across two offices.",
            es: "PWA en producción para talleres: escaneo de placas con Gemini Vision, formato con Flash Lite y sync a Google Sheets — reduce ~80% el tiempo de registro de órdenes.",
            pt: "PWA em produção para oficinas: leitura de placas com Gemini Vision, formatação com Flash Lite e sync com Google Sheets — corta ~80% o tempo de registro de ordens."
        },
        category: "personal",
        tags: ["React 19", "TypeScript", "Gemini Vision", "PWA", "Tailwind CSS"],
        links: [
            { text: "Live Demo", url: "https://plate-spotter.vercel.app", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/plate-spotter", kind: "code" }
        ]
    },
    {
        id: "freefall",
        featured: true,
        image: "assets/thumbs/freefall.png",
        year: "2026",
        title: {
            en: "FreeFall",
            es: "FreeFall",
            pt: "FreeFall"
        },
        description: {
            en: "Geometry Dash–styled endless falling game for Sunjam. Desktop host + phone tilt controller over QR/WebRTC (PeerJS), synthesized WebAudio, depth and gem scoring — you only fall faster.",
            es: "Juego endless de caída estilo Geometry Dash para Sunjam. Host en desktop + control por inclinación del teléfono vía QR/WebRTC (PeerJS), audio sintetizado y puntuación por profundidad.",
            pt: "Jogo endless de queda estilo Geometry Dash para o Sunjam. Host no desktop + controle por inclinação do celular via QR/WebRTC (PeerJS), áudio sintetizado e pontuação por profundidade."
        },
        category: "personal",
        tags: ["Phaser", "PeerJS", "WebRTC", "WebAudio", "Vite"],
        links: [
            { text: "Live Demo", url: "https://frefall.vercel.app", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/Frefall", kind: "code" }
        ]
    },
    {
        id: "iot-lab",
        featured: true,
        image: "assets/thumbs/iot.png",
        year: "2026",
        title: {
            en: "ESP32 & Raspberry Pi IoT Lab",
            es: "Lab IoT ESP32 y Raspberry Pi",
            pt: "Lab IoT ESP32 e Raspberry Pi"
        },
        description: {
            en: "Personal IoT lab: ESP32 Wi-Fi web servers for LED control and DHT11 temp/humidity, plus a Raspberry Pi Flask dashboard with SQLite history, charts, and remote access via Tailscale.",
            es: "Lab IoT personal: servidores Wi-Fi en ESP32 para LED y DHT11, más un dashboard Flask en Raspberry Pi con historial SQLite, gráficos y acceso remoto vía Tailscale.",
            pt: "Lab IoT pessoal: servidores Wi-Fi no ESP32 para LED e DHT11, mais um dashboard Flask no Raspberry Pi com histórico SQLite, gráficos e acesso remoto via Tailscale."
        },
        category: "personal",
        tags: ["ESP32", "Raspberry Pi", "DHT11", "Flask", "SQLite"],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/IOT", kind: "code" }
        ]
    },
    {
        id: "nous-core",
        featured: true,
        image: "assets/thumbs/nous-core.png",
        year: "2026",
        title: {
            en: "OpenRouter Provider (nous-core)",
            es: "Provider OpenRouter (nous-core)",
            pt: "Provider OpenRouter (nous-core)"
        },
        description: {
            en: "Open-source contribution to nous-core: certified OpenRouter provider leaf with shared ChatCompletions architecture and model discovery. Passed multi-round maintainer review on auth fallback safety and API key validation.",
            es: "Contribución open source a nous-core: provider certificado de OpenRouter con arquitectura ChatCompletions compartida y descubrimiento de modelos. Superó varias rondas de review de mantenedores.",
            pt: "Contribuição open source ao nous-core: provider certificado da OpenRouter com arquitetura ChatCompletions compartilhada e descoberta de modelos. Passou por várias rodadas de review dos maintainers."
        },
        category: "personal",
        tags: ["TypeScript", "Node.js", "OpenRouter", "REST APIs", "LLM Infra"],
        links: [
            { text: "Pull Request", url: "https://github.com/orthogonalhq/nous-core/pull/410", kind: "demo" },
            { text: "View Repo", url: "https://github.com/orthogonalhq/nous-core", kind: "code" }
        ]
    },
    {
        id: "refocus",
        featured: true,
        image: "assets/thumbs/refocus.png",
        year: "2026",
        title: {
            en: "ReFocus",
            es: "ReFocus",
            pt: "ReFocus"
        },
        description: {
            en: "AI-powered desktop productivity coach. On the Intelligence Team for INIT FIU Build — computer vision models that analyze engagement locally in real time for a privacy-first focus coach.",
            es: "Coach de productividad de escritorio con IA. En el equipo de Inteligencia de INIT FIU Build — visión por computadora local en tiempo real, privacy-first.",
            pt: "Coach de produtividade desktop com IA. No time de Inteligência do INIT FIU Build — visão computacional local em tempo real, privacy-first."
        },
        category: "personal",
        tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
        links: [
            { text: "View Code", url: "https://github.com/AlexWS12/ReFocus", kind: "code" }
        ]
    },
    {
        id: "gradtrack",
        featured: true,
        image: "assets/thumbs/gradtrack.png",
        year: "2025",
        title: {
            en: "GradTrack AI Agent",
            es: "Agente de IA GradTrack",
            pt: "Agente de IA GradTrack"
        },
        description: {
            en: "AI-powered web app to help students explore, plan, and visualize academic pathways and transfer options using real course and university data.",
            es: "Aplicación web impulsada por IA para ayudar a los estudiantes a explorar, planificar y visualizar rutas académicas y opciones de transferencia.",
            pt: "Aplicação web baseada em IA para ajudar estudantes a explorar, planejar e visualizar caminhos acadêmicos e opções de transferência."
        },
        category: "personal",
        tags: ["TypeScript", "React", "Gemini API", "Tailwind CSS"],
        links: [
            { text: "Live Demo", url: "https://mdcgradtrack.netlify.app/", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/GradTrack/tree/AIAgent", kind: "code" }
        ]
    },
    {
        id: "senior-helper",
        featured: true,
        image: "assets/thumbs/senior-helper.png",
        year: "2025",
        title: {
            en: "Senior Helper",
            es: "Senior Helper",
            pt: "Senior Helper"
        },
        description: {
            en: "Led a 3-person team in a 36-hour hackathon to build a full-stack conversational AI agent for seniors, featuring emergency alerts and live data.",
            es: "Dirigió un equipo de 3 personas en un hackathon de 36 horas para construir un agente de IA conversacional full-stack para personas mayores.",
            pt: "Liderou uma equipe de 3 pessoas em um hackathon de 36 horas para construir um agente de IA conversacional full-stack para idosos."
        },
        category: "personal",
        tags: ["Python", "Gemini", "Flask", "JavaScript"],
        links: [
            { text: "Live Demo", url: "https://seniorhelper.netlify.app/", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/SeniorHelper", kind: "code" }
        ]
    },
    {
        id: "finance-flow",
        featured: false,
        image: "assets/thumbs/finance-flow.png",
        year: "2026",
        title: {
            en: "FinanceFlow",
            es: "FinanceFlow",
            pt: "FinanceFlow"
        },
        description: {
            en: "Full-stack personal finance dashboard with AI advisor chatbot, interactive charts, and secure authentication.",
            es: "Panel de finanzas personales full-stack con chatbot asesor de IA, gráficos interactivos y autenticación segura.",
            pt: "Painel financeiro pessoal full-stack com chatbot consultor de IA, gráficos interativos e autenticação segura."
        },
        category: "personal",
        tags: ["React", "Node", "MongoDB", "Gemini AI"],
        links: [
            { text: "Live Demo", url: "https://finance-flow-lac.vercel.app", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/financeFlow", kind: "code" }
        ]
    },
    {
        id: "water-quality",
        featured: true,
        image: "assets/thumbs/water-quality.png",
        year: "2025",
        title: {
            en: "Water Quality Dashboard",
            es: "Tablero de Calidad del Agua",
            pt: "Painel de Qualidade da Água"
        },
        description: {
            en: "Full-stack web app for monitoring ocean water quality data with interactive visualizations and real-time filtering.",
            es: "Aplicación web full-stack para monitorear datos de calidad del agua del océano con visualizaciones interactivas.",
            pt: "Aplicação web full-stack para monitorar dados de qualidade da água do oceano com visualizações interativas."
        },
        category: "school",
        tags: ["Python", "Flask", "Streamlit", "MongoDB"],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/ClassProjectIR2025", kind: "code" }
        ]
    },
    {
        id: "fiu-a3",
        featured: false,
        image: "assets/thumbs/fiu-a3.png",
        year: "2024",
        title: {
            en: "Event Organizer System",
            es: "Sistema Organizador de Eventos",
            pt: "Sistema Organizador de Eventos"
        },
        description: {
            en: "Java CLI event management app with custom Date/DateTime classes, validation, exception handling, and OOP sorting.",
            es: "Aplicación CLI Java de gestión de eventos con clases Date/DateTime, validación y ordenamiento OOP.",
            pt: "Aplicativo CLI Java de gerenciamento de eventos com classes Date/DateTime, validação e ordenação OOP."
        },
        category: "school",
        tags: ["Java", "OOP", "CLI"],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects/tree/main/A3", kind: "code" }
        ]
    },
    {
        id: "fiu-a4",
        featured: false,
        image: "assets/thumbs/fiu-a4.png",
        year: "2024",
        title: {
            en: "Alphabet Sum Puzzle Solver",
            es: "Solucionador de Suma Alfabética",
            pt: "Solucionador de Soma Alfabética"
        },
        description: {
            en: "Recursive backtracking CSP solver for cryptarithmetic puzzles with constraint satisfaction and pruning.",
            es: "Solucionador CSP de retroceso recursivo para rompecabezas criptoaritméticos.",
            pt: "Solucionador CSP de backtracking recursivo para quebra-cabeças criptoaritméticos."
        },
        category: "school",
        tags: ["Java", "Algorithms", "Recursion"],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects/tree/main/A4", kind: "code" }
        ]
    },
    {
        id: "data-utility",
        featured: false,
        image: "assets/thumbs/data-utility.png",
        year: "2024",
        title: {
            en: "Data Processing Utility",
            es: "Utilidad de Procesamiento de Datos",
            pt: "Utilitário de Processamento de Dados"
        },
        description: {
            en: "Reusable Java utility for input validation, file I/O, statistical calculations, array manipulation, and sorting.",
            es: "Utilidad Java reutilizable para validación, E/S de archivos, cálculos estadísticos y ordenamiento.",
            pt: "Utilitário Java reutilizável para validação, E/S de arquivos, cálculos estatísticos e ordenação."
        },
        category: "school",
        tags: ["Java", "OOP", "File I/O"],
        links: [
            { text: "View Code", url: "https://github.com/PaulPio/FIUProjects", kind: "code" }
        ]
    }
];

const translations = {
    en: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_work: "WORK",
        nav_exp: "EXP",
        nav_skills: "SKILLS",
        nav_edu: "EDU",
        nav_contact_short: "CONTACT",
        nav_resume: "RESUME",
        hero_insert: "INSERT COIN TO CONTINUE",
        hero_title_pre: "AI ENGINEER WHO SHIPS —",
        hero_title_highlight: "REAL SYSTEMS",
        hero_title_post: "FOR REAL USERS.",
        hero_desc: "I build production AI apps, vision tools, and agent infrastructure — from lecture copilots to smart-city IoT. Looking for SWE, AI, and Forward Deployed Engineer internships.",
        btn_view_work: "▶ VIEW WORK",
        btn_contact: "CONTACT",
        status_player: "PLAYER",
        status_player_val: "ONLINE",
        status_mode: "MODE",
        status_mode_val: "SWE_AI_FDE",
        status_map: "MAP",
        status_map_val: "MIAMI_FL",
        status_class: "CLASS",
        status_class_val: "AI_ENGINEER",
        section_about_label: "ABOUT.ME",
        about_desc_1: "I'm an AI engineer based in Miami. I earned an A.S. in Computer Science at Miami Dade College (GPA 4.00, Jan–Dec 2024) and I'm continuing a B.S. in CS at Florida International University (GPA 3.76, expected Apr 2028). I ship production systems that mix full-stack software with LLMs, computer vision, and edge/IoT.",
        about_desc_2: "I'm bilingual (English/Spanish) with Portuguese, and I'm looking for Software Engineering, AI/ML, and Forward Deployed Engineer internships. Recent work spans ProfSummarizer, PlateSpotter, open-source agent infra (nous-core / OpenRouter), and an AI smart-city kiosk on Raspberry Pi for the City of Coral Gables.",
        section_github: "GITHUB_ACTIVITY",
        section_projects_label: "LOAD_PROJECTS.DAT",
        filter_featured: "FEATURED",
        filter_all: "ALL",
        filter_personal: "PERSONAL",
        filter_school: "SCHOOL",
        link_demo: "▶ PLAY DEMO",
        link_code: "VIEW SOURCE",
        link_details: "DETAILS ▶",
        section_exp_coral_label: "LEVEL_01: CITY_OF_CORAL_GABLES",
        section_exp_label: "LEVEL_02: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "LEVEL_03: BUO",
        job_title_coral: "SOFTWARE ENGINEER INTERN",
        job_period_coral: "MAY — JUN 2026",
        job_coral_desc_1: "▸ Engineered an AI-powered smart city kiosk proof of concept on a Raspberry Pi 5 in 3 weeks — a functional interactive IoT installation for the city.",
        job_coral_desc_2: "▸ Built a state-driven Pygame frontend for the AI avatar lifecycle, triggering Gemini Veo-generated video states (Idle, Listening, Speaking) in real time.",
        job_title_stride: "SOFTWARE ENGINEER",
        job_period_stride: "DEC 2025 — MAY 2026",
        job_stride_summary: "Sole engineer for a 6-module ops dashboard (reservations, chargebacks, pricing) integrating two rental APIs on Supabase Postgres — used daily to manage 1,200+ vehicles and ~5,000 bookings/month for a 100-person company.",
        job_stride_desc_2: "▸ Cut chargeback response time by 90%, bringing the average from 30 minutes down to under 3 minutes.",
        job_stride_desc_3: "▸ Gave the team access to live fleet availability and reservation data for the first time.",
        job_stride_desc_4: "▸ Sole engineer for reservations, pricing, and chargeback workflows — requirement to production.",
        job_title_buo: "SOFTWARE ENGINEER INTERN",
        job_period_buo: "JAN 2026 — APR 2026",
        job_buo_desc_1: "▸ Built the core dining hall data pipeline powering Buo's iOS app (live on the App Store).",
        job_buo_desc_2: "▸ Designed database tables and integrated Mistral AI to normalize scraped meal data.",
        stat_faster_response: "FASTER CHARGEBACK RESPONSE",
        stat_reservations_month: "RESERVATIONS / MO",
        stat_vehicles_managed: "VEHICLES MANAGED",
        stat_saved_week: "SAVED / WEEK",
        section_skills_label: "INVENTORY.SYS",
        section_edu_label: "ACHIEVEMENTS_UNLOCKED",
        edu_school_short: "FIU — B.S. CS",
        edu_details: "Expected Apr 2028 · GPA 3.76/4.00",
        edu_coursework: "Data Structures & Algorithms · OOP · Database Systems · Software Engineering · Networks · OS",
        edu_clubs: "Clubs: INIT · Google Developer Group · AAVE · CASHI",
        edu_mdc_school: "MDC — A.S. COMPUTER SCIENCE",
        edu_mdc_details: "Jan — Dec 2024 · GPA 4.00/4.00",
        edu_mdc_desc: "Associate of Science in Computer Science at Miami Dade College — foundation in programming, algorithms, and systems before transferring to FIU.",
        edu_platzi: "🏆 20+ PLATZI CERTS ↗",
        section_contact_label: "SEND_MESSAGE.EXE",
        contact_desc: "I'm actively seeking Software Engineering, AI, and Forward Deployed Engineer internships. Let's talk about how I can ship with your team.",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        contact_or_email: "Or email me directly:",
        btn_send: "▶ SEND MESSAGE",
        footer_text: "&copy; 2026 Paul Piotrowski. INSERT COIN TO REPLAY."
    },
    es: {
        nav_home: "INICIO",
        nav_about: "SOBRE",
        nav_work: "TRABAJO",
        nav_exp: "EXP",
        nav_skills: "SKILLS",
        nav_edu: "EDU",
        nav_contact_short: "CONTACTO",
        nav_resume: "CV",
        hero_insert: "INSERTA MONEDA PARA CONTINUAR",
        hero_title_pre: "INGENIERO DE IA QUE ENVÍA —",
        hero_title_highlight: "SISTEMAS REALES",
        hero_title_post: "A USUARIOS REALES.",
        hero_desc: "Construyo apps de IA en producción, herramientas de visión e infraestructura de agentes — de copilots de clases a IoT de ciudad inteligente. Busco pasantías SWE, IA y Forward Deployed Engineer.",
        btn_view_work: "▶ VER TRABAJO",
        btn_contact: "CONTACTO",
        status_player: "JUGADOR",
        status_player_val: "EN LÍNEA",
        status_mode: "MODO",
        status_mode_val: "SWE_IA_FDE",
        status_map: "MAPA",
        status_map_val: "MIAMI_FL",
        status_class: "CLASE",
        status_class_val: "AI_ENGINEER",
        section_about_label: "SOBRE.MI",
        about_desc_1: "Soy ingeniero de IA en Miami. Obtuve el A.S. en Ciencias de la Computación en Miami Dade College (GPA 4.00, ene–dic 2024) y continúo el B.S. en CS en Florida International University (GPA 3.76, esperado abr 2028). Envío sistemas en producción que mezclan full-stack con LLMs, visión e IoT.",
        about_desc_2: "Soy bilingüe (inglés/español) con portugués, y busco pasantías en Ingeniería de Software, IA/ML y Forward Deployed Engineer. Trabajo reciente: ProfSummarizer, PlateSpotter, infra open source de agentes (nous-core / OpenRouter) y un kiosco de ciudad inteligente con IA en Raspberry Pi para Coral Gables.",
        section_github: "ACTIVIDAD_GITHUB",
        section_projects_label: "CARGAR_PROYECTOS.DAT",
        filter_featured: "DESTACADOS",
        filter_all: "TODOS",
        filter_personal: "PERSONALES",
        filter_school: "ESCUELA",
        link_demo: "▶ VER DEMO",
        link_code: "VER CÓDIGO",
        link_details: "DETALLES ▶",
        section_exp_coral_label: "NIVEL_01: CITY_OF_CORAL_GABLES",
        section_exp_label: "NIVEL_02: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "NIVEL_03: BUO",
        job_title_coral: "PASANTE DE INGENIERÍA DE SOFTWARE",
        job_period_coral: "MAY — JUN 2026",
        job_coral_desc_1: "▸ Diseñé un POC de kiosco de ciudad inteligente con IA en Raspberry Pi 5 en 3 semanas — instalación IoT interactiva funcional.",
        job_coral_desc_2: "▸ Programé un frontend Pygame con estados para el ciclo de vida del avatar de IA, disparando videos Gemini Veo (Idle, Listening, Speaking) en tiempo real.",
        job_title_stride: "INGENIERO DE SOFTWARE",
        job_period_stride: "DIC 2025 — MAY 2026",
        job_stride_summary: "Único ingeniero de un panel de ops de 6 módulos (reservas, contracargos, precios) integrando dos APIs de alquiler en Supabase Postgres — usado a diario para gestionar 1,200+ vehículos y ~5,000 reservas/mes en una empresa de 100 personas.",
        job_stride_desc_2: "▸ Reduje el tiempo de respuesta de contracargos en un 90%, de 30 minutos a menos de 3.",
        job_stride_desc_3: "▸ Di al equipo acceso a datos de flota y reservas en vivo por primera vez.",
        job_stride_desc_4: "▸ Único ingeniero de reservas, precios y contracargos — del requisito a producción.",
        job_title_buo: "PASANTE DE INGENIERÍA DE SOFTWARE",
        job_period_buo: "ENE 2026 — ABR 2026",
        job_buo_desc_1: "▸ Construí el pipeline de datos de comedores que impulsa la app iOS de Buo (en el App Store).",
        job_buo_desc_2: "▸ Diseñé tablas de BD e integré Mistral AI para normalizar datos de menús.",
        stat_faster_response: "RESPUESTA DE CONTRACARGO MÁS RÁPIDA",
        stat_reservations_month: "RESERVAS / MES",
        stat_vehicles_managed: "VEHÍCULOS GESTIONADOS",
        stat_saved_week: "AHORRADAS / SEMANA",
        section_skills_label: "INVENTARIO.SYS",
        section_edu_label: "LOGROS_DESBLOQUEADOS",
        edu_school_short: "FIU — B.S. CS",
        edu_details: "Esperado Abr 2028 · GPA 3.76/4.00",
        edu_coursework: "Estructuras de Datos y Algoritmos · POO · Bases de Datos · Ingeniería de Software · Redes · SO",
        edu_clubs: "Clubes: INIT · Google Developer Group · AAVE · CASHI",
        edu_mdc_school: "MDC — A.S. CIENCIAS DE LA COMPUTACIÓN",
        edu_mdc_details: "Ene — Dic 2024 · GPA 4.00/4.00",
        edu_mdc_desc: "Associate of Science en Ciencias de la Computación en Miami Dade College — base en programación, algoritmos y sistemas antes de transferir a FIU.",
        edu_platzi: "🏆 20+ CERTS PLATZI ↗",
        section_contact_label: "ENVIAR_MENSAJE.EXE",
        contact_desc: "Busco activamente pasantías en Ingeniería de Software, IA y Forward Deployed Engineer. Hablemos de cómo puedo aportar a su equipo.",
        contact_name: "Tu Nombre",
        contact_email: "Tu Correo",
        contact_message: "Tu Mensaje",
        contact_or_email: "O escríbeme directamente:",
        btn_send: "▶ ENVIAR MENSAJE",
        footer_text: "&copy; 2026 Paul Piotrowski. INSERTA MONEDA PARA REPETIR."
    },
    pt: {
        nav_home: "INÍCIO",
        nav_about: "SOBRE",
        nav_work: "TRABALHO",
        nav_exp: "EXP",
        nav_skills: "SKILLS",
        nav_edu: "EDU",
        nav_contact_short: "CONTATO",
        nav_resume: "CV",
        hero_insert: "INSIRA MOEDA PARA CONTINUAR",
        hero_title_pre: "ENGENHEIRO DE IA QUE ENVIA —",
        hero_title_highlight: "SISTEMAS REAIS",
        hero_title_post: "PARA USUÁRIOS REAIS.",
        hero_desc: "Construo apps de IA em produção, ferramentas de visão e infra de agentes — de copilots de aula a IoT de cidade inteligente. Busco estágios SWE, IA e Forward Deployed Engineer.",
        btn_view_work: "▶ VER TRABALHO",
        btn_contact: "CONTATO",
        status_player: "JOGADOR",
        status_player_val: "ONLINE",
        status_mode: "MODO",
        status_mode_val: "SWE_IA_FDE",
        status_map: "MAPA",
        status_map_val: "MIAMI_FL",
        status_class: "CLASSE",
        status_class_val: "AI_ENGINEER",
        section_about_label: "SOBRE.MIM",
        about_desc_1: "Sou engenheiro de IA em Miami. Concluí o A.S. em Ciência da Computação no Miami Dade College (GPA 4.00, jan–dez 2024) e continuo o B.S. em CS na Florida International University (GPA 3.76, previsto abr 2028). Entrego sistemas em produção que misturam full-stack com LLMs, visão e IoT.",
        about_desc_2: "Sou bilíngue (inglês/espanhol) com português, e busco estágios em Engenharia de Software, IA/ML e Forward Deployed Engineer. Trabalho recente: ProfSummarizer, PlateSpotter, infra open source de agentes (nous-core / OpenRouter) e um quiosque de cidade inteligente com IA em Raspberry Pi para Coral Gables.",
        section_github: "ATIVIDADE_GITHUB",
        section_projects_label: "CARREGAR_PROJETOS.DAT",
        filter_featured: "DESTAQUE",
        filter_all: "TODOS",
        filter_personal: "PESSOAIS",
        filter_school: "ESCOLA",
        link_demo: "▶ VER DEMO",
        link_code: "VER CÓDIGO",
        link_details: "DETALHES ▶",
        section_exp_coral_label: "FASE_01: CITY_OF_CORAL_GABLES",
        section_exp_label: "FASE_02: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "FASE_03: BUO",
        job_title_coral: "ESTAGIÁRIO DE ENGENHARIA DE SOFTWARE",
        job_period_coral: "MAI — JUN 2026",
        job_coral_desc_1: "▸ Engenhei um POC de quiosque de cidade inteligente com IA em Raspberry Pi 5 em 3 semanas — instalação IoT interativa funcional.",
        job_coral_desc_2: "▸ Programei um frontend Pygame com estados para o ciclo de vida do avatar de IA, disparando vídeos Gemini Veo (Idle, Listening, Speaking) em tempo real.",
        job_title_stride: "ENGENHEIRO DE SOFTWARE",
        job_period_stride: "DEZ 2025 — MAI 2026",
        job_stride_summary: "Único engenheiro de um painel de ops com 6 módulos (reservas, estornos, preços) integrando duas APIs de aluguel no Supabase Postgres — usado diariamente para gerenciar 1.200+ veículos e ~5.000 reservas/mês em uma empresa de 100 pessoas.",
        job_stride_desc_2: "▸ Reduzi o tempo de resposta a estornos em 90%, de 30 minutos para menos de 3.",
        job_stride_desc_3: "▸ Dei à equipe acesso a dados de frota e reservas ao vivo pela primeira vez.",
        job_stride_desc_4: "▸ Único engenheiro de reservas, preços e estornos — do requisito à produção.",
        job_title_buo: "ESTAGIÁRIO DE ENGENHARIA DE SOFTWARE",
        job_period_buo: "JAN 2026 — ABR 2026",
        job_buo_desc_1: "▸ Construí o pipeline de dados de refeitórios que alimenta o app iOS da Buo (na App Store).",
        job_buo_desc_2: "▸ Projetei tabelas de BD e integrei Mistral AI para normalizar dados de menus.",
        stat_faster_response: "RESPOSTA A ESTORNO MAIS RÁPIDA",
        stat_reservations_month: "RESERVAS / MÊS",
        stat_vehicles_managed: "VEÍCULOS GERENCIADOS",
        stat_saved_week: "ECONOMIZADAS / SEMANA",
        section_skills_label: "INVENTARIO.SYS",
        section_edu_label: "CONQUISTAS_DESBLOQUEADAS",
        edu_school_short: "FIU — B.S. CS",
        edu_details: "Previsto Abr 2028 · GPA 3.76/4.00",
        edu_coursework: "Estruturas de Dados e Algoritmos · POO · Bancos de Dados · Engenharia de Software · Redes · SO",
        edu_clubs: "Clubes: INIT · Google Developer Group · AAVE · CASHI",
        edu_mdc_school: "MDC — A.S. CIÊNCIA DA COMPUTAÇÃO",
        edu_mdc_details: "Jan — Dez 2024 · GPA 4.00/4.00",
        edu_mdc_desc: "Associate of Science em Ciência da Computação no Miami Dade College — base em programação, algoritmos e sistemas antes da transferência para a FIU.",
        edu_platzi: "🏆 20+ CERTS PLATZI ↗",
        section_contact_label: "ENVIAR_MENSAGEM.EXE",
        contact_desc: "Estou buscando ativamente estágios em Engenharia de Software, IA e Forward Deployed Engineer. Vamos conversar sobre como posso entregar com o seu time.",
        contact_name: "Seu Nome",
        contact_email: "Seu E-mail",
        contact_message: "Sua Mensagem",
        contact_or_email: "Ou me envie um e-mail:",
        btn_send: "▶ ENVIAR MENSAGEM",
        footer_text: "&copy; 2026 Paul Piotrowski. INSIRA MOEDA PARA REJOGAR."
    }
};

let currentLang = 'en';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    updateLanguage();
    setupEventListeners();
    initScrollAnimations();
    initStaggerAnimations();
    initBackToTop();
    initContactForm();
    initScrollProgress();
    initActiveNav();
});

function setupEventListeners() {
    document.getElementById('lang-selector').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateLanguage();
        renderProjects();
    });

    document.querySelectorAll('.project-filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            renderProjects();
        });
    });

    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }
}

function getFilteredProjects() {
    return projects.filter(p => {
        if (currentCategory === 'all') return true;
        if (currentCategory === 'featured') return p.featured === true;
        return p.category === currentCategory;
    });
}

function thumbHtml(project, heightPx) {
    const label = (project.title[currentLang] || project.title.en || '').toUpperCase();
    const fallback = `<span style="opacity:0.45;">[ ${label} ]</span>`;
    if (project.image) {
        return `<div class="thumb" style="height:${heightPx}px;">
            <img src="${project.image}" alt="${label}" loading="lazy"
                onerror="this.style.display='none';this.parentElement.innerHTML='${fallback.replace(/'/g, "\\'")}';" />
        </div>`;
    }
    return `<div class="thumb" style="height:${heightPx}px;">${fallback}</div>`;
}

function tagsHtml(tags, compact) {
    const cls = compact ? 'tag-chip' : 'tag-chip';
    const style = compact ? 'font-size:13px;padding:3px 8px;' : '';
    return tags.map(t => `<span class="${cls}" style="${style}">${t}</span>`).join('');
}

function linksHtml(project, featured) {
    const t = translations[currentLang];
    return project.links.map((link, i) => {
        const sep = i > 0 ? '<span style="color:#4a4a63;margin:0 8px;">·</span>' : '';
        const label = link.kind === 'demo' ? t.link_demo
            : (featured ? t.link_code : t.link_details);
        return `${sep}<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color:#ffe600;font-size:${featured ? 16 : 15}px;">${label}</a>`;
    }).join('');
}

function renderFeaturedCard(project) {
    const t = translations[currentLang];
    return `
        <div class="arcade-border-lg bg-arcade-panel overflow-hidden stagger-item">
            ${thumbHtml(project, 340)}
            <div class="p-6 md:p-8">
                <div class="flex justify-between items-start gap-4 flex-wrap">
                    <h3 class="font-pixel text-[14px] md:text-[16px] text-white m-0 leading-relaxed">
                        ${project.title[currentLang] || project.title.en}
                    </h3>
                    <span class="text-arcade-muted text-[15px] shrink-0">${project.year}</span>
                </div>
                <p class="text-arcade-soft text-[17px] leading-[1.55] mt-4 mb-5 max-w-[720px]">
                    ${project.description[currentLang] || project.description.en}
                </p>
                <div class="flex flex-wrap gap-2 mb-5">
                    ${tagsHtml(project.tags, false)}
                </div>
                <div>${linksHtml(project, true)}</div>
            </div>
        </div>
    `;
}

function renderGridCard(project, index) {
    return `
        <div class="arcade-border bg-arcade-panel overflow-hidden stagger-item" style="transition-delay:${Math.min(index * 60, 360)}ms;">
            ${thumbHtml(project, 160)}
            <div class="p-4">
                <div class="flex justify-between items-start gap-2 mb-2">
                    <h3 class="font-pixel text-[11px] text-white m-0 leading-relaxed">
                        ${project.title[currentLang] || project.title.en}
                    </h3>
                    <span class="text-arcade-dim text-[13px] shrink-0">${project.year}</span>
                </div>
                <p class="text-arcade-muted text-[15px] leading-[1.45] mb-3.5" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">
                    ${project.description[currentLang] || project.description.en}
                </p>
                <div class="flex flex-wrap gap-1.5 mb-3.5">
                    ${tagsHtml(project.tags, true)}
                </div>
                <div>${linksHtml(project, false)}</div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const featuredEl = document.getElementById('featured-project');
    const container = document.getElementById('projects-container');
    if (!container) return;

    updateFilterButtons();

    const filtered = getFilteredProjects();
    const featured = filtered.find(p => p.id === 'prof-summarizer') || filtered.find(p => p.featured) || filtered[0];
    const rest = filtered.filter(p => p !== featured);

    if (featuredEl) {
        featuredEl.innerHTML = featured ? renderFeaturedCard(featured) : '';
    }

    container.innerHTML = rest.map((p, i) => renderGridCard(p, i)).join('');

    const animateRoot = featuredEl || container;
    if (isNearViewport(animateRoot)) {
        if (featuredEl) revealStaggerItems(featuredEl);
        revealStaggerItems(container);
    }
}

function updateLanguage() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!t[key]) return;
        if (key === 'footer_text') {
            element.innerHTML = t[key];
        } else {
            element.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-btn]').forEach(element => {
        const key = element.getAttribute('data-i18n-btn');
        if (t[key]) element.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) element.placeholder = t[key];
    });
}

function updateFilterButtons() {
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

function isNearViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight + 80;
}

function revealStaggerItems(root) {
    root.querySelectorAll('.stagger-item').forEach(item => item.classList.add('visible'));
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealStaggerItems(entry.target);
            }
        });
    }, { threshold: 0.08 });

    ['#featured-project', '#projects-container'].forEach(sel => {
        const el = document.querySelector(sel);
        if (el) observer.observe(el);
    });
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.style.opacity = window.scrollY > 400 ? '1' : '0';
        btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        bar.style.width = max > 0 ? `${(doc.scrollTop / max) * 100}%` : '0%';
    });
}

function initActiveNav() {
    const sections = ['hero', 'about', 'work', 'experience', 'skills', 'education', 'contact'];
    const links = document.querySelectorAll('a.nav-pill[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            links.forEach(link => {
                link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (status) status.textContent = 'Sending...';
        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            if (res.ok) {
                form.reset();
                if (status) status.textContent = 'Message sent. Thanks!';
            } else {
                if (status) status.textContent = 'Something went wrong. Try email instead.';
            }
        } catch {
            if (status) status.textContent = 'Something went wrong. Try email instead.';
        }
    });
}
