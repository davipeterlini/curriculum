// Translations for the curriculum
const translations = {
    'pt-BR': {
        // Header
        'title': 'Currículo Interativo - Davi Peterlini',
        'role': 'Senior AI Engineer | LLM Platform & Agentic Systems',
        'overview': 'Visão Geral',
        'career': 'Carreira',
        'skills': 'Competências',
        'education': 'Formação',
        'export_pdf': 'Exportar PDF',
        'generating_pdf': 'Gerando PDF...',

        // Overview section
        'overview_title': 'Visão Geral',
        'overview_description': 'Senior AI Engineer com foco em LLM infrastructure, agentic systems e AI Developer Tooling. Na CI&T, lidero a plataforma Flow — gateway LLM enterprise com roteamento inteligente, semantic caching e controle de custos de inferência. Construo soluções production-ready com LiteLLM, RAG pipelines, MCP servers, LLMOps (Langfuse) e orquestração multi-agent (LangGraph, Agno, Google ADK). Projetos open source publicados no NPM e GitHub.',
        'professional_summary': 'Resumo Profissional',
        'professional_summary_text': 'Senior AI Engineer especializado em LLM infrastructure e agentic systems. Projetei e opero um LLM gateway enterprise multi-provider, pipelines RAG, servidores MCP, LLMOps com distributed tracing e sistemas multi-agent autônomos. Experiência consolidada em redução de custos de inferência, aceleração de ciclos de desenvolvimento e construção de ferramentas de IA adotadas por times de engenharia.',
        'ai_focus': 'LLM Infrastructure & Agentic AI',
        'ai_focus_text': 'LLM gateway multi-provider (OpenAI, AWS Bedrock/Claude, Google Gemini, DeepSeek, Llama 3) com semantic caching (Redis), intelligent model routing, prompt engineering e RAG pipelines. LLMOps com distributed tracing (Langfuse/ClickHouse), hallucination detection e quality evaluation. MCP servers (STDIO/SSE) e orquestração multi-agent com LangGraph, Agno, AutoGen e Google ADK.',
        'leadership': 'Tech Lead & AI Engineering Culture',
        'leadership_text': 'Tech Lead com Architecture Decision Records (ADRs), code reviews sistemáticos e mentoria de engenheiros seniores. Fundador da Comunidade de Prática de AI Engineering na CI&T, promovendo adoção de LLMs, MCP e multi-agent systems. Padrões de qualidade via TDD (pytest/Vitest), CI/CD (GitHub Actions) e pré-commit (flake8, black, mypy, bandit). Processo de onboarding estruturado e documentado para novos engenheiros.',

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
        'highlight2': 'Fundador da Comunidade de Prática de AI Engineering na CI&T, promovendo adoção de LLMs, MCP e multi-agent systems em times de engenharia.',

        // Footer
        'footer_year': 'Currículo Interativo — 2026',

        // Job details
        'present': 'Presente'
    },
    'en-US': {
        // Header
        'title': 'Interactive Resume - Davi Peterlini',
        'role': 'Senior AI Engineer | LLM Platform & Agentic Systems',
        'overview': 'Overview',
        'career': 'Career',
        'skills': 'Skills',
        'education': 'Education',
        'export_pdf': 'Export PDF',
        'generating_pdf': 'Generating PDF...',

        // Overview section
        'overview_title': 'Overview',
        'overview_description': 'Senior AI Engineer focused on LLM infrastructure, agentic systems, and AI Developer Tooling. At CI&T, I lead the Flow platform — an enterprise LLM gateway with intelligent routing, semantic caching, and inference cost control. I build production-ready solutions with LiteLLM, RAG pipelines, MCP servers, LLMOps (Langfuse), and multi-agent orchestration (LangGraph, Agno, Google ADK). Open source projects published on NPM and GitHub.',
        'professional_summary': 'Professional Summary',
        'professional_summary_text': 'Senior AI Engineer specialized in LLM infrastructure and agentic systems. Designed and operate an enterprise multi-provider LLM gateway, RAG pipelines, MCP servers, LLMOps with distributed tracing, and autonomous multi-agent systems. Proven experience in inference cost reduction, development cycle acceleration, and building AI developer tools adopted by engineering teams.',
        'ai_focus': 'LLM Infrastructure & Agentic AI',
        'ai_focus_text': 'Multi-provider LLM gateway (OpenAI, AWS Bedrock/Claude, Google Gemini, DeepSeek, Llama 3) with semantic caching (Redis), intelligent model routing, prompt engineering, and RAG pipelines. LLMOps with distributed tracing (Langfuse/ClickHouse), hallucination detection, and quality evaluation. MCP servers (STDIO/SSE) and multi-agent orchestration with LangGraph, Agno, AutoGen, and Google ADK.',
        'leadership': 'Tech Lead & AI Engineering Culture',
        'leadership_text': 'Tech Lead with Architecture Decision Records (ADRs), systematic code reviews, and mentorship of senior engineers. Founded the AI Engineering Community of Practice at CI&T, promoting adoption of LLMs, MCP, and multi-agent systems across engineering teams. Quality standards via TDD (pytest/Vitest), CI/CD (GitHub Actions), and pre-commit hooks (flake8, black, mypy, bandit). Structured and documented onboarding process for new engineers.',

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
            company: "CI&T — Flow Platform (HyperX)",
            role: "Senior AI Engineer | Tech Lead",
            dates: "Janeiro 2021 - Presente",
            details: [
                "<strong>LLM Gateway & Inference Optimization:</strong>",
                "• Projetei e opero um LLM gateway enterprise baseado em LiteLLM com roteamento inteligente entre 100+ modelos (OpenAI GPT-4o/4.1, AWS Bedrock Claude 3.7/4/4.5, Gemini 2.x, DeepSeek, Llama 3)",
                "• Implementei semantic caching thread-safe (Redis) com 45–55% hit-rate, rate limiting multi-tenant e fallback automático entre providers — reduzindo custos de inferência em 36% (~$160/dev/mês economizados)",
                "• Autenticação corporativa JWT/OAuth2, isolamento multi-tenant e métricas em tempo real (ClickHouse: uso por token/modelo/usuário)",
                "• <em>Resultado:</em> 500K+ req/dia, 99.9% uptime, latência p95 &lt;800ms | Stack: Python, FastAPI, LiteLLM, Redis, ClickHouse, GCP Cloud Run",
                "<strong>LLMOps & AI Observability (Distributed Tracing):</strong>",
                "• Construí stack de LLMOps com fork customizado multi-tenant do Langfuse para rastreamento distribuído de traces de ponta a ponta",
                "• Implementei pipeline de quality evaluation com métricas de faithfulness, relevance, hallucination detection e toxicity scoring",
                "• Monitoramento de custos por modelo/usuário/projeto com alertas automáticos e dashboards OLAP (ClickHouse)",
                "• <em>Resultado:</em> 1M+ traces/dia, 90 dias de retenção, queries em &lt;2s | Stack: Langfuse (fork), PostgreSQL, ClickHouse, Redis, MinIO, Kubernetes",
                "<strong>Agentic Systems & Multi-Agent Orchestration:</strong>",
                "• Avaliei e implementei frameworks de orquestração multi-agent (CrewAI, LangGraph, AutoGen) em contexto enterprise",
                "• Desenvolvi agentes autônomos especializados para: code review automatizado (–50% tempo de review), geração de testes (+15% coverage), documentação de APIs (80% cobertura automática) e security scanning (OWASP LLM Top 10)",
                "• Integrei agentes com ferramentas corporativas via MCP (Jira, Azure DevOps, GitHub) — 200+ ações automatizadas/dia",
                "• <em>Stack:</em> CrewAI, LangGraph, AutoGen, Python, MCP SDK, FastAPI, PostgreSQL (Clean/Hexagonal Architecture)",
                "<strong>MCP Server (Model Context Protocol) & Tool Use:</strong>",
                "• Desenvolvi servidor MCP com 15+ tools corporativas (Code Interpreter com Docker isolation, BCP Calculator, GitHub Search, Jira, Azure DevOps) nos transportes STDIO e SSE",
                "• Implementei resources dinâmicos, prompt templates e autenticação Flow-native (JWT/OAuth2) com injeção de dependências (tsyringe)",
                "• <em>Resultado:</em> 40% dos devs utilizam semanalmente | Stack: TypeScript strict, MCP SDK, Express.js, Vitest",
                "<strong>AI-Assisted Developer Tooling (IDE Extension):</strong>",
                "• Construí extensão de IDE (VS Code & JetBrains) com AI-assisted coding: code completion em tempo real, chat contextual com @file references, slash commands (/test, /refactor, /explain, /doc) e context window management (128K+ tokens)",
                "• Otimizei latência de first token de 2s para &lt;500ms via streaming e connection pooling com o LLM gateway",
                "• <em>Resultado:</em> 80% de adoção (500+ devs), NPS 72, –35% PR cycle time, –48% tempo de code review | Stack: TypeScript, MCP SDK, VS Code Extension API, JetBrains Platform",
                "<strong>AI-Optimized Dev Environment (Containerização):</strong>",
                "• Criei ambiente containerizado (Docker/Podman) com setup single-command integrando Claude Code CLI, MCP servers e LLM gateway — non-root containers com detecção automática de runtime",
                "• <em>Resultado:</em> Onboarding de 2h para 5min (–96%), 60% adoção, 90% satisfação | Stack: Docker, Podman, Docker Compose, Bash",
                "<strong>Tech Lead & AI Engineering Culture:</strong>",
                "• Fundador da Comunidade de Prática de AI Engineering na CI&amp;T (20+ membros) — promovendo RAG, agentic AI e LLMOps em times de engenharia",
                "• Architecture Decision Records (ADRs), design reviews, mentoria de engenheiros seniores",
                "• Satisfação de devs: 6.8/10 → 8.4/10 (+24%) | Onboarding: 2 semanas → 3 dias (–70%)"
            ]
        },
        {
            company: "Autônomo / Freelance",
            role: "AI Engineer & Full-Stack Developer",
            dates: "2020 - Presente",
            details: [
                "<strong>Qwen Code — Agentic CLI Tool (Publicado no NPM):</strong>",
                "• CLI agent para terminal otimizado para modelos Qwen3-Coder com suporte multi-protocolo (OpenAI, Anthropic, Gemini APIs), modos interativo e headless, e integração com VS Code, Zed e JetBrains",
                "• <em>Stack:</em> TypeScript, Node.js 20+ | npmjs.com/package/qwen-code",
                "<strong>Proxy LLM — Intelligent Model Routing (Open Source):</strong>",
                "• LLM proxy com roteamento automático baseado em complexidade e sensibilidade de dados: queries simples → modelos cloud, dados sensíveis → modelos locais (Ollama: Phi-4, DeepSeek-R1, Qwen3, Llama 3.2)",
                "• Compatível com OpenAI API (drop-in replacement) com UI dashboard administrativo",
                "• <em>Stack:</em> Python, FastAPI, LiteLLM, Ollama, Docker | github.com/davipeterlini/proxy-llm",
                "<strong>Multi-Agent Automation System:</strong>",
                "• Sistema multi-agent para automação de processos: emissão de NF, agendamento de exames, downloads de faturas e monitoramento de energia com document intelligence (visão computacional em PDFs/imagens a 300 DPI)",
                "• <em>Stack:</em> TypeScript, Python, LiteLLM, Playwright, MCP Chrome, OpenAI Vision (LLaVA, Claude-3, GPT-4o)",
                "<strong>ADK Multi-Agent System:</strong>",
                "• Sistema multi-agent production-ready com Google ADK: 5 agentes especialistas (Research, Analyst, Writer, QA, Problem Solver) com workflows sequenciais, paralelos e condicionais + SSE streaming",
                "• Deploy em GCP Cloud Run + GKE | <em>Stack:</em> TypeScript, Google ADK, Gemini API, Express, Docker, GCP",
                "<strong>Shannon — Agentic AI Pentester (Contribuidor Open Source):</strong>",
                "• Agente autônomo de pentest para aplicações web e APIs: análise estática (SAST) + dinâmica, OWASP Top 10, geração de PoCs reproduzíveis com Temporal para orquestração distribuída",
                "• <em>Stack:</em> Python, Temporal, Docker, Anthropic Claude, AWS Bedrock | github.com/keygraph/shannon",
                "<strong>LifeTrek — Health Platform com AI:</strong>",
                "• Backend NestJS com PostgreSQL (26+ tabelas), chat médico via RAG com Gemini AI, upload de documentos (S3), assinaturas Stripe e autenticação OAuth/OIDC",
                "• <em>Stack:</em> NestJS, React 18, PostgreSQL, Drizzle, Stripe, Google Gemini, Kubernetes | github.com/davipeterlini/life-trek-app",
                "<strong>Finanza AI — Análise Financeira com IA:</strong>",
                "• Plataforma de análise financeira pessoal com integração Pluggy API (instituições BR) e insights gerados por LLM (Google Gemini) com visualizações interativas",
                "• <em>Stack:</em> React 19, Vite, Pluggy SDK, Google Generative AI, Vitest"
            ]
        },
        {
            company: "DEXTRA",
            role: "Tech Lead",
            dates: "Agosto 2019 - Setembro 2021",
            details: [
                "Liderança técnica em arquitetura de microserviços para aplicativos móveis de alta escala usando Java/Kotlin e Spring Boot.",
                "Design de APIs REST, integrações com bancos NoSQL (MongoDB, DynamoDB) e relacionais, e pipelines de CI/CD.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Desenvolvedor",
            dates: "Março 2017 - Julho 2019",
            details: [
                "Migração de arquitetura monolítica (Java Desktop) para Java Web com Spring MVC.",
                "Desenvolvimento full-stack com JavaScript e React em projetos de modernização de sistemas legados.",
                "Stack: Java, Spring MVC, JavaScript, React, SQL Server."
            ]
        }
    ],
    'en-US': [
        {
            company: "CI&T — Flow Platform (HyperX)",
            role: "Senior AI Engineer | Tech Lead",
            dates: "January 2021 - Present",
            details: [
                "<strong>LLM Gateway & Inference Optimization:</strong>",
                "• Designed and operate an enterprise LLM gateway built on LiteLLM with intelligent routing across 100+ models (OpenAI GPT-4o/4.1, AWS Bedrock Claude 3.7/4/4.5, Gemini 2.x, DeepSeek, Llama 3)",
                "• Implemented thread-safe semantic caching (Redis, 45–55% hit-rate), multi-tenant rate limiting, and automatic provider fallback — reducing inference costs by 36% (~$160/dev/month saved)",
                "• Corporate JWT/OAuth2 auth, multi-tenant data isolation, and real-time ClickHouse metrics (usage per token/model/user)",
                "• <em>Result:</em> 500K+ req/day, 99.9% uptime, p95 latency &lt;800ms | Stack: Python, FastAPI, LiteLLM, Redis, ClickHouse, GCP Cloud Run",
                "<strong>LLMOps & AI Observability (Distributed Tracing):</strong>",
                "• Built an LLMOps stack using a custom multi-tenant fork of Langfuse for end-to-end distributed tracing of LLM requests",
                "• Implemented quality evaluation pipeline with faithfulness, relevance, hallucination detection, and toxicity scoring",
                "• Cost monitoring per model/user/project with automated alerts and OLAP dashboards (ClickHouse)",
                "• <em>Result:</em> 1M+ traces/day, 90-day retention, queries in &lt;2s | Stack: Langfuse (fork), PostgreSQL, ClickHouse, Redis, MinIO, Kubernetes",
                "<strong>Agentic Systems & Multi-Agent Orchestration:</strong>",
                "• Evaluated and implemented multi-agent orchestration frameworks (CrewAI, LangGraph, AutoGen) in enterprise context",
                "• Built autonomous specialized agents for: automated code review (–50% review time), test generation (+15% coverage), API documentation (80% automatic coverage), and security scanning (OWASP LLM Top 10)",
                "• Integrated agents with enterprise tools via MCP (Jira, Azure DevOps, GitHub) — 200+ automated actions/day",
                "• <em>Stack:</em> CrewAI, LangGraph, AutoGen, Python, MCP SDK, FastAPI, PostgreSQL (Clean/Hexagonal Architecture)",
                "<strong>MCP Server (Model Context Protocol) & Tool Use:</strong>",
                "• Built an MCP server with 15+ enterprise tools (Code Interpreter with Docker isolation, BCP Calculator, GitHub Search, Jira, Azure DevOps) over STDIO and SSE transports",
                "• Dynamic resources, prompt templates, and Flow-native auth (JWT/OAuth2) with dependency injection (tsyringe)",
                "• <em>Result:</em> 40% of devs use weekly | Stack: TypeScript strict, MCP SDK, Express.js, Vitest",
                "<strong>AI-Assisted Developer Tooling (IDE Extension):</strong>",
                "• Built IDE extension (VS Code & JetBrains) with AI-assisted coding: real-time code completion, contextual chat with @file references, slash commands (/test, /refactor, /explain, /doc), and context window management (128K+ tokens)",
                "• Optimized first-token latency from 2s to &lt;500ms via streaming and connection pooling with the LLM gateway",
                "• <em>Result:</em> 80% adoption (500+ devs), NPS 72, –35% PR cycle time, –48% code review time | Stack: TypeScript, MCP SDK, VS Code Extension API, JetBrains Platform",
                "<strong>AI-Optimized Dev Environment (Containerization):</strong>",
                "• Created a containerized environment (Docker/Podman) with single-command setup integrating Claude Code CLI, MCP servers, and LLM gateway — non-root containers with automatic runtime detection",
                "• <em>Result:</em> Onboarding from 2h to 5min (–96%), 60% adoption, 90% satisfaction | Stack: Docker, Podman, Docker Compose, Bash",
                "<strong>Tech Lead & AI Engineering Culture:</strong>",
                "• Founded the AI Engineering Community of Practice at CI&amp;T (20+ members) — promoting RAG, agentic AI, and LLMOps across engineering teams",
                "• Architecture Decision Records (ADRs), design reviews, mentorship of senior engineers",
                "• Developer satisfaction: 6.8/10 → 8.4/10 (+24%) | Onboarding: 2 weeks → 3 days (–70%)"
            ]
        },
        {
            company: "Freelance / Autonomous",
            role: "AI Engineer & Full-Stack Developer",
            dates: "2020 - Present",
            details: [
                "<strong>Qwen Code — Agentic CLI Tool (Published on NPM):</strong>",
                "• Terminal CLI agent optimized for Qwen3-Coder models with multi-protocol support (OpenAI, Anthropic, Gemini APIs), interactive and headless modes, VS Code / Zed / JetBrains integration",
                "• <em>Stack:</em> TypeScript, Node.js 20+ | npmjs.com/package/qwen-code",
                "<strong>Proxy LLM — Intelligent Model Routing (Open Source):</strong>",
                "• LLM proxy with automatic routing based on complexity and data sensitivity: simple queries → cloud models, sensitive data → local models (Ollama: Phi-4, DeepSeek-R1, Qwen3, Llama 3.2)",
                "• OpenAI API compatible (drop-in replacement) with administrative UI dashboard",
                "• <em>Stack:</em> Python, FastAPI, LiteLLM, Ollama, Docker | github.com/davipeterlini/proxy-llm",
                "<strong>Multi-Agent Automation System:</strong>",
                "• Multi-agent system for process automation: invoice generation, exam scheduling, bill downloads, and energy monitoring with document intelligence (computer vision on PDFs/images at 300 DPI)",
                "• <em>Stack:</em> TypeScript, Python, LiteLLM, Playwright, MCP Chrome, OpenAI Vision (LLaVA, Claude-3, GPT-4o)",
                "<strong>ADK Multi-Agent System:</strong>",
                "• Production-ready multi-agent system with Google ADK: 5 specialist agents (Research, Analyst, Writer, QA, Problem Solver) with sequential, parallel, and conditional workflows + SSE streaming",
                "• GCP Cloud Run + GKE deployment | <em>Stack:</em> TypeScript, Google ADK, Gemini API, Express, Docker, GCP",
                "<strong>Shannon — Agentic AI Pentester (Open Source Contributor):</strong>",
                "• Autonomous pentest agent for web apps and APIs: static analysis (SAST) + dynamic testing, OWASP Top 10, reproducible PoC generation with Temporal for distributed orchestration",
                "• <em>Stack:</em> Python, Temporal, Docker, Anthropic Claude, AWS Bedrock | github.com/keygraph/shannon",
                "<strong>LifeTrek — Health Platform with AI:</strong>",
                "• NestJS backend with PostgreSQL (26+ tables), medical chat via RAG with Gemini AI, document upload (S3), Stripe subscriptions, and OAuth/OIDC authentication",
                "• <em>Stack:</em> NestJS, React 18, PostgreSQL, Drizzle, Stripe, Google Gemini, Kubernetes | github.com/davipeterlini/life-trek-app",
                "<strong>Finanza AI — Financial Analysis with LLM:</strong>",
                "• Personal finance platform integrating Pluggy API (Brazilian institutions) with LLM-generated insights (Google Gemini) and interactive visualizations",
                "• <em>Stack:</em> React 19, Vite, Pluggy SDK, Google Generative AI, Vitest"
            ]
        },
        {
            company: "DEXTRA",
            role: "Tech Lead",
            dates: "August 2019 - September 2021",
            details: [
                "Technical leadership in microservices architecture for high-scale mobile applications using Java/Kotlin and Spring Boot.",
                "REST API design, integrations with NoSQL (MongoDB, DynamoDB) and relational databases, and CI/CD pipelines.",
                "Stack: AWS, Docker, Jenkins, GitLab CI/CD, Spring Boot, Kotlin, Java, MongoDB, DynamoDB."
            ]
        },
        {
            company: "INDRA",
            role: "Developer",
            dates: "March 2017 - July 2019",
            details: [
                "Migration from monolithic architecture (Java Desktop) to Java Web with Spring MVC.",
                "Full-stack development with JavaScript and React in legacy system modernization projects.",
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
            'LiteLLM': 9, 'Langfuse / LLMOps': 9, 'MCP (Model Context Protocol)': 9,
            'Prompt Engineering': 9, 'CrewAI': 8, 'LangGraph': 8,
            'Google ADK': 7, 'RAG Pipelines': 8, 'Agentic Systems': 9,
            'LLM Observability': 9, 'AutoGen': 6, 'OpenAI / Anthropic / Gemini': 9
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
            'JWT/OAuth2/OIDC': 9, 'OWASP LLM Top 10': 9,
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
            'LiteLLM': 9, 'Langfuse / LLMOps': 9, 'MCP (Model Context Protocol)': 9,
            'Prompt Engineering': 9, 'CrewAI': 8, 'LangGraph': 8,
            'Google ADK': 7, 'RAG Pipelines': 8, 'Agentic Systems': 9,
            'LLM Observability': 9, 'AutoGen': 6, 'OpenAI / Anthropic / Gemini': 9
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
            'JWT/OAuth2/OIDC': 9, 'OWASP LLM Top 10': 9,
            'TDD (pytest/Vitest)': 8, 'SonarQube': 8,
            'AES-256': 7, 'Container Security': 7
        }
    }
};
