// Translations for the curriculum
const translations = {
    'pt-BR': {
        // Header
        'title': 'Currículo Interativo - Davi Peterlini',
        'role': 'Senior AI Platform Engineer | Tech Lead',
        'overview': 'Visão Geral',
        'career': 'Carreira',
        'skills': 'Competências',
        'education': 'Formação',
        'export_pdf': 'Exportar PDF',
        'generating_pdf': 'Gerando PDF...',

        // Overview section
        'overview_title': 'Visão Geral',
        'overview_description': 'Senior AI Platform Engineer e Tech Lead na CI&T, responsável pelo ecossistema Flow — plataforma enterprise de IA para desenvolvedores. Atuo na interseção entre Engenharia de Software, Plataformas LLM e Developer Experience (DX), construindo soluções enterprise-grade com LiteLLM, MCP (Model Context Protocol), Langfuse e multi-agent systems (CrewAI, LangGraph, Google ADK). Portfólio de projetos open source publicados no NPM e GitHub.',
        'professional_summary': 'Resumo Profissional',
        'professional_summary_text': 'Senior AI Platform Engineer e Tech Lead com experiência sólida em LLM gateway/proxy (LiteLLM, 500K+ req/dia), extensões de IDE com IA (VS Code, JetBrains), servidores MCP, microserviços FastAPI com Clean/Hexagonal Architecture, observabilidade de LLMs (Langfuse, ClickHouse, 1M+ traces/dia) e multi-agent systems. Engenheiro de IA autônomo com projetos open source publicados (NPM) e portfólio de automação inteligente.',
        'ai_focus': 'Foco em IA & LLM',
        'ai_focus_text': 'LLM proxy/gateway multi-provider (OpenAI, AWS Bedrock/Claude, Google Gemini, DeepSeek, Llama 3) com token caching thread-safe (Redis, 45–55% hit-rate), model routing inteligente, OWASP LLM Top 10 compliance, distributed tracing (Langfuse/ClickHouse), MCP servers (STDIO/SSE) e orquestração multi-agent (CrewAI, LangGraph, AutoGen, Google ADK).',
        'leadership': 'Liderança & Developer Experience',
        'leadership_text': 'Tech Lead com code reviews sistemáticos, mentoria formal de engenheiros plenos e seniores, e fundador da Comunidade de Prática de AI Engineering CI&T (20+ membros). Definição de padrões com SonarQube, TDD (pytest/Vitest), CI/CD (GitHub Actions, Bitbucket Pipelines) e pre-commit hooks (flake8, black, mypy, bandit).',

        // Timeline section
        'timeline_title': 'Linha do Tempo da Carreira',
        'timeline_description': 'Explore minha trajetória profissional de forma interativa. Cada item representa uma etapa importante da minha carreira. Clique em cada cargo para expandir e ver mais detalhes sobre as responsabilidades, projetos e tecnologias envolvidas.',

        // Skills section
        'skills_title': 'Painel de Competências',
        'skills_description': 'Visualização interativa das minhas habilidades técnicas. Use os botões de filtro para focar em áreas específicas — linguagens, back-end, front-end, DevOps, IA/LLM, arquitetura ou segurança — e veja o gráfico se atualizar dinamicamente.',
        'all': 'Todas',
        'languages': 'Linguagens',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Cloud',
        'proficiency': 'Nível de Proficiência (Estimado)',

        // Education section
        'education_title': 'Formação e Destaques',
        'education_description': 'Qualificações acadêmicas e reconhecimentos profissionais que sustentam minha carreira em engenharia de software e plataformas de IA.',
        'bachelor': 'Bacharelado em Engenharia de Computação',
        'university': 'Universidade São Francisco | 2009 - 2013',
        'masters': 'Mestrado (Não Concluído)',
        'masters_details': 'UNICAMP - Software Defined Networks (SDN) | 2014',
        'highlights': 'Destaques Profissionais',
        'highlight1': 'TCC de Engenharia premiado com bolsa de mestrado na UNICAMP — pesquisa em Software Defined Networks (SDN) e redes open source.',
        'highlight2': 'Fundador da Comunidade de Prática de AI Engineering na CI&T (20+ membros), promovendo adoção de LLMs, MCP e multi-agent systems em times de engenharia.',

        // Footer
        'footer_year': 'Currículo Interativo — 2026',

        // Job details
        'present': 'Presente'
    },
    'en-US': {
        // Header
        'title': 'Interactive Resume - Davi Peterlini',
        'role': 'Senior AI Platform Engineer | Tech Lead',
        'overview': 'Overview',
        'career': 'Career',
        'skills': 'Skills',
        'education': 'Education',
        'export_pdf': 'Export PDF',
        'generating_pdf': 'Generating PDF...',

        // Overview section
        'overview_title': 'Overview',
        'overview_description': 'Senior AI Platform Engineer and Tech Lead at CI&T, responsible for the Flow ecosystem — an enterprise AI platform for developers. I work at the intersection of Software Engineering, LLM Platforms, and Developer Experience (DX), building enterprise-grade solutions with LiteLLM, MCP (Model Context Protocol), Langfuse, and multi-agent systems (CrewAI, LangGraph, Google ADK). Open source portfolio published on NPM and GitHub.',
        'professional_summary': 'Professional Summary',
        'professional_summary_text': 'Senior AI Platform Engineer and Tech Lead with solid experience in LLM gateway/proxy (LiteLLM, 500K+ req/day), AI-powered IDE extensions (VS Code, JetBrains), MCP servers, FastAPI microservices with Clean/Hexagonal Architecture, LLM observability (Langfuse, ClickHouse, 1M+ traces/day), and multi-agent systems. Autonomous AI engineer with published open source projects (NPM) and intelligent automation portfolio.',
        'ai_focus': 'AI & LLM Focus',
        'ai_focus_text': 'Multi-provider LLM proxy/gateway (OpenAI, AWS Bedrock/Claude, Google Gemini, DeepSeek, Llama 3) with thread-safe token caching (Redis, 45–55% hit-rate), intelligent model routing, OWASP LLM Top 10 compliance, distributed tracing (Langfuse/ClickHouse), MCP servers (STDIO/SSE), and multi-agent orchestration (CrewAI, LangGraph, AutoGen, Google ADK).',
        'leadership': 'Leadership & Developer Experience',
        'leadership_text': 'Tech Lead with systematic code reviews, formal mentorship of mid-level and senior engineers, and founder of the AI Engineering Community of Practice at CI&T (20+ members). Quality standards with SonarQube, TDD (pytest/Vitest), CI/CD (GitHub Actions, Bitbucket Pipelines), and pre-commit hooks (flake8, black, mypy, bandit).',

        // Timeline section
        'timeline_title': 'Career Timeline',
        'timeline_description': 'Explore my professional journey interactively. Each item represents an important stage in my career. Click on each position to expand and see more details about the responsibilities, projects, and technologies involved.',

        // Skills section
        'skills_title': 'Skills Dashboard',
        'skills_description': 'Interactive visualization of my technical skills. Use the filter buttons to focus on specific areas — languages, back-end, front-end, DevOps, AI/LLM, architecture, or security — and see the chart update dynamically.',
        'all': 'All',
        'languages': 'Languages',
        'backend': 'Back-End',
        'frontend': 'Front-End',
        'devops': 'DevOps & Cloud',
        'proficiency': 'Proficiency Level (Estimated)',

        // Education section
        'education_title': 'Education and Highlights',
        'education_description': 'Academic qualifications and professional recognitions that underpin my career in software engineering and AI platforms.',
        'bachelor': 'Bachelor\'s Degree in Computer Engineering',
        'university': 'São Francisco University | 2009 - 2013',
        'masters': 'Master\'s Degree (Not Completed)',
        'masters_details': 'UNICAMP - Software Defined Networks (SDN) | 2014',
        'highlights': 'Professional Highlights',
        'highlight1': 'Engineering thesis awarded a master\'s scholarship at UNICAMP — research in Software Defined Networks (SDN) and open source networks.',
        'highlight2': 'Founder of the AI Engineering Community of Practice at CI&T (20+ members), promoting adoption of LLMs, MCP, and multi-agent systems across engineering teams.',

        // Footer
        'footer_year': 'Interactive Resume — 2026',

        // Job details
        'present': 'Present'
    }
};

// Timeline data with translations
const timelineData = {
    'pt-BR': [
        {
            company: "CI&T — HyperX / Flow Platform",
            role: "Senior AI Platform Engineer | Tech Lead",
            dates: "Janeiro 2021 - Presente",
            details: [
                "<strong>Flow Coder — Extensão de IDE com IA (VS Code & JetBrains):</strong>",
                "• Code completion em tempo real, chat com código, slash commands e context providers com @file references",
                "• Integração com Flow LLM Proxy para acesso unificado a OpenAI, AWS Bedrock, Google Gemini e DeepSeek",
                "• Otimização de latência: primeiro token de 2s para &lt;500ms | Contexto de 128K+ tokens gerenciado",
                "• <em>Resultado:</em> 80% de adoção (500+ devs), NPS 72, –35% PR cycle time, –48% tempo de code review",
                "• Stack: TypeScript, Node.js, MCP SDK, VS Code Extension API, JetBrains Platform, Bitbucket Pipelines",
                "<strong>Flow LLM Proxy — Gateway Unificado para LLMs (LiteLLM):</strong>",
                "• Proxy modularizado baseado em LiteLLM com autenticação JWT/OAuth2 corporativa",
                "• Suporte a 100+ modelos: OpenAI GPT-4o/4.1, AWS Bedrock (Claude 3.7/4/4.5), Gemini 2.x, DeepSeek, Llama 3",
                "• Token caching thread-safe (Redis, 45–55% hit-rate), rate limiting multi-tenant, fallback automático entre providers",
                "• Métricas em tempo real com ClickHouse: uso por token/modelo/usuário, custo e latência",
                "• <em>Resultado:</em> 500K+ req/dia, 99.9% uptime, latência p95 &lt;800ms, –36% custos de LLM (~$160/dev/mês)",
                "• Stack: Python 3.10+, FastAPI, LiteLLM, Poetry, Pydantic, MongoDB (Motor), PostgreSQL, Redis, ClickHouse, GCP Cloud Run",
                "<strong>Flow Tenant Langfuse — Observabilidade de LLMs:</strong>",
                "• Fork multi-tenant customizado do Langfuse para rastreamento distribuído de traces, qualidade e custos",
                "• Quality metrics: faithfulness, relevance, toxicity, hallucination detection | Monorepo pnpm/Turbo",
                "• <em>Resultado:</em> 1M+ traces/dia armazenados, 90 dias de retenção, queries em &lt;2s",
                "• Stack: Langfuse (fork), PostgreSQL, ClickHouse, Redis, MinIO (S3-compatible), Kubernetes",
                "<strong>MCP CI&amp;T Flow — Servidor Model Context Protocol (STDIO & SSE):</strong>",
                "• 15+ tools implementadas: BCP Calculator, Code Interpreter (Docker isolation), GitHub Search, Jira, Azure DevOps",
                "• Resources e prompts dinâmicos com autenticação Flow-native (JWT/OAuth2) e DI com tsyringe",
                "• <em>Resultado:</em> 200+ ações automatizadas/dia, 40% dos devs usam semanalmente",
                "• Stack: TypeScript strict, MCP SDK, Express.js, tsyringe, Vitest, Jira API, Azure DevOps API, GitHub API",
                "<strong>SwarmBox — Ambiente Containerizado para IA:</strong>",
                "• Docker/Podman com detecção automática de runtime, non-root containers, setup single-command",
                "• Claude Code CLI, MCP servers e Flow Proxy integrados | Toolchain: Node.js, Python, Git, Playwright",
                "• <em>Resultado:</em> Onboarding de 2h para 5min (–96%), 60% adoção, 90% satisfação",
                "• Stack: Docker, Podman, Docker Compose, Claude Code CLI, Bash",
                "<strong>Flow Ops Service & Multi-Agent Systems:</strong>",
                "• Backend FastAPI + PostgreSQL com Clean Architecture + Hexagonal Architecture e Alembic migrations",
                "• M2M tokens (OAuth2/OIDC), integração com Knowledge API, Airflow e User API",
                "• Avaliação e implementação de CrewAI, LangGraph e AutoGen para agentes autônomos em enterprise",
                "• Agentes: code review (–50% tempo), geração de testes (+15% coverage), documentação (80% APIs cobertas)",
                "• OWASP LLM Top 10 compliance, criptografia AES-256 (Fernet), SonarQube, pre-commit (flake8/black/mypy/bandit)",
                "<strong>Liderança Técnica & Impacto de Negócio:</strong>",
                "• Fundador da Comunidade de Prática de AI Engineering CI&amp;T (20+ membros)",
                "• Architecture Decision Records (ADRs), design reviews, mentoria formal de plenos e seniores",
                "• Onboarding: 2 semanas → 3 dias (–70%) | Satisfação devs: 6.8/10 → 8.4/10 (+24%)",
                "• GCP Cloud Run com Binary Authorization e GCS para distribuição segura de binários"
            ]
        },
        {
            company: "Autônomo / Freelance",
            role: "Engenheiro de IA & Desenvolvedor Full-Stack",
            dates: "2020 - Presente",
            details: [
                "<strong>Qwen Code — CLI Agent para Terminal (Publicado no NPM):</strong>",
                "• CLI agent otimizado para modelos Qwen3-Coder com suporte multi-protocolo (OpenAI, Anthropic, Gemini APIs)",
                "• OAuth free tier (1K req/dia), IDE integration (VS Code, Zed, JetBrains), modos interativo e headless",
                "• Stack: TypeScript, Node.js 20+, OpenAI API, Anthropic API | Publicado: npmjs.com/package/qwen-code",
                "<strong>Proxy LLM — Intelligent Routing Proxy (Open Source):</strong>",
                "• Roteamento automático entre LLMs cloud e locais (Ollama: Phi-4, DeepSeek-R1, Qwen3, Llama 3.2)",
                "• Análise de complexidade e sensibilidade de dados com rota local automática para dados sensíveis",
                "• Compatível com OpenAI API (drop-in replacement) | UI dashboard administrativo",
                "• Stack: Python, FastAPI, LiteLLM, Ollama, Docker, Poetry | GitHub: github.com/davipeterlini/proxy-llm",
                "<strong>Multi-Agent Automation System:</strong>",
                "• Automação de processos: emissão de NF, exames médicos, downloads de faturas e monitoramento de energia",
                "• Processamento de imagens/PDFs (300 DPI) com vision models (LLaVA, Claude-3, GPT-4o)",
                "• Stack: TypeScript, Python, LiteLLM (100+ modelos), Playwright, MCP Chrome, OpenAI Vision",
                "<strong>LifeTrek — Plataforma de Saúde & Wellness:</strong>",
                "• Backend NestJS 11 com PostgreSQL, Drizzle ORM, Google Cloud Storage e 26+ tabelas no banco",
                "• Chat médico com Gemini AI, upload de arquivos (S3/Uppy), assinaturas Stripe, autenticação OAuth/OIDC",
                "• Stack: NestJS, React 18, PostgreSQL, Drizzle, Stripe, Google Gemini, Kubernetes, GitHub Actions | github.com/davipeterlini/life-trek-app",
                "<strong>Shannon — AI Pentester White-box (Contribuidor Open Source):</strong>",
                "• Pentester autônomo para aplicações web e APIs com análise estática + dinâmica (SAST, SCA, OWASP Top 10)",
                "• Workflows com Temporal para orquestração distribuída | PoCs reproduzíveis com exploit funcional",
                "• Stack: Python, Temporal, Docker, Anthropic Claude, AWS Bedrock | GitHub: github.com/keygraph/shannon",
                "<strong>ADK Multi-Agent System & Finanza AI:</strong>",
                "• Google ADK production-ready: 5 agentes especialistas (Research, Analyst, Writer, QA, Problem Solver)",
                "• Workflows sequenciais, paralelos e condicionais com SSE streaming | Deploy GCP Cloud Run + GKE",
                "• Finanza AI: análise financeira com React 19, Pluggy API (instituições BR) e insights com Google Gemini",
                "• Stack: TypeScript, Google ADK, Gemini API, Express, Docker, GCP | React 19, Vite, Pluggy SDK, Vitest"
            ]
        },
        {
            company: "DEXTRA",
            role: "Líder Técnico",
            dates: "Agosto 2019 - Setembro 2021",
            details: [
                "Liderança técnica no desenvolvimento e reestruturação de funcionalidades back-end para aplicativos móveis usando Java/Kotlin.",
                "Arquitetura de microserviços com Spring Boot, design de APIs REST e integrações com bancos NoSQL e relacionais.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Desenvolvedor",
            dates: "Março 2017 - Julho 2019",
            details: [
                "Migração de arquitetura de projeto Java Desktop (Monolito) para Java Web com Spring MVC.",
                "Desenvolvimento FullStack em momentos pontuais com JavaScript e React.",
                "Stack: Java, Spring MVC, JavaScript, React, SQL Server."
            ]
        }
    ],
    'en-US': [
        {
            company: "CI&T — HyperX / Flow Platform",
            role: "Senior AI Platform Engineer | Tech Lead",
            dates: "January 2021 - Present",
            details: [
                "<strong>Flow Coder — AI-Powered IDE Extension (VS Code & JetBrains):</strong>",
                "• Real-time code completion, chat with code, slash commands (/test, /refactor, /explain, /doc) and context providers with @file references",
                "• Integration with Flow LLM Proxy for unified access to OpenAI, AWS Bedrock, Google Gemini, and DeepSeek",
                "• Latency optimization: first token from 2s to &lt;500ms | 128K+ token context window management",
                "• <em>Result:</em> 80% adoption (500+ devs), NPS 72, –35% PR cycle time, –48% code review time",
                "• Stack: TypeScript, Node.js, MCP SDK, VS Code Extension API, JetBrains Platform, Bitbucket Pipelines",
                "<strong>Flow LLM Proxy — Unified LLM Gateway (LiteLLM-based):</strong>",
                "• Modular LiteLLM-based proxy with corporate JWT/OAuth2 authentication",
                "• 100+ models: OpenAI GPT-4o/4.1, AWS Bedrock (Claude 3.7/4/4.5), Gemini 2.x, DeepSeek, Llama 3",
                "• Thread-safe token caching (Redis, 45–55% hit-rate), multi-tenant rate limiting, automatic provider fallback",
                "• Real-time metrics with ClickHouse: per-token/model/user usage, cost and latency tracking",
                "• <em>Result:</em> 500K+ req/day, 99.9% uptime, p95 latency &lt;800ms, –36% LLM costs (~$160/dev/month saved)",
                "• Stack: Python 3.10+, FastAPI, LiteLLM, Poetry, Pydantic, MongoDB (Motor), PostgreSQL, Redis, ClickHouse, GCP Cloud Run",
                "<strong>Flow Tenant Langfuse — LLM Observability Stack:</strong>",
                "• Custom multi-tenant Langfuse fork for distributed tracing, quality metrics, and cost tracking",
                "• Quality metrics: faithfulness, relevance, toxicity, hallucination detection | Monorepo with pnpm/Turbo",
                "• <em>Result:</em> 1M+ traces/day stored, 90-day retention, queries in &lt;2s",
                "• Stack: Langfuse (fork), PostgreSQL, ClickHouse, Redis, MinIO (S3-compatible), Kubernetes",
                "<strong>MCP CI&amp;T Flow — Model Context Protocol Server (STDIO & SSE):</strong>",
                "• 15+ tools: BCP Calculator, Code Interpreter (Docker isolation), GitHub Search, Jira, Azure DevOps",
                "• Dynamic resources and prompts with Flow-native auth (JWT/OAuth2) and DI using tsyringe",
                "• <em>Result:</em> 200+ automated actions/day, 40% of devs use weekly",
                "• Stack: TypeScript strict, MCP SDK, Express.js, tsyringe, Vitest, Jira API, Azure DevOps API, GitHub API",
                "<strong>SwarmBox — Containerized AI Development Environment:</strong>",
                "• Docker/Podman with automatic runtime detection, non-root containers, single-command setup",
                "• Claude Code CLI, MCP servers and Flow Proxy integrated | Toolchain: Node.js, Python, Git, Playwright",
                "• <em>Result:</em> Onboarding from 2h to 5min (–96%), 60% adoption, 90% satisfaction",
                "• Stack: Docker, Podman, Docker Compose, Claude Code CLI, Bash",
                "<strong>Flow Ops Service & Multi-Agent Systems:</strong>",
                "• FastAPI + PostgreSQL backend with Clean Architecture + Hexagonal Architecture and Alembic migrations",
                "• M2M tokens (OAuth2/OIDC), integration with Knowledge API, Airflow, and User API",
                "• Evaluation and implementation of CrewAI, LangGraph, and AutoGen for autonomous enterprise agents",
                "• Agents: code review (–50% time), test generation (+15% coverage), documentation (80% APIs covered)",
                "• OWASP LLM Top 10 compliance, AES-256 encryption (Fernet), SonarQube, pre-commit (flake8/black/mypy/bandit)",
                "<strong>Technical Leadership & Business Impact:</strong>",
                "• Founded AI Engineering Community of Practice at CI&amp;T (20+ members)",
                "• Architecture Decision Records (ADRs), design reviews, formal mentorship of mid-level and senior engineers",
                "• Onboarding: 2 weeks → 3 days (–70%) | Developer satisfaction: 6.8/10 → 8.4/10 (+24%)",
                "• GCP Cloud Run with Binary Authorization and GCS for secure binary distribution"
            ]
        },
        {
            company: "Freelance / Autonomous",
            role: "AI Engineer & Full-Stack Developer",
            dates: "2020 - Present",
            details: [
                "<strong>Qwen Code — Terminal CLI Agent (Published on NPM):</strong>",
                "• CLI agent optimized for Qwen3-Coder models with multi-protocol support (OpenAI, Anthropic, Gemini APIs)",
                "• OAuth free tier (1K req/day), IDE integration (VS Code, Zed, JetBrains), interactive and headless modes",
                "• Stack: TypeScript, Node.js 20+, OpenAI API, Anthropic API | Published: npmjs.com/package/qwen-code",
                "<strong>Proxy LLM — Intelligent Routing Proxy (Open Source):</strong>",
                "• Automatic routing between cloud and local LLMs (Ollama: Phi-4, DeepSeek-R1, Qwen3, Llama 3.2)",
                "• Complexity and data sensitivity analysis with automatic local routing for sensitive data",
                "• OpenAI API compatible (drop-in replacement) | Administrative UI dashboard",
                "• Stack: Python, FastAPI, LiteLLM, Ollama, Docker, Poetry | GitHub: github.com/davipeterlini/proxy-llm",
                "<strong>Multi-Agent Automation System:</strong>",
                "• Process automation: invoice generation, medical exams, bill downloads, and energy monitoring",
                "• Image/PDF processing (300 DPI) with vision models (LLaVA, Claude-3, GPT-4o)",
                "• Stack: TypeScript, Python, LiteLLM (100+ models), Playwright, MCP Chrome, OpenAI Vision",
                "<strong>LifeTrek — Health & Wellness Platform:</strong>",
                "• NestJS 11 backend with PostgreSQL, Drizzle ORM, Google Cloud Storage, and 26+ database tables",
                "• Medical chat with Gemini AI, file uploads (S3/Uppy), Stripe subscriptions, OAuth/OIDC authentication",
                "• Stack: NestJS, React 18, PostgreSQL, Drizzle, Stripe, Google Gemini, Kubernetes, GitHub Actions | github.com/davipeterlini/life-trek-app",
                "<strong>Shannon — White-box AI Pentester (Open Source Contributor):</strong>",
                "• Autonomous pentester for web apps and APIs with static + dynamic analysis (SAST, SCA, OWASP Top 10)",
                "• Workflows with Temporal for distributed orchestration | Reproducible PoCs with working exploits",
                "• Stack: Python, Temporal, Docker, Anthropic Claude, AWS Bedrock | GitHub: github.com/keygraph/shannon",
                "<strong>ADK Multi-Agent System & Finanza AI:</strong>",
                "• Google ADK production-ready: 5 specialist agents (Research, Analyst, Writer, QA, Problem Solver)",
                "• Sequential, parallel, and conditional workflows with SSE streaming | Deploy GCP Cloud Run + GKE",
                "• Finanza AI: financial analysis with React 19, Pluggy API (Brazilian institutions) and Google Gemini insights",
                "• Stack: TypeScript, Google ADK, Gemini API, Express, Docker, GCP | React 19, Vite, Pluggy SDK, Vitest"
            ]
        },
        {
            company: "DEXTRA",
            role: "Technical Leader",
            dates: "August 2019 - September 2021",
            details: [
                "Technical leadership in the development and restructuring of back-end features for mobile applications using Java/Kotlin.",
                "Microservices architecture with Spring Boot, REST API design, and integrations with NoSQL and relational databases.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Developer",
            dates: "March 2017 - July 2019",
            details: [
                "Migration of Java Desktop project architecture (Monolith) to Java Web with Spring MVC.",
                "Full-stack development with JavaScript and React at specific project phases.",
                "Stack: Java, Spring MVC, JavaScript, React, SQL Server."
            ]
        }
    ]
};

// Skills data with translations
const skillsData = {
    'pt-BR': {
        'Linguagens': {
            'Python': 9, 'TypeScript': 9, 'JavaScript': 8, 'Kotlin': 8,
            'Java': 8, 'SQL': 8, 'Shell Script': 8, 'C++': 5
        },
        'Back-End': {
            'FastAPI': 9, 'Spring Boot': 8, 'NestJS': 8, 'NodeJS': 8,
            'REST APIs': 9, 'Microservices': 8, 'Hibernate': 7, 'GraphQL': 6
        },
        'Front-End': {
            'React': 8, 'TypeScript': 9, 'Tailwind CSS': 8, 'HTML5': 8,
            'CSS3': 7, 'Vite': 8, 'React Query': 7, 'Bootstrap': 6
        },
        'DevOps & Cloud': {
            'Docker': 9, 'GCP': 8, 'AWS': 7, 'Kubernetes': 7,
            'GitHub Actions': 8, 'Bitbucket Pipelines': 7, 'Git': 9, 'Jenkins': 7
        },
        'AI & LLM': {
            'LiteLLM': 9, 'Langfuse': 9, 'MCP (Model Context Protocol)': 9,
            'Prompt Engineering': 9, 'CrewAI': 8, 'LangGraph': 7,
            'Google ADK': 7, 'RAG Patterns': 7, 'LLM Observability': 9,
            'Temporal': 7, 'Playwright': 7, 'AutoGen': 6
        },
        'Arquitetura': {
            'Clean Architecture': 9, 'Hexagonal Architecture': 8,
            'Dependency Injection': 8, 'Multi-tenant SaaS': 8,
            'Event-Driven': 7, 'Domain-Driven Design': 7
        },
        'Banco de Dados': {
            'PostgreSQL': 9, 'MongoDB': 8, 'Redis': 9,
            'ClickHouse': 8, 'Drizzle ORM': 7, 'MinIO': 7
        },
        'Segurança & Qualidade': {
            'JWT/OAuth2/OIDC': 9, 'OWASP LLM Top 10': 8,
            'TDD (pytest/Vitest)': 8, 'SonarQube': 8,
            'AES-256': 7, 'Container Security': 7
        }
    },
    'en-US': {
        'Languages': {
            'Python': 9, 'TypeScript': 9, 'JavaScript': 8, 'Kotlin': 8,
            'Java': 8, 'SQL': 8, 'Shell Script': 8, 'C++': 5
        },
        'Back-End': {
            'FastAPI': 9, 'Spring Boot': 8, 'NestJS': 8, 'NodeJS': 8,
            'REST APIs': 9, 'Microservices': 8, 'Hibernate': 7, 'GraphQL': 6
        },
        'Front-End': {
            'React': 8, 'TypeScript': 9, 'Tailwind CSS': 8, 'HTML5': 8,
            'CSS3': 7, 'Vite': 8, 'React Query': 7, 'Bootstrap': 6
        },
        'DevOps & Cloud': {
            'Docker': 9, 'GCP': 8, 'AWS': 7, 'Kubernetes': 7,
            'GitHub Actions': 8, 'Bitbucket Pipelines': 7, 'Git': 9, 'Jenkins': 7
        },
        'AI & LLM': {
            'LiteLLM': 9, 'Langfuse': 9, 'MCP (Model Context Protocol)': 9,
            'Prompt Engineering': 9, 'CrewAI': 8, 'LangGraph': 7,
            'Google ADK': 7, 'RAG Patterns': 7, 'LLM Observability': 9,
            'Temporal': 7, 'Playwright': 7, 'AutoGen': 6
        },
        'Architecture': {
            'Clean Architecture': 9, 'Hexagonal Architecture': 8,
            'Dependency Injection': 8, 'Multi-tenant SaaS': 8,
            'Event-Driven': 7, 'Domain-Driven Design': 7
        },
        'Databases': {
            'PostgreSQL': 9, 'MongoDB': 8, 'Redis': 9,
            'ClickHouse': 8, 'Drizzle ORM': 7, 'MinIO': 7
        },
        'Security & Quality': {
            'JWT/OAuth2/OIDC': 9, 'OWASP LLM Top 10': 8,
            'TDD (pytest/Vitest)': 8, 'SonarQube': 8,
            'AES-256': 7, 'Container Security': 7
        }
    }
};
