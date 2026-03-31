// Translations for the curriculum
const translations = {
    'pt-BR': {
        // Header
        'title': 'Currículo Interativo - Davi Peterlini',
        'role': 'Senior AI Engineer | Tech Lead | Master Architect at CI&T',
        'overview': 'Visão Geral',
        'career': 'Carreira',
        'skills': 'Skills',
        'education': 'Formação',
        'contact': 'Contato',
        'export_pdf': 'PDF',
        'generating_pdf': 'Gerando...',

        // Overview section
        'overview_title': 'Visão Geral',
        'overview_description': 'Engenheiro de IA Sênior especializado em infraestrutura de LLMs, sistemas multiagentes e Model Context Protocol — construindo plataformas enterprise de IA do design à produção.',
        'professional_summary': 'Infraestrutura de LLM & Multi-Agentes',
        'professional_summary_text': 'Experiência em proxy/gateway, model routing, caching, sistemas multiagentes autônomos, servidores MCP e observabilidade para IA.',
        'ai_focus': 'Integração & Segurança',
        'ai_focus_text': 'Integração de OpenAI, Anthropic, Google, AWS Bedrock com governança, rastreabilidade e segurança (OWASP LLM Top 10, JWT/OAuth2).',
        'leadership': 'Liderança Técnica',
        'leadership_text': 'Arquiteturas robustas, iniciativas de alta complexidade e ferramentas que times adotam voluntariamente.',
        'overview_stack_title': 'Stack Principal',
        'overview_skills_title': 'Competências',

        // Timeline section
        'timeline_title': 'Carreira',

        // Skills section
        'skills_title': 'Skills',
        'skills_description': 'Visualização das habilidades técnicas por categoria.',
        'all': 'Todas',
        'languages': 'Linguagens',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Cloud',
        'proficiency': 'Proficiência',

        // Education section
        'education_title': 'Formação',
        'bachelor': 'Engenharia de Computação',
        'university': 'Universidade São Francisco | 2009-2013',
        'highlights': 'Destaques',
        'highlight1': 'TCC premiado com bolsa de mestrado na UNICAMP — pesquisa em SDN',
        'highlight2': 'Fundador da CoP AI Engineering na CI&T (20+ membros)',
        'certification_title': 'Google Cloud Professional Cloud Architect',
        'certification_details': 'Em andamento | Previsão: 2026',

        // Contact section
        'contact_title': 'Contato',
        'link_email_label': 'E-mail',
        'link_linkedin_label': 'LinkedIn',
        'link_github_label': 'GitHub',
        'community_title': 'Comunidade',
        'community_cop': 'Fundador da CoP AI Engineering na CI&T',
        'community_mcp': 'Participante ativo do MCP Discord (Anthropic working groups)',
        'community_ai_br': 'Membro da AI Brazilian Community',

        // Footer
        'footer_year': '© 2026',

        // Job details
        'present': 'Presente'
    },
    'en-US': {
        // Header
        'title': 'Interactive Resume - Davi Peterlini',
        'role': 'Senior AI Engineer | Tech Lead | Master Architect at CI&T',
        'overview': 'Overview',
        'career': 'Career',
        'skills': 'Skills',
        'education': 'Education',
        'contact': 'Contact',
        'export_pdf': 'PDF',
        'generating_pdf': 'Generating...',

        // Overview section
        'overview_title': 'Overview',
        'overview_description': 'Senior AI Engineer specialized in LLM infrastructure, multi-agent systems, and Model Context Protocol — building enterprise AI platforms from design to production.',
        'professional_summary': 'LLM Infrastructure & Multi-Agents',
        'professional_summary_text': 'Experience in proxy/gateway, model routing, caching, autonomous multi-agent systems, MCP servers, and AI observability.',
        'ai_focus': 'Integration & Security',
        'ai_focus_text': 'Integration of OpenAI, Anthropic, Google, AWS Bedrock with governance, traceability, and security (OWASP LLM Top 10, JWT/OAuth2).',
        'leadership': 'Technical Leadership',
        'leadership_text': 'Robust architectures, high-complexity initiatives, and tools that teams adopt voluntarily.',
        'overview_stack_title': 'Main Stack',
        'overview_skills_title': 'Skills',

        // Timeline section
        'timeline_title': 'Career',

        // Skills section
        'skills_title': 'Skills',
        'skills_description': 'Technical skills visualization by category.',
        'all': 'All',
        'languages': 'Languages',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Cloud',
        'proficiency': 'Proficiency',

        // Education section
        'education_title': 'Education',
        'bachelor': 'Computer Engineering',
        'university': 'São Francisco University | 2009-2013',
        'highlights': 'Highlights',
        'highlight1': 'Awarded thesis with master\'s scholarship at UNICAMP — SDN research',
        'highlight2': 'Founder of AI Engineering CoP at CI&T (20+ members)',
        'certification_title': 'Google Cloud Professional Cloud Architect',
        'certification_details': 'In progress | Expected: 2026',

        // Contact section
        'contact_title': 'Contact',
        'link_email_label': 'Email',
        'link_linkedin_label': 'LinkedIn',
        'link_github_label': 'GitHub',
        'community_title': 'Community',
        'community_cop': 'Founder of AI Engineering CoP at CI&T',
        'community_mcp': 'Active member of MCP Discord (Anthropic working groups)',
        'community_ai_br': 'Member of AI Brazilian Community',

        // Footer
        'footer_year': '© 2026',

        // Job details
        'present': 'Present'
    }
};

// Timeline data with translations
const timelineData = {
    'pt-BR': [
        {
            company: "CI&T — Flow AI Platform",
            role: "Senior AI Engineer | Tech Lead",
            dates: "Jan 2021 - Presente",
            details: [
                "Tech Lead em iniciativas de IA, liderando desenvolvimento de plataforma enterprise para produtividade de engenharia.",
                "<strong>AI-Assisted Coding Extension:</strong> IDE extension com code completion, chat contextual, slash commands (TypeScript, Node, Python, VS Code, JetBrains).",
                "<strong>LLM Gateway:</strong> Proxy unificado para OpenAI, Anthropic, Google, AWS Bedrock com autenticação corporativa, caching, model routing, rate limiting (Python, FastAPI, LiteLLM, Redis, GCP).",
                "<strong>LLM Observability:</strong> Distributed tracing, quality metrics, cost analytics, dashboards (Langfuse, PostgreSQL, ClickHouse, Kubernetes).",
                "<strong>Multi-Agent Systems:</strong> Automação de code review, testes, documentação com orquestração sequencial/paralela (LangGraph, Python, MCP).",
                "<strong>AI Dev Environment:</strong> Ambiente containerizado com ferramentas de IA, proxies LLM, servidores MCP (Docker, Podman)."
            ]
        },
        {
            company: "Projetos Pessoais & Open Source",
            role: "AI Engineer & Full-Stack Developer",
            dates: "2020 - Presente",
            details: [
                "<strong>Qwen Code:</strong> CLI agent para terminal com multi-protocolo (OpenAI, Anthropic, Gemini), integração VS Code/Zed/JetBrains (TypeScript, Node.js).",
                "<strong>Proxy LLM:</strong> Roteamento inteligente: cloud models para queries simples, modelos locais (Ollama) para dados sensíveis, UI dashboard (Python, FastAPI, LiteLLM).",
                "<strong>Multi-Agent Automation:</strong> Automação de processos: NF, exames, faturas, monitoramento de energia com document intelligence (TypeScript, Python, Playwright, MCP).",
                "<strong>ADK Multi-Agent System:</strong> 5 agentes especialistas com workflows sequenciais/paralelos/condicionais, SSE streaming, deploy GCP (Google ADK, Gemini, Docker).",
                "<strong>Shannon (Open Source):</strong> Agente de pentest com SAST, OWASP Top 10, geração de PoCs (Python, Temporal, Anthropic Claude, AWS Bedrock).",
                "<strong>LifeTrek:</strong> Plataforma de saúde com RAG, chat médico, assinaturas (NestJS, PostgreSQL, Google Gemini, Stripe, Kubernetes).",
                "<strong>Finanza AI:</strong> Gestão financeira com Pluggy API e insights via LLM (React, Vite, Pluggy, Google Gemini)."
            ]
        },
        {
            company: "DEXTRA",
            role: "Tech Lead",
            dates: "Ago 2019 - Set 2021",
            details: [
                "Liderança técnica em microserviços para apps móveis de alta escala.",
                "APIs REST, bancos NoSQL (MongoDB, DynamoDB) e relacionais, CI/CD.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java."
            ]
        },
        {
            company: "INDRA",
            role: "Desenvolvedor",
            dates: "Mar 2017 - Jul 2019",
            details: [
                "Migração de monolito Java Desktop para Java Web com Spring MVC.",
                "Full-stack com JavaScript e React em modernização de legados.",
                "Stack: Java, Spring MVC, JavaScript, React, SQL Server."
            ]
        }
    ],
    'en-US': [
        {
            company: "CI&T — Flow AI Platform",
            role: "Senior AI Engineer | Tech Lead",
            dates: "Jan 2021 - Present",
            details: [
                "Tech Lead for AI initiatives, leading enterprise platform development for engineering productivity.",
                "<strong>AI-Assisted Coding Extension:</strong> IDE extension with code completion, contextual chat, slash commands (TypeScript, Node, Python, VS Code, JetBrains).",
                "<strong>LLM Gateway:</strong> Unified proxy for OpenAI, Anthropic, Google, AWS Bedrock with corporate auth, caching, model routing, rate limiting (Python, FastAPI, LiteLLM, Redis, GCP).",
                "<strong>LLM Observability:</strong> Distributed tracing, quality metrics, cost analytics, dashboards (Langfuse, PostgreSQL, ClickHouse, Kubernetes).",
                "<strong>Multi-Agent Systems:</strong> Automation for code review, testing, documentation with sequential/parallel orchestration (LangGraph, Python, MCP).",
                "<strong>AI Dev Environment:</strong> Containerized environment with AI tools, LLM proxies, MCP servers (Docker, Podman)."
            ]
        },
        {
            company: "Personal Projects & Open Source",
            role: "AI Engineer & Full-Stack Developer",
            dates: "2020 - Present",
            details: [
                "<strong>Qwen Code:</strong> Terminal CLI agent with multi-protocol support (OpenAI, Anthropic, Gemini), VS Code/Zed/JetBrains integration (TypeScript, Node.js).",
                "<strong>Proxy LLM:</strong> Intelligent routing: cloud models for simple queries, local models (Ollama) for sensitive data, admin UI (Python, FastAPI, LiteLLM).",
                "<strong>Multi-Agent Automation:</strong> Process automation: invoices, exams, bills, energy monitoring with document intelligence (TypeScript, Python, Playwright, MCP).",
                "<strong>ADK Multi-Agent System:</strong> 5 specialist agents with sequential/parallel/conditional workflows, SSE streaming, GCP deploy (Google ADK, Gemini, Docker).",
                "<strong>Shannon (Open Source):</strong> Pentest agent with SAST, OWASP Top 10, PoC generation (Python, Temporal, Anthropic Claude, AWS Bedrock).",
                "<strong>LifeTrek:</strong> Health platform with RAG, medical chat, subscriptions (NestJS, PostgreSQL, Google Gemini, Stripe, Kubernetes).",
                "<strong>Finanza AI:</strong> Financial management with Pluggy API and LLM insights (React, Vite, Pluggy, Google Gemini)."
            ]
        },
        {
            company: "DEXTRA",
            role: "Tech Lead",
            dates: "Aug 2019 - Sep 2021",
            details: [
                "Technical leadership in microservices for high-scale mobile applications.",
                "REST APIs, NoSQL (MongoDB, DynamoDB) and relational databases, CI/CD.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java."
            ]
        },
        {
            company: "INDRA",
            role: "Developer",
            dates: "Mar 2017 - Jul 2019",
            details: [
                "Migration from Java Desktop monolith to Java Web with Spring MVC.",
                "Full-stack development with JavaScript and React in legacy modernization.",
                "Stack: Java, Spring MVC, JavaScript, React, SQL Server."
            ]
        }
    ]
};

// Skills data with translations
const skillsData = {
    'pt-BR': {
        'Linguagens': {
            'Python': 9, 'TypeScript': 9, 'JavaScript': 8, 'SQL': 8
        },
        'AI & LLM': {
            'LLM Infrastructure': 9, 'Multi-Agent Systems': 9, 'LiteLLM': 9,
            'LangGraph': 8, 'MCP': 9, 'RAG': 8, 'Langfuse': 9, 'CrewAI': 8
        },
        'Back-End': {
            'FastAPI': 9, 'NestJS': 8, 'Node.js': 8, 'REST APIs': 9
        },
        'Cloud & DevOps': {
            'GCP': 8, 'Docker': 9, 'Kubernetes': 7, 'GitHub Actions': 8
        },
        'Banco de Dados': {
            'PostgreSQL': 9, 'Redis': 9, 'MongoDB': 8, 'ClickHouse': 8
        }
    },
    'en-US': {
        'Languages': {
            'Python': 9, 'TypeScript': 9, 'JavaScript': 8, 'SQL': 8
        },
        'AI & LLM': {
            'LLM Infrastructure': 9, 'Multi-Agent Systems': 9, 'LiteLLM': 9,
            'LangGraph': 8, 'MCP': 9, 'RAG': 8, 'Langfuse': 9, 'CrewAI': 8
        },
        'Back-End': {
            'FastAPI': 9, 'NestJS': 8, 'Node.js': 8, 'REST APIs': 9
        },
        'Cloud & DevOps': {
            'GCP': 8, 'Docker': 9, 'Kubernetes': 7, 'GitHub Actions': 8
        },
        'Databases': {
            'PostgreSQL': 9, 'Redis': 9, 'MongoDB': 8, 'ClickHouse': 8
        }
    }
};
