// Translations for the curriculum
// AUTO-GENERATED — edite curriculo-davi-peterlini.md e rode: node scripts/md-to-web.js
const translations = {
    'pt-BR': {
        // Header
        'title': "Currículo Interativo - Davi Peterlini",
        'role': "AI Platform Architect | LLMOps | Agentic AI | Developer Experience",
        'overview': 'Visão Geral',
        'career': 'Carreira',
        'skills': 'Skills',
        'education': 'Formação',
        'contact': 'Contato',
        'export_pdf': 'PDF',
        'generating_pdf': 'Gerando...',

        // Overview section
        'overview_title': 'Visão Geral',
        'overview_description': "Arquiteto especializado na construção de plataformas de IA de produção — da camada de infraestrutura de LLMs à experiência do desenvolvedor. Projetei e implementei toda a espinha dorsal de IA da CI&T: AI Gateway multi-cloud (15+ modelos, 6 providers), pipeline de LLMOps com observabilidade end-to-end (OpenTelemetry → LangFuse), e ecossistema completo de AI coding assistants.",
        'professional_summary': "AI Platform Engineering",
        'professional_summary_text': "LLM Gateway multi-provider com model auto-selection, tenant governance, rate limiting, caching de tokens e resiliência em produção. Suporte a OpenAI, Azure, Bedrock, Gemini, Mistral, DeepSeek, Grok.",
        'ai_focus': "LLMOps & AI Observability",
        'ai_focus_text': "Pipeline OTEL end-to-end com 8 serviços event-driven (Azure EventHub). LangFuse multi-tenant forkado, traces automáticos de sessões de agentes, ClickHouse analytics e instaladores cross-platform.",
        'leadership': "Agentic AI & Developer Experience",
        'leadership_text': "MCP servers, multi-agent orchestration (Agno, CrewAI), Flow Coder completo (extensão IDE + CLI + marketplace de plugins) e estratégia de plataforma composável para 6k+ devs.",
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
        'bachelor': "Engenharia de Computação",
        'university': "Universidade São Francisco | 2009-2013",
        'highlights': 'Destaques',
        'highlight1': "TCC premiado com bolsa de mestrado na UNICAMP — pesquisa em SDN",
        'highlight2': "Fundador da CoP AI Engineering na CI&T (20+ membros)",
        'certification_title': "Google Cloud Professional Cloud Architect",
        'certification_details': "Em andamento | Previsão: 2026",

        // Contact section
        'contact_title': 'Contato',
        'link_email_label': 'E-mail',
        'link_linkedin_label': 'LinkedIn',
        'link_github_label': 'GitHub',
        'community_title': 'Comunidade',
        'community_cop': "Fundador da CoP AI Engineering na CI&T",
        'community_mcp': "Participante ativo do MCP Discord (Anthropic working groups)",
        'community_ai_br': "Membro da AI Brazilian Community",

        // Footer
        'footer_year': "© 2026",

        // Job details
        'present': 'Presente'
    },
    'en-US': {
        // Header
        'title': "Interactive Resume - Davi Peterlini",
        'role': "AI Platform Architect | LLMOps | Agentic AI | Developer Experience",
        'overview': 'Overview',
        'career': 'Career',
        'skills': 'Skills',
        'education': 'Education',
        'contact': 'Contact',
        'export_pdf': 'PDF',
        'generating_pdf': 'Generating...',

        // Overview section
        'overview_title': 'Overview',
        'overview_description': "Architect specialized in building production AI platforms — from LLM infrastructure to developer experience. Designed and implemented CI&T's entire AI backbone: multi-cloud AI Gateway (15+ models, 6 providers), LLMOps pipeline with end-to-end observability (OpenTelemetry → LangFuse), and a full AI coding assistant ecosystem.",
        'professional_summary': "AI Platform Engineering",
        'professional_summary_text': "Multi-provider LLM Gateway with model auto-selection, tenant governance, rate limiting, token caching and production resilience. Supports OpenAI, Azure, Bedrock, Gemini, Mistral, DeepSeek, Grok.",
        'ai_focus': "LLMOps & AI Observability",
        'ai_focus_text': "End-to-end OTEL pipeline with 8 event-driven services (Azure EventHub). Multi-tenant forked LangFuse, automatic agent session traces, ClickHouse analytics and cross-platform installers.",
        'leadership': "Agentic AI & Developer Experience",
        'leadership_text': "MCP servers, multi-agent orchestration (Agno, CrewAI), full Flow Coder product (IDE extension + CLI + plugin marketplace) and composable platform strategy for 6k+ devs.",
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
        'bachelor': "Computer Engineering",
        'university': "São Francisco University | 2009-2013",
        'highlights': 'Highlights',
        'highlight1': "Awarded thesis with master's scholarship at UNICAMP — SDN research",
        'highlight2': "Founder of AI Engineering CoP at CI&T (20+ members)",
        'certification_title': "Google Cloud Professional Cloud Architect",
        'certification_details': "In progress | Expected: 2026",

        // Contact section
        'contact_title': 'Contact',
        'link_email_label': 'Email',
        'link_linkedin_label': 'LinkedIn',
        'link_github_label': 'GitHub',
        'community_title': 'Community',
        'community_cop': "Founder of AI Engineering CoP at CI&T",
        'community_mcp': "Active member of MCP Discord (Anthropic working groups)",
        'community_ai_br': "Member of AI Brazilian Community",

        // Footer
        'footer_year': "© 2026",

        // Job details
        'present': 'Present'
    }
};

// Timeline data with translations
const timelineData = {
    'pt-BR': [
        {
            company: "CI&T — Flow AIMS Platform",
            role: "Arquiteto Master | AI Platform Architect",
            dates: "2022 - Presente",
            details: [
                "Responsável pela arquitetura e implementação da plataforma de IA do produto Flow AIMS — plataforma de developer experience da CI&T com 6k+ devs. Lidero frentes simultâneas de infraestrutura de LLMs, observabilidade de agentes, produto de AI coding e estratégia de plataforma.",
                "<strong>AI Platform Engineering — LLM Gateway:</strong> AI Gateway NestJS (v3.87+) com model auto-selection baseado em tenant rules, suporte a 15+ modelos de 6 providers (OpenAI, Azure, Bedrock, Gemini, Mistral, DeepSeek, Grok), rate limiting, cache de tokens M2M thread-safe e gestão de segredos multi-cloud (GCP, AWS, Azure). Flow LLM Proxy Python/LiteLLM com 95% de cobertura de testes.",
                "<strong>LLMOps & AI Observability:</strong> Pipeline event-driven de 8 serviços NestJS (Azure EventHub) para métricas de adoção de AI coding. Biblioteca npm flow-ai-obs com offline buffer para captura automática de sessões Claude Code como traces no LangFuse. Fork multi-tenant do LangFuse + gateway NestJS dedicado + testes de queries ClickHouse. Instaladores cross-platform (bash/PowerShell) com obfuscação de credenciais.",
                "<strong>Agentic AI Systems & MCP:</strong> mcp-ciandt-flow — MCP server com 5+ ferramentas integradas (Jira, GitHub, Azure DevOps, Code Interpreter). Multi-Agent Factory com 10 agentes especializados e integração Claude Code. Copilot Natura em produção (FastAPI/WebSockets/GCP) — assistente de IA para força de vendas Natura com copilot-langfuse (plugin observabilidade não-invasivo). Experimentos Agno Framework e CrewAI com LLM-as-a-Judge.",
                "<strong>AI Developer Experience & Tooling:</strong> Flow Coder — suíte completa: extensão IDE (VS Code + JetBrains), framework, serviço backend FastAPI, CLI de onboarding (npm: @ciandt-flow/cli) com 10 plugins Claude Code no marketplace. Swarmbox — ambiente containerizado Docker/Podman para AI coding.",
                "<strong>AI Product Strategy:</strong> Reposicionamento do Flow de ferramenta SDLC para plataforma composável. 16 Flow Technical Standards (FTS), 44 soluções catalogadas, PRDs completos (Findr, BCP Calculator, Flow Efficiency Dashboard), ADRs por domínio, prototipagem React/Vite para validação com stakeholders."
            ]
        },
        {
            company: "CI&T — Projetos & POCs de IA",
            role: "AI Engineer",
            dates: "2023 - Presente",
            details: [
                "<strong>Taskflow:</strong> Aplicação web de gerenciamento de tarefas com IA (React 19, Vite, TailwindCSS, Gemini) — Kanban, smart task breakdown, Pomodoro timer, 51 testes.",
                "<strong>Flow Coder CLI:</strong> Coding assistant com REPL interativo, Plan Mode e Agent Mode, integração MCP, scaffold de projetos e publicação como pacote npm.",
                "<strong>Qwen Code Flow Proxy:</strong> Fork do Qwen Code CLI integrado ao Flow LLM Proxy — permite usar o CLI apontando para os modelos da plataforma Flow.",
                "<strong>Multi-Agent Factory:</strong> 10 agentes especializados (PM, Architect, Backend/Frontend Dev, QA, DevOps…) que simulam empresa digital completa com Claude Code em YOLO mode.",
                "<strong>Flow Spark:</strong> Template de microsserviços agenticos (devbox, just, SOPS, Helm, Claude Code) — scaffolding padrão para novos produtos agentic da CI&T.",
                "<strong>Code Review Graph (OSS):</strong> Contribuições ao grafo de conhecimento incremental para code review por agentes: suporte a Jupyter, Lua, Perl/XS, arrow functions, arquiteturas de modelo customizadas."
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
            company: "CI&T — Flow AIMS Platform",
            role: "Master Architect | AI Platform Architect",
            dates: "2022 - Present",
            details: [
                "Responsible for the architecture and implementation of the AI platform for Flow AIMS — CI&T's developer experience platform serving 6k+ devs. Leading simultaneous workstreams: LLM infrastructure, agent observability, AI coding product and platform strategy.",
                "<strong>AI Platform Engineering — LLM Gateway:</strong> NestJS AI Gateway (v3.87+) with tenant rules-based model auto-selection, supporting 15+ models from 6 providers (OpenAI, Azure, Bedrock, Gemini, Mistral, DeepSeek, Grok), rate limiting, thread-safe M2M token cache and multi-cloud secret management (GCP, AWS, Azure). Python/LiteLLM Flow LLM Proxy with 95% test coverage.",
                "<strong>LLMOps & AI Observability:</strong> 8-service event-driven pipeline (Azure EventHub) for AI coding adoption metrics. npm library flow-ai-obs with offline buffer for automatic capture of Claude Code sessions as LangFuse traces. Multi-tenant LangFuse fork + dedicated NestJS gateway + ClickHouse query tests. Cross-platform installers (bash/PowerShell) with credential obfuscation.",
                "<strong>Agentic AI Systems & MCP:</strong> mcp-ciandt-flow — MCP server with 5+ integrated tools (Jira, GitHub, Azure DevOps, Code Interpreter). Multi-Agent Factory with 10 specialized agents and Claude Code integration. Copilot Natura in production (FastAPI/WebSockets/GCP) — AI assistant for Natura's sales force with non-invasive observability plugin (copilot-langfuse). Agno Framework and CrewAI experiments with LLM-as-a-Judge.",
                "<strong>AI Developer Experience & Tooling:</strong> Flow Coder — full suite: IDE extension (VS Code + JetBrains), framework, FastAPI backend service, onboarding CLI (npm: @ciandt-flow/cli) with 10 Claude Code plugins in the marketplace. Swarmbox — Docker/Podman containerized environment for AI coding.",
                "<strong>AI Product Strategy:</strong> Flow repositioning from SDLC tool to composable platform. 16 Flow Technical Standards (FTS), 44 catalogued solutions, full PRDs (Findr, BCP Calculator, Flow Efficiency Dashboard), domain ADRs, React/Vite prototyping for stakeholder validation."
            ]
        },
        {
            company: "CI&T — AI Projects & POCs",
            role: "AI Engineer",
            dates: "2023 - Present",
            details: [
                "<strong>Taskflow:</strong> AI-powered task management web app (React 19, Vite, TailwindCSS, Gemini) — Kanban, smart task breakdown, Pomodoro timer, 51 tests.",
                "<strong>Flow Coder CLI:</strong> Coding assistant with interactive REPL, Plan Mode and Agent Mode, MCP integration, project scaffolding and npm package publishing.",
                "<strong>Qwen Code Flow Proxy:</strong> Fork of Qwen Code CLI integrated with Flow LLM Proxy — allows using the CLI pointing to Flow platform models.",
                "<strong>Multi-Agent Factory:</strong> 10 specialized agents (PM, Architect, Backend/Frontend Dev, QA, DevOps…) simulating a complete digital company with Claude Code in YOLO mode.",
                "<strong>Flow Spark:</strong> Agentic microservice template (devbox, just, SOPS, Helm, Claude Code) — standard scaffolding for new agentic products at CI&T.",
                "<strong>Code Review Graph (OSS):</strong> Contributions to incremental knowledge graph for agent-driven code review: Jupyter, Lua, Perl/XS, arrow functions, custom model architectures."
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
            Linguagens: {
                Python: 9,
                TypeScript: 9,
                JavaScript: 8,
                'Bash/Shell': 7
            },
            'AI & LLMOps': {
                'LLM Gateway': 10,
                LLMOps: 9,
                LangFuse: 9,
                MCP: 9,
                'Agentic AI': 9,
                LiteLLM: 9,
                'Multi-Agent': 8,
                OpenTelemetry: 8
            },
            'Back-End': {
                NestJS: 9,
                FastAPI: 8,
                'Node.js': 9,
                'REST APIs': 9
            },
            'Cloud & DevOps': {
                GCP: 8,
                Azure: 8,
                Docker: 9,
                Kubernetes: 7,
                'CI/CD': 8
            },
            'Banco de Dados': {
                MongoDB: 9,
                PostgreSQL: 8,
                Redis: 8,
                ClickHouse: 7
            }
        },
    'en-US': {
            Languages: {
                Python: 9,
                TypeScript: 9,
                JavaScript: 8,
                'Bash/Shell': 7
            },
            'AI & LLMOps': {
                'LLM Gateway': 10,
                LLMOps: 9,
                LangFuse: 9,
                MCP: 9,
                'Agentic AI': 9,
                LiteLLM: 9,
                'Multi-Agent': 8,
                OpenTelemetry: 8
            },
            'Back-End': {
                NestJS: 9,
                FastAPI: 8,
                'Node.js': 9,
                'REST APIs': 9
            },
            'Cloud & DevOps': {
                GCP: 8,
                Azure: 8,
                Docker: 9,
                Kubernetes: 7,
                'CI/CD': 8
            },
            Databases: {
                MongoDB: 9,
                PostgreSQL: 8,
                Redis: 8,
                ClickHouse: 7
            }
        }
};
