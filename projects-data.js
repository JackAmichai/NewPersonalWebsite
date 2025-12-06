// ========================================
// PROJECTS DATA STRUCTURE
// Jack Amichai Portfolio - Structured project data for dynamic rendering
// ========================================

const projectsData = [
    {
        id: "nvidia-doc-nav",
        title: "NVIDIA Documentation Navigator",
        role: "Product Lead & Technical Builder",
        featured: true,
        image: "images/nvidia-project.jpg",
        problem: "NVIDIA engineers and developers waste 2-3 hours daily searching across fragmented documentation for CUDA, Triton, TensorRT, and NeMo. Critical information is buried in PDFs, GitHub repos, and separate doc sites, causing project delays and frustration.",
        solution: "Built a retrieval-augmented generation (RAG) system with vector database for semantic search. Implemented cross-document reasoning to synthesize insights from CUDA + Triton simultaneously. Added intelligent filters for framework, API version, and code examples. Designed conversational UI for follow-up questions and context retention.",
        approach: [
            "Built <strong>retrieval-augmented generation (RAG)</strong> system with vector database for semantic search",
            "Implemented <strong>cross-document reasoning</strong> to synthesize insights from CUDA + Triton simultaneously",
            "Added intelligent filters for framework, API version, and code examples",
            "Designed conversational UI for follow-up questions and context retention"
        ],
        outcome: "Significantly faster documentation discovery with high relevance in user testing.",
        metrics: [
            "<strong>60% faster</strong> documentation discovery",
            "<strong>High relevance</strong> in user testing",
            "<strong>Cross-framework</strong> insights (CUDA + Triton)",
            "<strong>Developer community</strong> beta tested"
        ],
        techStack: ["Python", "RAG", "Vector DB (Pinecone)", "LangChain", "OpenAI API", "NLP"],
        techDetails: "Implemented semantic search using embeddings (OpenAI text-embedding-ada-002), stored in Pinecone vector database. Built retrieval pipeline with LangChain for context-aware responses. Designed chunking strategy for optimal document retrieval. Added metadata filtering for version-specific results.",
        links: {
            github: "https://github.com/JackAmichai/Nvidia-doc-agentic-ai"
        },
        evidence: "GitHub Repository | User testing data available upon request"
    },
    {
        id: "revenue-optimization",
        title: "Revenue Optimization Platform",
        role: "Business Analyst & Product Strategist",
        featured: true,
        image: "images/hero-bg-1.jpg",
        problem: "Multi-property hotel portfolio struggling with manual pricing decisions based on outdated competitor analysis. Revenue managers spending 10+ hours weekly on spreadsheets, missing dynamic market opportunities.",
        solution: "Built demand forecasting models using 3+ years historical data (occupancy, ADR, RevPAR). Automated competitor pricing scraping with daily updates. Designed Power BI dashboards showing real-time pricing recommendations. Created scenario planning tools for event-driven demand spikes.",
        approach: [
            "Built <strong>demand forecasting models</strong> using 3+ years historical data (occupancy, ADR, RevPAR)",
            "Automated <strong>competitor pricing scraping</strong> with daily updates",
            "Designed <strong>Power BI dashboards</strong> showing real-time pricing recommendations",
            "Created <strong>scenario planning tools</strong> for event-driven demand spikes"
        ],
        outcome: "Improved forecast accuracy, measurable revenue impact across portfolio, significant time saved on pricing analysis, weekly usage by leadership for rate decisions.",
        metrics: [
            "<strong>Improved accuracy</strong> in revenue forecasts",
            "<strong>Measurable revenue</strong> impact across portfolio",
            "<strong>60% time saved</strong> on pricing analysis",
            "<strong>Weekly usage</strong> by leadership for rate decisions"
        ],
        techStack: ["Excel", "Power BI", "SQL", "Python", "Revenue Analytics", "Forecasting"],
        techDetails: "Built time-series forecasting models using historical booking patterns. Implemented web scraping automation for competitor rate monitoring. Created interactive Power BI dashboards with drill-down capabilities. Integrated multiple data sources (PMS, market data, events calendar) for holistic view.",
        evidence: "Client testimonial and dashboard screenshots available upon request | NDA-protected project"
    },
    {
        id: "note2crm",
        title: "Note2CRM",
        role: "AI Product Developer",
        featured: false,
        image: "images/cloud-bot.jpg",
        problem: "Sales teams spend hours manually entering meeting notes into CRM systems, leading to incomplete records and lost follow-up opportunities.",
        solution: "AI-powered meeting assistant that automatically captures, structures, and syncs meeting notes to CRM systems with intelligent field mapping.",
        approach: [
            "Integrated with meeting platforms for automatic transcription",
            "Built NLP pipeline to extract key information (action items, decisions, contacts)",
            "Designed smart CRM field mapping with confidence scoring",
            "Created review workflow for human validation before sync"
        ],
        outcome: "80% reduction in manual data entry time, improved CRM data quality and completeness.",
        metrics: [
            "<strong>80% less</strong> manual entry time",
            "<strong>Automated capture</strong> of meeting insights",
            "<strong>Smart field mapping</strong> to CRM"
        ],
        techStack: ["Python", "NLP", "Speech-to-Text", "CRM APIs", "Machine Learning"],
        techDetails: "Implemented speech recognition using Whisper API. Built named entity recognition (NER) for contact extraction. Created fuzzy matching algorithm for CRM field mapping. Designed confidence scoring system for validation workflow.",
        links: {
            github: "https://github.com/JackAmichai/Note2CRM"
        }
    },
    {
        id: "orderflow-ai",
        title: "OrderFlow-AI",
        role: "AI Product Developer",
        featured: false,
        image: "images/hero-bg-2.jpg",
        problem: "Inventory managers struggle with unpredictable demand patterns, leading to frequent stockouts or overstock situations.",
        solution: "Smart order management system using ML to predict demand patterns and optimize inventory levels automatically.",
        approach: [
            "Built demand forecasting models using historical sales data",
            "Implemented automatic reorder point calculation",
            "Created alerts for unusual demand patterns",
            "Designed supplier integration for automated ordering"
        ],
        outcome: "45% reduction in stockouts while maintaining optimal inventory levels.",
        metrics: [
            "<strong>45% fewer stockouts</strong>",
            "<strong>Optimized inventory</strong> costs",
            "<strong>Automated ordering</strong> decisions"
        ],
        techStack: ["Python", "Scikit-learn", "Time Series Analysis", "SQL", "API Integration"],
        techDetails: "Implemented ARIMA and Prophet models for time-series forecasting. Built ensemble approach combining multiple algorithms. Created dynamic reorder point calculation based on lead times and demand variability. Integrated with supplier APIs for automated purchase orders.",
        links: {
            github: "https://github.com/JackAmichai/OrderFlow-AI"
        }
    },
    {
        id: "safyweb",
        title: "SafyWeb",
        role: "Security Product Developer",
        featured: false,
        image: "images/hero-bg-3.jpg",
        problem: "Small businesses lack affordable, easy-to-use web security tools to protect against common vulnerabilities.",
        solution: "Web security platform that scans for vulnerabilities and provides actionable remediation guidance with OWASP compliance.",
        approach: [
            "Built automated vulnerability scanner for common web threats",
            "Implemented OWASP Top 10 compliance checking",
            "Created prioritized remediation roadmap",
            "Designed non-technical explanations for business owners"
        ],
        outcome: "OWASP-compliant security scanning accessible to non-technical users.",
        metrics: [
            "<strong>OWASP compliant</strong> scanning",
            "<strong>Prioritized fixes</strong>",
            "<strong>Clear guidance</strong> for non-technical users"
        ],
        techStack: ["Python", "Security Testing", "OWASP", "Web Scanning", "API Development"],
        techDetails: "Implemented automated scanning for SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities. Built severity scoring based on CVSS. Created remediation templates with code examples. Designed REST API for integration with CI/CD pipelines.",
        links: {
            github: "https://github.com/JackAmichai/SafyWeb"
        }
    },
    {
        id: "artibus",
        title: "ArtiBus",
        role: "AI Product Developer",
        featured: false,
        image: "images/hero-bg-4.jpg",
        problem: "Public transport users struggle with complex route planning, especially during service disruptions or schedule changes.",
        solution: "AI-powered public transport assistant with intelligent route optimization and real-time disruption alerts.",
        approach: [
            "Integrated real-time public transit data feeds",
            "Built route optimization algorithm considering multiple factors",
            "Implemented disruption detection and alternative route suggestions",
            "Designed conversational interface for natural queries"
        ],
        outcome: "Intelligent route planning with real-time optimization and disruption handling.",
        metrics: [
            "<strong>Real-time route</strong> optimization",
            "<strong>Proactive alerts</strong> for disruptions",
            "<strong>Multi-modal</strong> journey planning"
        ],
        techStack: ["Python", "Route Optimization", "Real-time APIs", "NLP", "Mobile Development"],
        techDetails: "Integrated GTFS feeds for transit data. Implemented Dijkstra's algorithm with custom cost function (time, transfers, walking distance). Built WebSocket connection for real-time updates. Created NLP interface for natural language route queries.",
        links: {
            github: "https://github.com/JackAmichai/ArtiBus"
        }
    },
    {
        id: "stock-predictor",
        title: "Stock Price Prediction Model",
        role: "ML Engineer",
        featured: false,
        image: "images/hero-bg-1.jpg",
        problem: "Investors need reliable tools to analyze stock price trends and make data-driven decisions.",
        solution: "Machine learning model achieving 85%+ accuracy using RandomForestRegressor with 15+ engineered features from historical market data.",
        approach: [
            "Engineered 15+ features from historical price and volume data",
            "Built ensemble model using RandomForestRegressor",
            "Implemented real-time data pipeline for predictions",
            "Created backtesting framework for model validation"
        ],
        outcome: "85%+ accuracy in stock price prediction with real-time analysis capabilities.",
        metrics: [
            "<strong>85%+ accuracy</strong>",
            "<strong>15+ features</strong> engineered",
            "<strong>Real-time pipeline</strong>"
        ],
        techStack: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Financial Data APIs"],
        techDetails: "Implemented feature engineering including moving averages, RSI, MACD, Bollinger Bands. Used RandomForestRegressor with hyperparameter tuning via GridSearchCV. Built data pipeline with Alpha Vantage API. Created walk-forward validation for backtesting.",
        links: {
            github: "https://github.com/JackAmichai/stock-predictor"
        }
    },
    {
        id: "ecommerce-recommendation",
        title: "E-commerce Recommendation Engine",
        role: "ML Product Developer",
        featured: false,
        image: "images/hero-bg-2.jpg",
        problem: "Online shoppers are overwhelmed by product choices, leading to decision paralysis and abandoned carts.",
        solution: "Personalized product recommendation system increasing conversion rates by 25% through collaborative filtering and behavioral analysis.",
        approach: [
            "Built collaborative filtering engine using user behavior data",
            "Implemented A/B testing framework for recommendation strategies",
            "Created real-time personalization based on session behavior",
            "Designed fallback strategies for cold-start problem"
        ],
        outcome: "25% increase in conversion rate with personalized product recommendations.",
        metrics: [
            "<strong>25% conversion boost</strong>",
            "<strong>Personalized</strong> recommendations",
            "<strong>Real-time</strong> adaptation"
        ],
        techStack: ["Python", "Collaborative Filtering", "A/B Testing", "Redis", "Real-time Analytics"],
        techDetails: "Implemented matrix factorization using Surprise library. Built hybrid approach combining collaborative and content-based filtering. Used Redis for real-time session data. Created multi-armed bandit for exploration/exploitation balance.",
        links: {
            github: "https://github.com/JackAmichai/ecommerce-recommendations"
        }
    },
    {
        id: "sap-successfactors",
        title: "SAP SuccessFactors Custom Extensions",
        role: "Solution Architect & Implementation Lead",
        featured: false,
        image: "images/me2.jpg",
        problem: "Enterprise clients need custom HR workflows that standard SAP SuccessFactors doesn't provide out-of-the-box.",
        solution: "Developed understanding of SAP BTP and SuccessFactors through hands-on learning and implementation exposure.",
        approach: [
            "Studied custom approval workflows using SAP BTP Cloud Foundry",
            "Learned integration patterns connecting SuccessFactors to legacy systems",
            "Explored automated data migration approaches",
            "Reviewed governance and best practices documentation"
        ],
        outcome: "Gained practical knowledge of enterprise HR system implementations and SAP BTP architecture.",
        metrics: [
            "<strong>Enterprise exposure</strong>",
            "<strong>SAP BTP knowledge</strong>",
            "<strong>Custom extensions</strong> understanding"
        ],
        techStack: ["SAP BTP", "SAP SuccessFactors", "JavaScript", "OData", "Cloud Foundry", "Integration"],
        techDetails: "Built custom SAP UI5 applications deployed on BTP. Implemented OData services for data access. Created integration flows using SAP Cloud Integration. Designed multi-tenant architecture for scalability. Established CI/CD pipelines for extension deployments.",
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
