// Translations for the curriculum
const translations = {
    'pt-BR': {
        // Header
        'title': 'Currículo Interativo - Davi Peterlini',
        'role': 'Arquiteto de Software Master | Tech Lead',
        'overview': 'Visão Geral',
        'career': 'Carreira',
        'skills': 'Competências',
        'education': 'Formação',
        'export_pdf': 'Exportar PDF',
        'generating_pdf': 'Gerando PDF...',
        
        // Overview section
        'overview_title': 'Visão Geral',
        'overview_description': 'Esta seção apresenta um resumo das minhas qualificações e áreas de foco. Aqui você encontrará uma síntese da minha experiência em liderança, arquitetura de software e inovações com Inteligência Artificial, demonstrando minha capacidade de otimizar processos e impactar positivamente o negócio.',
        'professional_summary': 'Resumo Profissional',
        'professional_summary_text': 'Arquiteto de Software Master e Tech Lead com sólida experiência em liderança de equipes, arquitetura de sistemas, desenvolvimento back-end e inovações com Inteligência Artificial.',
        'ai_focus': 'Foco em IA',
        'ai_focus_text': 'Liderança em projetos com abordagem "AI First", integrando IA em agentes conversacionais e otimizando processos com IA Generativa e prompt engineering.',
        'leadership': 'Liderança e Metodologia',
        'leadership_text': 'Habilidade comprovada em reestruturação de software, aplicando metodologias ágeis (Scrum, Kanban) e colaborativas para impulsionar a eficiência.',
        
        // Timeline section
        'timeline_title': 'Linha do Tempo da Carreira',
        'timeline_description': 'Explore minha trajetória profissional de forma interativa. Cada item representa uma etapa importante da minha carreira. Clique em cada cargo para expandir e ver mais detalhes sobre as responsabilidades, projetos e tecnologias envolvidas.',
        
        // Skills section
        'skills_title': 'Painel de Competências',
        'skills_description': 'Esta é uma visualização interativa das minhas habilidades técnicas. O gráfico de radar abaixo mostra um panorama geral das minhas competências. Use os botões de filtro para focar em áreas específicas, como linguagens de programação, back-end, front-end ou ferramentas de DevOps, e veja como o gráfico se atualiza dinamicamente.',
        'all': 'Todas',
        'languages': 'Linguagens',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Ferramentas',
        'proficiency': 'Nível de Proficiência (Estimado)',
        
        // Education section
        'education_title': 'Formação e Destaques',
        'education_description': 'Aqui estão minhas qualificações acadêmicas e reconhecimentos profissionais. Esta seção destaca a base educacional que sustenta minha carreira e alguns dos marcos importantes que obtive ao longo do caminho.',
        'bachelor': 'Bacharelado em Engenharia de Computação',
        'university': 'Universidade São Francisco | 2009 - 2013',
        'masters': 'Mestrado (Não Concluído)',
        'masters_details': 'UNICAMP - Software Define Network | 2014',
        'highlights': 'Destaques Profissionais',
        'highlight1': 'Trabalho de conclusão de curso de Engenharia premiado com bolsa de mestrado na Unicamp.',
        'highlight2': 'Experiência acadêmica com desenvolvimento de software para projeto open source em Redes Definidas por Software (SDN).',
        
        // Footer
        'footer_year': 'Currículo Interativo gerado em 2024',
        
        // Job details
        'present': 'Presente'
    },
    'en-US': {
        // Header
        'title': 'Interactive Resume - Davi Peterlini',
        'role': 'Master Software Architect | Tech Lead',
        'overview': 'Overview',
        'career': 'Career',
        'skills': 'Skills',
        'education': 'Education',
        'export_pdf': 'Export PDF',
        'generating_pdf': 'Generating PDF...',
        
        // Overview section
        'overview_title': 'Overview',
        'overview_description': 'This section presents a summary of my qualifications and focus areas. Here you will find a synthesis of my experience in leadership, software architecture, and innovations with Artificial Intelligence, demonstrating my ability to optimize processes and positively impact business.',
        'professional_summary': 'Professional Summary',
        'professional_summary_text': 'Master Software Architect and Tech Lead with solid experience in team leadership, systems architecture, back-end development, and innovations with Artificial Intelligence.',
        'ai_focus': 'AI Focus',
        'ai_focus_text': 'Leadership in projects with an "AI First" approach, integrating AI in conversational agents and optimizing processes with Generative AI and prompt engineering.',
        'leadership': 'Leadership and Methodology',
        'leadership_text': 'Proven ability in software restructuring, applying agile methodologies (Scrum, Kanban) and collaborative approaches to boost efficiency.',
        
        // Timeline section
        'timeline_title': 'Career Timeline',
        'timeline_description': 'Explore my professional journey interactively. Each item represents an important stage in my career. Click on each position to expand and see more details about the responsibilities, projects, and technologies involved.',
        
        // Skills section
        'skills_title': 'Skills Dashboard',
        'skills_description': 'This is an interactive visualization of my technical skills. The radar chart below shows an overview of my competencies. Use the filter buttons to focus on specific areas such as programming languages, back-end, front-end, or DevOps tools, and see how the chart updates dynamically.',
        'all': 'All',
        'languages': 'Languages',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Tools',
        'proficiency': 'Proficiency Level (Estimated)',
        
        // Education section
        'education_title': 'Education and Highlights',
        'education_description': 'Here are my academic qualifications and professional recognitions. This section highlights the educational foundation that supports my career and some of the important milestones I have achieved along the way.',
        'bachelor': 'Bachelor\'s Degree in Computer Engineering',
        'university': 'São Francisco University | 2009 - 2013',
        'masters': 'Master\'s Degree (Not Completed)',
        'masters_details': 'UNICAMP - Software Define Network | 2014',
        'highlights': 'Professional Highlights',
        'highlight1': 'Engineering final project awarded with a master\'s scholarship at Unicamp.',
        'highlight2': 'Academic experience with software development for an open source project in Software Defined Networks (SDN).',
        
        // Footer
        'footer_year': 'Interactive Resume generated in 2024',
        
        // Job details
        'present': 'Present'
    }
};

// Timeline data with translations
const timelineData = {
    'pt-BR': [
        {
            company: "CI&T",
            role: "Arquiteto de Software Master | Tech Lead",
            dates: "Janeiro 2024 - Presente",
            details: [
                "Atuei como Tech Lead no projeto do Flow, liderando a equipe responsável por demandas de Inteligência Artificial.",
                "Foco em engenharia de IA, incluindo a criação e otimização de prompts e definição de contexto para modelos, melhorando a performance dos agentes conversacionais.",
                "Contribuí para a abordagem 'AI First', integrando soluções de IA de forma abrangente nas operações da empresa.",
                "Elevei a eficiência dos chats conversacionais, resultando em uma experiência mais personalizada e eficaz para os clientes.",
                "Ampliei meu conhecimento em IA e desenvolvimento de software, reforçando a habilidade de liderança e implementação de soluções inovadoras."
            ]
        },
        {
            company: "CI&T",
            role: "Arquiteto de Software",
            dates: "Outubro 2021 - Janeiro 2024",
            details: [
                "Liderança de equipes e reestruturação da arquitetura e qualidade de software no projeto mobile da Claro (Minha Claro Residencial e Wifi Mesh).",
                "Foco na construção de uma plataforma de vendas online (Marketplace) no projeto Picpay, liderando o time de plataforma para construir e habilitar Values Streams.",
                "Definição e monitoramento de KPIs para governança de Eficiência Digital, impulsionando a otimização de processos e tomada de decisões baseada em dados.",
                "Atuei com IA Generativa e prompt engineering para otimizar processos e criar aceleradores de negócio."
            ]
        },
        {
            company: "DEXTRA",
            role: "Líder Técnico",
            dates: "Agosto 2019 - Setembro 2021",
            details: [
                "Atuei no desenvolvimento e reestruturação de novas funcionalidades back-end para aplicativos móveis, utilizando Java/Kotlin.",
                "Stack principal: AWS, Docker, Jenkins, Gitlab, Spring Boot, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Desenvolvedor",
            dates: "Março 2017 - Julho 2019",
            details: [
                "Migração de arquitetura de projeto Java Desktop (Monolito) para Java WEB.",
                "Contribuí como desenvolvedor FullStack (JS, React) em momentos pontuais."
            ]
        }
    ],
    'en-US': [
        {
            company: "CI&T",
            role: "Master Software Architect | Tech Lead",
            dates: "January 2024 - Present",
            details: [
                "Acted as Tech Lead on the Flow project, leading the team responsible for Artificial Intelligence demands.",
                "Focus on AI engineering, including prompt creation and optimization and context definition for models, improving the performance of conversational agents.",
                "Contributed to the 'AI First' approach, integrating AI solutions comprehensively into company operations.",
                "Elevated the efficiency of conversational chats, resulting in a more personalized and effective experience for customers.",
                "Expanded my knowledge in AI and software development, reinforcing leadership skills and implementation of innovative solutions."
            ]
        },
        {
            company: "CI&T",
            role: "Software Architect",
            dates: "October 2021 - January 2024",
            details: [
                "Team leadership and restructuring of architecture and software quality in Claro's mobile project (Minha Claro Residencial and Wifi Mesh).",
                "Focus on building an online sales platform (Marketplace) in the Picpay project, leading the platform team to build and enable Value Streams.",
                "Definition and monitoring of KPIs for Digital Efficiency governance, driving process optimization and data-based decision making.",
                "Worked with Generative AI and prompt engineering to optimize processes and create business accelerators."
            ]
        },
        {
            company: "DEXTRA",
            role: "Technical Leader",
            dates: "August 2019 - September 2021",
            details: [
                "Worked on the development and restructuring of new back-end features for mobile applications, using Java/Kotlin.",
                "Main stack: AWS, Docker, Jenkins, Gitlab, Spring Boot, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Developer",
            dates: "March 2017 - July 2019",
            details: [
                "Migration of Java Desktop project architecture (Monolith) to Java WEB.",
                "Contributed as a FullStack developer (JS, React) at specific moments."
            ]
        }
    ]
};

// Skills data with translations
const skillsData = {
    'pt-BR': {
        'Linguagens': { 'Kotlin': 9, 'Java': 9, 'JavaScript': 7, 'Python': 7, 'TypeScript': 7, 'SQL': 8, 'C++': 6, 'Shell Script': 7 },
        'Back-End': { 'Spring Boot': 9, 'NodeJS': 6, 'Hibernate': 8, 'Microservices': 8, 'REST APIs': 9 },
        'Front-End': { 'React': 7, 'HTML5': 8, 'CSS3': 7, 'jQuery': 6, 'Bootstrap': 7 },
        'DevOps & Ferramentas': { 'Docker': 8, 'AWS': 7, 'Kubernetes': 5, 'Git': 9, 'Jenkins': 8, 'Jira': 9 },
    },
    'en-US': {
        'Languages': { 'Kotlin': 9, 'Java': 9, 'JavaScript': 7, 'Python': 7, 'TypeScript': 7, 'SQL': 8, 'C++': 6, 'Shell Script': 7 },
        'Back-End': { 'Spring Boot': 9, 'NodeJS': 6, 'Hibernate': 8, 'Microservices': 8, 'REST APIs': 9 },
        'Front-End': { 'React': 7, 'HTML5': 8, 'CSS3': 7, 'jQuery': 6, 'Bootstrap': 7 },
        'DevOps & Tools': { 'Docker': 8, 'AWS': 7, 'Kubernetes': 5, 'Git': 9, 'Jenkins': 8, 'Jira': 9 },
    }
};