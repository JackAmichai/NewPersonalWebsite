// ========================================
// PROJECTS DATA STRUCTURE
// Jack Amichai Portfolio - Structured project data for dynamic rendering
// ========================================

const projectsData = [
    {
        id: "hatrick",
        title: "Hatrick: AI Cyber Defense",
        role: "AI Security Architect",
        featured: true,
        image: "images/hero-bg-4.jpg", // Placeholder
        video: "", // No video yet
        problem: "Simulating complex cyber attacks and defense strategies requires extensive manual effort and expertise, making it hard to train for real-world scenarios.",
        solution: "An AI Agent orchestration system that autonomously demonstrates cyber attacks and defense mechanisms. It simulates red-team/blue-team scenarios to test and improve security posture.",
        approach: [
            "Orchestrated multiple <strong>AI Agents</strong> to simulate attack vectors",
            "Implemented <strong>automated defense protocols</strong> triggered by agent actions",
            "Designed a <strong>real-time dashboard</strong> to visualize the attack/defense flow"
        ],
        outcome: "Demonstrated the capability of AI to autonomously handle complex security scenarios.",
        metrics: [
            "🛡️ <strong>Autonomous</strong> defense simulation",
            "⚡ <strong>Real-time</strong> threat response",
            "🤖 <strong>Multi-agent</strong> orchestration"
        ],
        techStack: ["Python", "AI Agents", "Cybersecurity", "LLMs", "Automation"],
        techDetails: "Built using a multi-agent framework to coordinate attack and defense bots. utilized LLMs for decision making and strategy generation.",
        links: {
            github: "https://github.com/JackAmichai/Hatrick" // Assumed link
        },
        mediaType: "image",
        mediaUrl: "https://placehold.co/600x400/1e293b/4ade80?text=Hatrick+AI+Agents",
        evidence: "Project Documentation"
    },
    {
        id: "leairn",
        title: "LeAIrn: AI Education Platform",
        role: "Product Lead",
        featured: true,
        image: "images/hero-bg-3.jpg", // Placeholder
        video: "",
        problem: "Traditional education platforms lack personalized, adaptive learning paths, leading to student disengagement and inefficient learning.",
        solution: "An AI-powered learning platform that dynamically adapts content, pace, and style to the individual student's needs, creating a truly personalized education experience.",
        approach: [
            "Developed <strong>adaptive learning algorithms</strong> to tailor content",
            "Integrated <strong>AI tutors</strong> for real-time assistance",
            "Created <strong>progress tracking</strong> with predictive analytics"
        ],
        outcome: "Created a proof-of-concept for a highly personalized learning environment.",
        metrics: [
            "🎓 <strong>Personalized</strong> learning paths",
            "📈 <strong>Adaptive</strong> difficulty adjustment",
            "🧠 <strong>AI-driven</strong> content generation"
        ],
        techStack: ["AI", "EdTech", "React", "Python", "LLMs"],
        techDetails: "Leverages LLMs to generate custom quizzes and explanations based on student performance data.",
        links: {
            github: "https://github.com/JackAmichai/LeAIrn" // Assumed link
        },
        mediaType: "image",
        mediaUrl: "https://placehold.co/600x400/1e293b/4ade80?text=LeAIrn+Platform",
        evidence: "Project Documentation"
    },
    {
        id: "nvidia-doc-nav",
        title: "NVIDIA Documentation Navigator",
        role: "Product Lead & Technical Builder",
        featured: true,
        image: "images/hero-bg-1.jpg",
        video: "videos/nvidia_demo.mp4",
        problem: "NVIDIA engineers and developers waste 2-3 hours daily searching across fragmented documentation for CUDA, Triton, TensorRT, and NeMo.",
        solution: "A retrieval-augmented generation (RAG) system with semantic search that synthesizes insights from multiple documentation sources. Features intelligent filtering and conversational UI for complex technical queries.",
        approach: [
            "Built <strong>retrieval-augmented generation (RAG)</strong> system with vector database",
            "Implemented <strong>cross-document reasoning</strong> to synthesize insights",
            "Added intelligent filters for framework, API version, and code examples",
            "Designed conversational UI for follow-up questions"
        ],
        outcome: "Significantly faster documentation discovery with high relevance in user testing.",
        metrics: [
            "⚡ <strong>60% faster</strong> documentation discovery",
            "🎯 <strong>High relevance</strong> in user testing",
            "🔗 <strong>Cross-framework</strong> insights",
            "👥 <strong>Developer community</strong> beta tested"
        ],
        techStack: ["Python", "RAG", "Vector DB (Pinecone)", "LangChain", "OpenAI API", "NLP"],
        techDetails: "Implemented semantic search using embeddings (OpenAI text-embedding-ada-002), stored in Pinecone vector database. Built retrieval pipeline with LangChain.",
        links: {
            github: "https://github.com/JackAmichai/Nvidia-doc-agentic-ai"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/Nvidia-doc-agentic-ai",
        evidence: "GitHub Repository | User testing data available upon request"
    },
    {
        id: "scholar-2-6",
        title: "Scholar2.6",
        role: "Full Stack Developer",
        featured: true, // Promoted to featured based on recency
        image: "images/hero-bg-2.jpg",
        video: "videos/scholar_demo.mp4",
        problem: "Academic researchers struggle to manage and organize vast amounts of literature efficiently.",
        solution: "A modern academic search and organization tool built with TypeScript. Streamlines the research process with intuitive library management and citation tools.",
        approach: [
            "Designed a clean, focus-oriented user interface for research",
            "Implemented efficient citation management algorithms",
            "Built a responsive frontend using TypeScript for type safety"
        ],
        outcome: "Improved research workflow efficiency and citation accuracy.",
        metrics: [
            "📚 <strong>Better organization</strong> of papers",
            "⚡ <strong>Fast retrieval</strong> of citations",
            "🎨 <strong>Modern UI</strong> experience"
        ],
        techStack: ["TypeScript", "React", "Node.js", "Academic APIs"],
        techDetails: "Built using a modern TypeScript stack for robust type checking and scalability. Integrates with academic databases for real-time metadata retrieval.",
        links: {
            github: "https://github.com/JackAmichai/Scholar2.6"
        },
        evidence: "GitHub Repository"
    },
    {
        id: "sleepcall",
        title: "SleepCall",
        role: "Python Developer",
        featured: false,
        image: "images/hero-bg-3.jpg",
        video: "videos/sleepcall_demo.mp4",
        problem: "People often miss important mentions of their name during long calls or while multitasking.",
        solution: "An intelligent audio monitoring tool that alerts you whenever your name is spoken in a call. Uses lightweight speech recognition to run locally without compromising privacy.",
        metrics: [
            "🔔 <strong>Real-time alerts</strong>",
            "🔒 <strong>Privacy-focused</strong> local processing",
            "⚡ <strong>Low latency</strong> detection"
        ],
        techStack: ["Python", "Speech Recognition", "Audio Processing"],
        techDetails: "Utilizes Python's speech recognition libraries to monitor audio input streams in real-time, triggering system alerts upon keyword detection.",
        links: {
            github: "https://github.com/JackAmichai/SleepCall"
        }
    },
    {
        id: "revenue-optimization",
        title: "Revenue Optimization Platform",
        role: "Business Analyst & Product Strategist",
        featured: true,
        image: "images/hero-bg-2.jpg",
        video: "videos/revenue_demo.mp4",
        problem: "Multi-property hotel portfolio struggling with manual pricing decisions based on outdated competitor analysis.",
        solution: "Built demand forecasting models using 3+ years of historical data to automate pricing decisions. Dashboard provides real-time recommendations and competitor tracking.",
        approach: [
            "Built <strong>demand forecasting models</strong> using historical data",
            "Automated <strong>competitor pricing scraping</strong> with daily updates",
            "Designed <strong>Power BI dashboards</strong> showing real-time pricing",
            "Created <strong>scenario planning tools</strong> for demand spikes"
        ],
        outcome: "Improved forecast accuracy and measurable revenue impact across the portfolio.",
        metrics: [
            "📈 <strong>Improved accuracy</strong> in revenue forecasts",
            "💰 <strong>Measurable revenue</strong> impact",
            "⏱️ <strong>60% time saved</strong> on pricing analysis",
            "📊 <strong>Weekly usage</strong> by leadership"
        ],
        techStack: ["Excel", "Power BI", "SQL", "Python", "Revenue Analytics", "Forecasting"],
        techDetails: "Built time-series forecasting models using historical booking patterns. Implemented web scraping automation for competitor rate monitoring. Created interactive Power BI dashboards with drill-down capabilities. Integrated multiple data sources (PMS, market data, events calendar) for holistic view.",
        mediaType: "image",
        mediaUrl: "https://placehold.co/600x400/1e293b/4ade80?text=Revenue+Optimization+Dashboard",
        evidence: "Client testimonial and dashboard screenshots available upon request | NDA-protected project"
    },
    {
        id: "password-research",
        title: "Password Security Research",
        role: "Security Researcher",
        featured: false,
        image: "images/hero-bg-1.jpg",
        video: "videos/security_demo.mp4",
        problem: "Understanding common vulnerabilities in password management systems is critical for web security.",
        solution: "A comprehensive research project analyzing password security protocols and common attack vectors. Demonstrates defense mechanisms against brute-force and dictionary attacks.",
        metrics: [
            "🔒 <strong>Vulnerability analysis</strong>",
            "🛡️ <strong>Defense strategies</strong> implemented",
            "🎓 <strong>Academic research</strong> grade"
        ],
        techStack: ["Python", "Cryptography", "Web Security", "Data Analysis"],
        techDetails: "Analyzed password strength entropy and implemented secure hashing comparisons. Simulates attack scenarios to test resilience.",
        links: {
            github: "https://github.com/JackAmichai/password-research"
        }
    },
    {
        id: "note2crm",
        title: "Note2CRM",
        role: "AI Product Developer",
        featured: false,
        image: "images/hero-bg-3.jpg",
        video: "videos/note2crm_demo.mp4",
        problem: "Sales teams spend hours manually entering meeting notes into CRM systems.",
        solution: "AI-powered meeting assistant that automatically captures, structures, and syncs meeting notes to CRM systems. Uses NLP to extract action items and contact details.",
        metrics: [
            "⏱️ <strong>80% less</strong> manual entry time",
            "📝 <strong>Automated capture</strong> of meeting insights",
            "🎯 <strong>Smart field mapping</strong> to CRM"
        ],
        techStack: ["Python", "NLP", "Speech-to-Text", "CRM APIs", "Machine Learning"],
        techDetails: "Implemented speech recognition using Whisper API. Built named entity recognition (NER) for contact extraction.",
        links: {
            github: "https://github.com/JackAmichai/Note2CRM"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/Note2CRM"
    },
    {
        id: "orderflow-ai",
        title: "OrderFlow-AI",
        role: "AI Product Developer",
        featured: false,
        image: "images/hero-bg-4.jpg",
        video: "videos/orderflow_demo.mp4",
        problem: "Inventory managers struggle with unpredictable demand patterns leading to stockouts.",
        solution: "Smart order management system using ML to predict demand patterns and optimize inventory levels. Automatically calculates reorder points based on historical sales.",
        metrics: [
            "📉 <strong>45% fewer stockouts</strong>",
            "💰 <strong>Optimized inventory</strong> costs",
            "🤖 <strong>Automated ordering</strong> decisions"
        ],
        techStack: ["Python", "Scikit-learn", "Time Series Analysis", "SQL", "API Integration"],
        techDetails: "Implemented ARIMA and Prophet models for time-series forecasting. Built ensemble approach combining multiple algorithms.",
        links: {
            github: "https://github.com/JackAmichai/OrderFlow-AI"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/OrderFlow-AI"
    },
    {
        id: "safyweb",
        title: "SafyWeb",
        role: "Security Product Developer",
        featured: false,
        image: "images/hero-bg-1.jpg",
        video: "videos/safyweb_demo.mp4",
        problem: "Small businesses lack affordable, easy-to-use web security tools.",
        solution: "Web security platform that scans for vulnerabilities and provides actionable remediation guidance. Automates checks for OWASP Top 10 threats.",
        metrics: [
            "🔒 <strong>OWASP compliant</strong> scanning",
            "🎯 <strong>Prioritized fixes</strong>",
            "📋 <strong>Clear guidance</strong> for non-technical users"
        ],
        techStack: ["Python", "Security Testing", "OWASP", "Web Scanning", "API Development"],
        techDetails: "Implemented automated scanning for SQL injection, XSS, CSRF. Built severity scoring based on CVSS.",
        links: {
            github: "https://github.com/JackAmichai/SafyWeb"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/SafyWeb"
    },
    {
        id: "artibus",
        title: "ArtiBus",
        role: "AI Product Developer",
        featured: false,
        image: "images/hero-bg-2.jpg",
        video: "videos/artibus_demo.mp4",
        problem: "Public transport users struggle with complex route planning during service disruptions.",
        solution: "AI-powered public transport assistant with intelligent route optimization and real-time alerts. Helps users navigate disruptions with alternative route suggestions.",
        metrics: [
            "🚌 <strong>Real-time route</strong> optimization",
            "⚠️ <strong>Proactive alerts</strong> for disruptions",
            "🗺️ <strong>Multi-modal</strong> journey planning"
        ],
        techStack: ["Python", "Route Optimization", "Real-time APIs", "NLP", "Mobile Development"],
        techDetails: "Integrated GTFS feeds for transit data. Implemented Dijkstra's algorithm with custom cost function.",
        links: {
            github: "https://github.com/JackAmichai/ArtiBus"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/ArtiBus"
    },
    {
        id: "stock-predictor",
        title: "Stock Price Prediction Model",
        role: "ML Engineer",
        featured: false,
        image: "images/hero-bg-3.jpg",
        video: "videos/stock_demo.mp4",
        problem: "Investors need reliable tools to analyze stock price trends.",
        solution: "Machine learning model achieving 85%+ accuracy using RandomForestRegressor. Engineers 15+ features from historical market data for robust predictions.",
        metrics: [
            "🎯 <strong>85%+ accuracy</strong>",
            "📊 <strong>15+ features</strong> engineered",
            "⚡ <strong>Real-time pipeline</strong>"
        ],
        techStack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Financial Data APIs"],
        techDetails: "Implemented feature engineering including moving averages, RSI, MACD. Used RandomForestRegressor with hyperparameter tuning.",
        links: {
            github: "https://github.com/JackAmichai/stock-predictor"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/stock-predictor"
    },
    {
        id: "ecommerce-recommendation",
        title: "E-commerce Recommendation Engine",
        role: "ML Product Developer",
        featured: false,
        image: "images/hero-bg-4.jpg",
        video: "videos/ecommerce_demo.mp4",
        problem: "Online shoppers are overwhelmed by product choices.",
        solution: "Personalized product recommendation system increasing conversion rates by 25%. Utilizes collaborative filtering and behavioral analysis to suggest relevant items.",
        metrics: [
            "📈 <strong>25% conversion boost</strong>",
            "🎯 <strong>Personalized</strong> recommendations",
            "⚡ <strong>Real-time</strong> adaptation"
        ],
        techStack: ["Python", "Collaborative Filtering", "A/B Testing", "Redis", "Real-time Analytics"],
        techDetails: "Implemented matrix factorization using Surprise library. Built hybrid approach combining collaborative and content-based filtering.",
        links: {
            github: "https://github.com/JackAmichai/ecommerce-recommendations"
        },
        mediaType: "image",
        mediaUrl: "https://opengraph.githubassets.com/1/JackAmichai/ecommerce-recommendations"
    },
    {
        id: "sap-successfactors",
        title: "SAP SuccessFactors Extensions",
        role: "Solution Architect",
        featured: false,
        image: "images/hero-bg-1.jpg",
        video: "videos/sap_demo.mp4",
        problem: "Enterprise clients need custom HR workflows outside standard capabilities.",
        solution: "Custom SAP BTP extensions for SuccessFactors, implementing specialized approval workflows and data integration. Ensures seamless connectivity with legacy systems.",
        metrics: [
            "🏛️ <strong>Enterprise exposure</strong>",
            "📚 <strong>SAP BTP knowledge</strong>",
            "🔧 <strong>Custom extensions</strong> understanding"
        ],
        techStack: ["SAP BTP", "SAP SuccessFactors", "JavaScript", "OData", "Cloud Foundry", "Integration"],
        techDetails: "Built custom SAP UI5 applications deployed on BTP. Implemented OData services for data access. Created integration flows using SAP Cloud Integration. Designed multi-tenant architecture for scalability. Established CI/CD pipelines for extension deployments.",
        mediaType: "image",
        mediaUrl: "https://placehold.co/600x400/1e293b/4ade80?text=SAP+SuccessFactors+Extensions",
        evidence: "NDA-protected Fortune 500 implementations | Client references available"
    }
];

// View types for toggle functionality
const ViewType = {
    BUSINESS: 'business',
    TECHNICAL: 'technical'
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, ViewType };
}
