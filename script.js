const projects = [
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
            en: "A Progressive Web App for mechanics and auto repair shops to quickly log vehicle license plates and service details. Features AI-powered camera scanning with Gemini Vision, smart manual entry formatting, Google Sheets integration, and offline history.",
            es: "Una aplicación web progresiva para mecánicos y talleres de reparación de automóviles para registrar rápidamente placas de vehículos y detalles de servicio. Incluye escaneo de cámara impulsado por IA con Gemini Vision, formato inteligente de entrada manual, integración con Google Sheets e historial sin conexión.",
            pt: "Um Progressive Web App para mecânicos e oficinas de reparação de automóveis para registrar rapidamente placas de veículos e detalhes de serviço. Apresenta digitalização de câmera com IA usando Gemini Vision, formatação inteligente de entrada manual, integração com Google Sheets e histórico offline."
        },
        category: "personal",
        tags: ["React 19", "TypeScript", "Gemini Vision", "PWA", "Tailwind CSS"],
        links: [
            { text: "Live Demo", url: "https://plate-spotter.vercel.app", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/plate-spotter", kind: "code" }
        ]
    },
    {
        id: "refocus",
        featured: true,
        image: "assets/thumbs/refocus.png",
        year: "2025",
        title: {
            en: "ReFocus",
            es: "ReFocus",
            pt: "ReFocus"
        },
        description: {
            en: "AI-Powered Desktop Productivity Coach. As Intelligence Team Lead, I developed the 'brain' of the application, implementing computer vision models that analyze user engagement locally in real-time.",
            es: "Entrenador de productividad de escritorio impulsado por IA. Como Líder del Equipo de Inteligencia, desarrollé el 'cerebro' de la aplicación, implementando modelos de visión por computadora que analizan la participación del usuario localmente en tiempo real.",
            pt: "Treinador de Produtividade de Desktop com IA. Como Líder da Equipe de Inteligência, desenvolvi o 'cérebro' do aplicativo, implementando modelos de visão computacional que analisam o engajamento do usuário localmente em tempo real."
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
        id: "prof-summarizer",
        featured: true,
        image: "assets/thumbs/prof-summarizer.png",
        year: "2025",
        title: {
            en: "ProfSummarizer",
            es: "ProfSummarizer",
            pt: "ProfSummarizer"
        },
        description: {
            en: "AI-powered lecture transcription and summarization tool. Record lectures, get automatic transcriptions, and receive intelligent summaries.",
            es: "Herramienta de transcripción y resumen de conferencias impulsada por IA. Graba conferencias y recibe resúmenes inteligentes.",
            pt: "Ferramenta de transcrição e resumo de palestras com IA. Grave palestras e receba resumos inteligentes."
        },
        category: "personal",
        tags: ["TypeScript", "React", "Gemini API", "Supabase"],
        links: [
            { text: "Live Demo", url: "https://prof-summarizer.vercel.app/", kind: "demo" },
            { text: "View Code", url: "https://github.com/PaulPio/Prof-Summarizer", kind: "code" }
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
        year: "2025",
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
        hero_title_pre: "I BUILD SOFTWARE THAT SHIPS TO PROD —",
        hero_title_highlight: "100 PLAYERS",
        hero_title_post: "USE IT DAILY.",
        hero_desc: "Four years running ops for a car rental company. Now I rebuild the stack instead of fighting it — full-stack, AI-powered, shipped to real users.",
        btn_view_work: "▶ VIEW WORK",
        btn_contact: "CONTACT",
        status_player: "PLAYER",
        status_player_val: "ONLINE",
        status_mode: "MODE",
        status_mode_val: "OPEN_TO_INTERN",
        status_map: "MAP",
        status_map_val: "MIAMI_FL",
        status_class: "CLASS",
        status_class_val: "FULL_STACK",
        section_about_label: "ABOUT.ME",
        about_desc_1: "I am a Computer Science student at Florida International University (3.80 GPA) with a journey rooted in solving real-world business challenges. My goal has always been to get into tech, and my professional role as a Sales Supervisor & Technical Operations Lead has been the key to supporting my education.",
        about_desc_2: "This unique path has given me a powerful blend of skills: I not only understand how to architect a Java algorithm or a Python backend, but I also know how to lead a team and use data to drive real business results, like increasing customer satisfaction by over 80%. I thrive on building, leading, and learning.",
        section_github: "GITHUB_ACTIVITY",
        section_projects_label: "LOAD_PROJECTS.DAT",
        filter_featured: "FEATURED",
        filter_all: "ALL",
        filter_personal: "PERSONAL",
        filter_school: "SCHOOL",
        link_demo: "▶ PLAY DEMO",
        link_code: "VIEW SOURCE",
        link_details: "DETAILS ▶",
        section_exp_label: "LEVEL_01: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "LEVEL_02: BUO",
        job_title_stride: "SOFTWARE ENGINEER",
        job_period_stride: "SEP 2022 — PRESENT",
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
        edu_details: "Expected Aug 2027 · GPA 3.80/4.00",
        edu_coursework: "Data Structures & Algorithms · OOP · Database Systems · Software Engineering · Networks · OS",
        edu_platzi: "🏆 20+ PLATZI CERTS ↗",
        section_contact_label: "SEND_MESSAGE.EXE",
        contact_desc: "I'm actively seeking challenging computer science and data internships. I'd love to chat about how my skills and experience can help your team.",
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
        hero_title_pre: "CONSTRUYO SOFTWARE QUE LLEGA A PROD —",
        hero_title_highlight: "100 JUGADORES",
        hero_title_post: "LO USAN A DIARIO.",
        hero_desc: "Cuatro años operando una empresa de alquiler de autos. Ahora reconstruyo el stack en lugar de pelear contra él — full-stack, con IA, enviado a usuarios reales.",
        btn_view_work: "▶ VER TRABAJO",
        btn_contact: "CONTACTO",
        status_player: "JUGADOR",
        status_player_val: "EN LÍNEA",
        status_mode: "MODO",
        status_mode_val: "BUSCA_INTERNSHIP",
        status_map: "MAPA",
        status_map_val: "MIAMI_FL",
        status_class: "CLASE",
        status_class_val: "FULL_STACK",
        section_about_label: "SOBRE.MI",
        about_desc_1: "Soy estudiante de Ciencias de la Computación en la Universidad Internacional de Florida (3.80 GPA) con una trayectoria arraigada en la resolución de desafíos empresariales del mundo real. Mi objetivo siempre ha sido entrar en la tecnología, y mi rol profesional como Supervisor de Ventas y Líder de Operaciones Técnicas ha sido clave para apoyar mi educación.",
        about_desc_2: "Este camino único me ha dado una mezcla poderosa de habilidades: no solo entiendo cómo arquitectar un algoritmo en Java o un backend en Python, sino que también sé cómo liderar un equipo y usar datos para impulsar resultados empresariales reales, como aumentar la satisfacción del cliente en más del 80%. Prospero construyendo, liderando y aprendiendo.",
        section_github: "ACTIVIDAD_GITHUB",
        section_projects_label: "CARGAR_PROYECTOS.DAT",
        filter_featured: "DESTACADOS",
        filter_all: "TODOS",
        filter_personal: "PERSONALES",
        filter_school: "ESCUELA",
        link_demo: "▶ VER DEMO",
        link_code: "VER CÓDIGO",
        link_details: "DETALLES ▶",
        section_exp_label: "NIVEL_01: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "NIVEL_02: BUO",
        job_title_stride: "INGENIERO DE SOFTWARE",
        job_period_stride: "SEP 2022 — PRESENTE",
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
        edu_details: "Esperado Ago 2027 · GPA 3.80/4.00",
        edu_coursework: "Estructuras de Datos y Algoritmos · POO · Bases de Datos · Ingeniería de Software · Redes · SO",
        edu_platzi: "🏆 20+ CERTS PLATZI ↗",
        section_contact_label: "ENVIAR_MENSAJE.EXE",
        contact_desc: "Busco activamente pasantías desafiantes en ciencias de la computación y datos. Me encantaría charlar sobre cómo mis habilidades pueden ayudar a su equipo.",
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
        hero_title_pre: "CONSTRUO SOFTWARE QUE VAI PARA PROD —",
        hero_title_highlight: "100 JOGADORES",
        hero_title_post: "USAM TODO DIA.",
        hero_desc: "Quatro anos operando uma empresa de aluguel de carros. Agora reconstruo o stack em vez de lutar contra ele — full-stack, com IA, enviado a usuários reais.",
        btn_view_work: "▶ VER TRABALHO",
        btn_contact: "CONTATO",
        status_player: "JOGADOR",
        status_player_val: "ONLINE",
        status_mode: "MODO",
        status_mode_val: "ABERTO_A_ESTAGIO",
        status_map: "MAPA",
        status_map_val: "MIAMI_FL",
        status_class: "CLASSE",
        status_class_val: "FULL_STACK",
        section_about_label: "SOBRE.MIM",
        about_desc_1: "Sou estudante de Ciência da Computação na Florida International University (3.80 GPA) com uma jornada enraizada na resolução de desafios de negócios do mundo real. Meu objetivo sempre foi entrar na tecnologia, e meu papel profissional como Supervisor de Vendas e Líder de Operações Técnicas foi fundamental para apoiar minha educação.",
        about_desc_2: "Esse caminho único me deu uma mistura poderosa de habilidades: não apenas entendo como arquitetar um algoritmo Java ou um backend Python, mas também sei como liderar uma equipe e usar dados para impulsionar resultados reais de negócios, como aumentar a satisfação do cliente em mais de 80%. Eu prospero construindo, liderando e aprendendo.",
        section_github: "ATIVIDADE_GITHUB",
        section_projects_label: "CARREGAR_PROJETOS.DAT",
        filter_featured: "DESTAQUE",
        filter_all: "TODOS",
        filter_personal: "PESSOAIS",
        filter_school: "ESCOLA",
        link_demo: "▶ VER DEMO",
        link_code: "VER CÓDIGO",
        link_details: "DETALHES ▶",
        section_exp_label: "FASE_01: STRIDE_RENT_A_CAR",
        section_exp_buo_label: "FASE_02: BUO",
        job_title_stride: "ENGENHEIRO DE SOFTWARE",
        job_period_stride: "SET 2022 — PRESENTE",
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
        edu_details: "Previsto Ago 2027 · GPA 3.80/4.00",
        edu_coursework: "Estruturas de Dados e Algoritmos · POO · Bancos de Dados · Engenharia de Software · Redes · SO",
        edu_platzi: "🏆 20+ CERTS PLATZI ↗",
        section_contact_label: "ENVIAR_MENSAGEM.EXE",
        contact_desc: "Estou buscando ativamente estágios desafiadores em ciência da computação e dados. Adoraria conversar sobre como minhas habilidades podem ajudar sua equipe.",
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
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateLanguage();
            renderProjects();
        });
    }

    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            renderProjects();
        });
    });
}

function updateFilterButtons() {
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

function getFilteredProjects() {
    return projects.filter(p => {
        if (currentCategory === 'featured') return p.featured === true;
        if (currentCategory === 'all') return true;
        return p.category === currentCategory;
    });
}

function thumbHtml(project, heightPx) {
    const label = (project.title.en || project.id).toUpperCase();
    const fallback = `[ ${label} ]`;
    if (project.image) {
        return `<div class="thumb" style="height:${heightPx}px;">
            <img src="${project.image}" alt="${label}" loading="lazy"
                onerror="this.style.display='none';this.parentElement.textContent='${fallback.replace(/'/g, "\\'")}';" />
        </div>`;
    }
    return `<div class="thumb" style="height:${heightPx}px;">${fallback}</div>`;
}

function tagsHtml(tags, compact) {
    const cls = compact
        ? 'tag-chip'
        : 'tag-chip';
    const style = compact ? 'font-size:12px;padding:3px 8px;' : '';
    return tags.map(tag =>
        `<span class="${cls}" style="${style}">${tag}</span>`
    ).join('');
}

function linksHtml(project, featured) {
    const t = translations[currentLang];
    return project.links.map((link, i) => {
        const label = link.kind === 'demo'
            ? t.link_demo
            : (featured ? t.link_code : t.link_details);
        const sep = i > 0 ? `<span style="color:#4a4a63;margin:0 10px;">/</span>` : '';
        return `${sep}<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="color:#ffe600;font-size:${featured ? 16 : 15}px;">${label}</a>`;
    }).join('');
}

function renderFeaturedCard(project) {
    const title = project.title[currentLang];
    const description = project.description[currentLang];
    return `
        <div class="arcade-border-lg bg-arcade-panel stagger-item">
            ${thumbHtml(project, 340)}
            <div class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div class="flex justify-between items-baseline gap-3 flex-wrap">
                        <h3 class="font-pixel text-[14px] md:text-[16px] text-white m-0">${title}</h3>
                        <span class="text-[16px] text-arcade-muted">${project.year || ''}</span>
                    </div>
                    <p class="text-arcade-soft text-[17px] leading-[1.6] mt-4 mb-0">${description}</p>
                </div>
                <div>
                    <div class="flex flex-wrap gap-2 mb-5">
                        ${tagsHtml(project.tags, false)}
                    </div>
                    <div>${linksHtml(project, true)}</div>
                </div>
            </div>
        </div>
    `;
}

function renderGridCard(project, index) {
    const title = project.title[currentLang];
    const description = project.description[currentLang];
    return `
        <div class="arcade-border bg-arcade-panel stagger-item flex flex-col" style="transition-delay:${index * 0.06}s">
            ${thumbHtml(project, 160)}
            <div class="p-[18px] flex flex-col flex-grow">
                <div class="flex justify-between items-baseline gap-2">
                    <h4 class="font-pixel text-[11px] text-white m-0 leading-relaxed">${title}</h4>
                    <span class="text-[14px] text-arcade-muted shrink-0">${project.year || ''}</span>
                </div>
                <p class="text-arcade-soft text-[15px] leading-[1.5] mt-2.5 mb-3.5 flex-grow">${description}</p>
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
    const featured = filtered.find(p => p.id === 'plate-spotter') || filtered.find(p => p.featured) || filtered[0];
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
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t[key];
        } else {
            element.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-btn]').forEach(element => {
        const key = element.getAttribute('data-i18n-btn');
        if (t[key]) element.textContent = t[key];
    });
}

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
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealStaggerItems(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    ['#featured-project', '#projects-container'].forEach(sel => {
        const el = document.querySelector(sel);
        if (el) observer.observe(el);
    });
}

function revealStaggerItems(container) {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 70);
    });
}

function isNearViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
    }, { passive: true });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
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
                status.className = 'mt-4 text-[16px] text-arcade-green';
            } else {
                status.textContent = 'Something went wrong. Please try emailing me directly.';
                status.className = 'mt-4 text-[16px] text-arcade-pink';
            }
        } catch {
            status.textContent = 'Something went wrong. Please try emailing me directly.';
            status.className = 'mt-4 text-[16px] text-arcade-pink';
        }

        btn.disabled = false;
        const t = translations[currentLang];
        btn.textContent = t.btn_send || '▶ SEND MESSAGE';
    });
}
