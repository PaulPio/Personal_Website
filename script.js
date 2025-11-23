const projects = [
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
    }
];

const translations = {
    en: {
        nav_about: "About",
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
        about_desc_1: "I am a Computer Science student at Florida International University (3.67 GPA) with a journey rooted in solving real-world business challenges. My goal has always been to get into tech, and my professional role as a Sales Supervisor has been the key to supporting my education.",
        about_desc_2: "This unique path has given me a powerful blend of skills: I not only understand how to architect a Java algorithm or a Python backend, but I also know how to lead a team and use data to drive real business results, like increasing customer satisfaction by over 80%. I thrive on building, leading, and learning.",
        section_projects: "Featured Projects",
        filter_all: "All Projects",
        filter_personal: "Personal Projects",
        filter_school: "School Assignments",
        section_experience: "Work Experience",
        job_title: "Sales Supervisor",
        job_company: "Stride Rent a Car | Sep 2022 - Present",
        job_desc_1: "Led and mentored a team of 6 sales associates, fostering a high-performance culture through data-driven coaching.",
        job_desc_2: "Spearheaded a customer feedback initiative, analyzing qualitative data to inform strategic process improvements and elevate customer satisfaction scores from 40% to 75%.",
        job_desc_3: "Designed and automated weekly performance reports using advanced Excel (Power Query, Pivot Tables) to track KPIs, reducing manual reporting time by 6 hours/week.",
        section_skills: "Core Competencies",
        skill_data: "Data Analysis & Databases",
        skill_prog: "Programming & Tools",
        skill_lead: "Leadership & Soft Skills",
        section_contact: "Let's Connect",
        contact_desc: "I'm actively seeking challenging computer science and data internships. I'd love to chat about how my skills and experience can help your team.",
        btn_touch: "Get In Touch",
        footer_text: "&copy; 2025 Paul Piotrowski. Built with HTML, Tailwind CSS, and passion."
    },
    es: {
        nav_about: "Sobre Mí",
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
        about_desc_1: "Soy estudiante de Ciencias de la Computación en la Universidad Internacional de Florida (3.67 GPA) con una trayectoria arraigada en la resolución de desafíos empresariales del mundo real. Mi objetivo siempre ha sido entrar en la tecnología, y mi rol profesional como Supervisor de Ventas ha sido clave para apoyar mi educación.",
        about_desc_2: "Este camino único me ha dado una mezcla poderosa de habilidades: no solo entiendo cómo arquitectar un algoritmo en Java o un backend en Python, sino que también sé cómo liderar un equipo y usar datos para impulsar resultados empresariales reales, como aumentar la satisfacción del cliente en más del 80%. Prospero construyendo, liderando y aprendiendo.",
        section_projects: "Proyectos Destacados",
        filter_all: "Todos los Proyectos",
        filter_personal: "Proyectos Personales",
        filter_school: "Tareas Escolares",
        section_experience: "Experiencia Laboral",
        job_title: "Supervisor de Ventas",
        job_company: "Stride Rent a Car | Sep 2022 - Presente",
        job_desc_1: "Dirigí y asesoré a un equipo de 6 asociados de ventas, fomentando una cultura de alto rendimiento a través del coaching basado en dados.",
        job_desc_2: "Encabecé una iniciativa de retroalimentación de clientes, analizando datos cualitativos para informar mejoras estratégicas de procesos y elevar los puntajes de satisfacción del cliente del 40% al 75%.",
        job_desc_3: "Diseñé y automaticé informes semanales de rendimiento utilizando Excel avanzado (Power Query, Tablas Dinámicas) para rastrear KPIs, reduciendo el tiempo de informes manuales en 6 horas/semana.",
        section_skills: "Competencias Principales",
        skill_data: "Análisis de Datos y Bases de Datos",
        skill_prog: "Programación y Herramientas",
        skill_lead: "Liderazgo y Habilidades Blandas",
        section_contact: "Conectemos",
        contact_desc: "Estoy buscando activamente pasantías desafiantes en ciencias de la computación y datos. Me encantaría charlar sobre cómo mis habilidades y experiencia pueden ayudar a su equipo.",
        btn_touch: "Ponte en Contacto",
        footer_text: "&copy; 2025 Paul Piotrowski. Construido con HTML, Tailwind CSS y pasión."
    },
    pt: {
        nav_about: "Sobre Mim",
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
        about_desc_1: "Sou estudante de Ciência da Computação na Florida International University (3.67 GPA) com uma jornada enraizada na resolução de desafios de negócios do mundo real. Meu objetivo sempre foi entrar na tecnologia, e meu papel profissional como Supervisor de Vendas foi fundamental para apoiar minha educação.",
        about_desc_2: "Esse caminho único me deu uma mistura poderosa de habilidades: não apenas entendo como arquitetar um algoritmo Java ou um backend Python, mas também sei como liderar uma equipe e usar dados para impulsionar resultados reais de negócios, como aumentar a satisfação do cliente em mais de 80%. Eu prospero construindo, liderando e aprendendo.",
        section_projects: "Projetos em Destaque",
        filter_all: "Todos os Projetos",
        filter_personal: "Projetos Pessoais",
        filter_school: "Trabalhos Escolares",
        section_experience: "Experiência Profissional",
        job_title: "Supervisor de Vendas",
        job_company: "Stride Rent a Car | Set 2022 - Presente",
        job_desc_1: "Liderei e orientei uma equipe de 6 associados de vendas, promovendo uma cultura de alto desempenho através de coaching baseado em dados.",
        job_desc_2: "Liderei uma iniciativa de feedback do cliente, analisando dados qualitativos para informar melhorias estratégicas de processos e elevar as pontuações de satisfação do cliente de 40% para 75%.",
        job_desc_3: "Projetei e automatizei relatórios semanais de desempenho usando Excel avançado (Power Query, Tabelas Dinâmicas) para rastrear KPIs, reduzindo o tempo de relatório manual em 6 horas/semana.",
        section_skills: "Principais Competências",
        skill_data: "Análise de Dados e Bancos de Dados",
        skill_prog: "Programação e Ferramentas",
        skill_lead: "Liderança e Soft Skills",
        section_contact: "Vamos Conectar",
        contact_desc: "Estou buscando ativamente estágios desafiadores em ciência da computação e dados. Adoraria conversar sobre como minhas habilidades e experiência podem ajudar sua equipe.",
        btn_touch: "Entre em Contato",
        footer_text: "&copy; 2025 Paul Piotrowski. Construído com HTML, Tailwind CSS e paixão."
    }
};

let currentLang = 'en';
let currentCategory = 'featured'; // Changed from 'all' to 'featured'

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
});

function setupEventListeners() {
    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if(themeToggleBtn){
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
    if(langSelector){
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateLanguage();
            renderProjects(); // Re-render projects to update text
        });
    }

    // Category Filters (Desktop Dropdown)
    document.querySelectorAll('.project-filter').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = e.target.dataset.category;
            renderProjects();
            // Smooth scroll to projects section to ensure user sees the content
            const projectsSection = document.getElementById('projects');
            if(projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    const filteredProjects = projects.filter(p => {
        if (currentCategory === 'featured') return p.featured === true;
        if (currentCategory === 'all') return true;
        return p.category === currentCategory;
    });

    filteredProjects.forEach(project => {
        const title = project.title[currentLang];
        const description = project.description[currentLang];

        const card = document.createElement('div');
        card.className = "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full";

        // Tags HTML
        const tagsHtml = project.tags.map(tag =>
            `<span class="text-xs font-semibold px-3 py-1 rounded-full ${tag.color}">${tag.name}</span>`
        ).join('');

        // Links HTML
        const linksHtml = project.links.map(link =>
            `<a href="${link.url}" target="_blank" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline mr-4">${link.text} &rarr;</a>`
        ).join('');

        card.innerHTML = `
            <div class="p-6 flex flex-col h-full">
                <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">${title}</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-grow">
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
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Preserve HTML for footer
            if(key === 'footer_text') {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    // Update placeholders if any
}
