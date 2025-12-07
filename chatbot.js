// ========================================
// CLOUD CHATBOT - Jack's Personal Assistant
// ========================================

const jackKnowledgeBase = {
    // Career & Experience
    "army|military|idf|service|givati|2017|2018|2019|2020": {
        answer: "Great question! Jack served in the **Israel Defense Forces (IDF)** from **2017 to 2020** as a **Staff Sergeant**. He led team operations in the **Givati Brigade**, managing high-pressure operations, logistics, and training personnel. This 3-year experience taught him exceptional leadership, decision-making under pressure, and team management skills.",
        keywords: ["IDF", "Givati", "military", "leadership", "2017-2020"]
    },
    "hospitality|consultant|consulting|current|work|job|adi|ohayon": {
        answer: "Jack currently works at **Adi Ohayon Hospitality Consulting** as a **Business Analyst** specializing in revenue optimization. He started in **April 2025**, where he analyzes demand trends, builds forecasting models, creates executive dashboards, and collaborates with cross-functional teams to drive strategic decisions.",
        keywords: ["Adi Ohayon", "hospitality", "consulting", "Business Analyst", "current role"]
    },
    "education|university|degree|studied|psychology|computer science": {
        answer: "Jack holds a **Bachelor's degree in Psychology and Computer Science** from the **Open University of Israel**. He also has research experience at **Technion** (2021-2023) as a Research Assistant & Team Coordinator, and **Hebrew University** (2020-2021) as a Research Project Manager & Software Engineer, where he analyzed experimental data and managed research projects. This unique combination of psychology and tech helps him build data-driven solutions.",
        keywords: ["education", "psychology", "computer science", "Technion", "research"]
    },
    "projects|portfolio|built|work|examples": {
        answer: "Jack has built a diverse portfolio of AI and analytics projects. You can ask me about specific ones like **Scholar2.6**, **SleepCall**, or **NVIDIA Doc Navigator**. \n\nCheck out the Projects section for videos and details!",
        keywords: ["projects", "portfolio"]
    },
    "skills|technologies|tech stack|programming|languages": {
        answer: "Jack's tech stack includes:\n\n**Languages:** Python, SQL, JavaScript, TypeScript, Java\n**AI/ML:** Scikit-learn, Pandas, LangChain, OpenAI API, Vector DBs\n**Enterprise:** SAP BTP, SAP SuccessFactors, Power BI, OData\n**Product Tools:** Jira, Figma, Git, Analytics\n\nHe specializes in building **RAG systems**, **ML pipelines**, and **enterprise integrations**.",
        keywords: ["skills", "Python", "AI", "SAP", "tech stack"]
    },
    "contact|email|reach|linkedin|phone|schedule|call": {
        answer: "You can reach Jack through:\n\n📧 **Email:** jackamichai@gmail.com\n💼 **LinkedIn:** linkedin.com/in/jackamichai\n📅 **Schedule a Call:** calendly.com/jackamichai\n🐙 **GitHub:** github.com/JackAmichai\n\nHe's actively seeking **Product Manager** and **Business Analyst** roles and would love to connect!",
        keywords: ["contact", "email", "LinkedIn", "schedule"]
    },
    "resume|cv|download|hire|looking": {
        answer: "Jack is actively seeking **Product Manager or Business Analyst roles**! You can download his materials:\n\n📄 **Resume** - Complete work history and skills\n📊 **One-Pager** - Quick overview with key metrics\n📚 **Case Studies** - Detailed project breakdowns\n\nAll downloads are available in the 'Resources for Recruiters' section below. He's looking for roles where he can leverage his AI expertise and consulting experience!",
        keywords: ["resume", "hire", "looking for work", "download"]
    },
    "achievements|impact|results|metrics|numbers": {
        answer: "Jack's measurable impact includes:\n\n📈 **Improved revenue forecast accuracy** (hospitality consulting)\n💰 **Measurable revenue impact** (pricing optimization)\n⏱️ **60% time saved** on pricing analysis\n🎯 **High-accuracy ML models** (stock prediction & forecasting)\n📚 **Research publications** (Technion & Hebrew University)\n⚡ **Faster documentation discovery** (NVIDIA RAG system)\n\nHe focuses on data-driven solutions with measurable business outcomes!",
        keywords: ["achievements", "impact", "metrics", "results"]
    },
    "languages|speak|hebrew|english|french": {
        answer: "Jack is multilingual! 🌍\n\n🇮🇱 **Hebrew** - Native speaker\n🇺🇸 **English** - Fluent (professional proficiency)\n🇫🇷 **French** - Conversational\n\nThis helps him work effectively with international teams and clients across different regions.",
        keywords: ["languages", "Hebrew", "English", "French"]
    },
    "research|neuroscience|technion|university|lab": {
        answer: "Jack has research experience at both **Technion** (2021-2023) and **Hebrew University** (2020-2021):\n\n**Technion (2021-2023):** Research Assistant & Team Coordinator\n🔬 Conducted cognitive psychology experiments\n📊 Analyzed data using SPSS and Python\n👥 Coordinated lab operations\n\n**Hebrew University (2020-2021):** Research Project Manager & Software Engineer\n💻 Developed software tools for research\n📅 Managed project timelines\n\nThis research background gives him a unique edge in understanding user behavior and designing data-driven solutions.",
        keywords: ["research", "neuroscience", "Technion", "Hebrew University", "cognitive"]
    }
};

// Sample questions to display
const sampleQuestions = [
    "Tell me about Scholar2.6",
    "What is SleepCall?",
    "Does Jack know Python?",
    "How can I contact Jack?",
    "What are Jack's main projects?",
    "Is Jack looking for work?"
];

class CloudChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.displayWelcomeMessage();
    }

    createChatbotUI() {
        // Chatbot bubble button
        const bubble = document.createElement('div');
        bubble.id = 'chatbot-bubble';
        bubble.className = 'chatbot-bubble';
        bubble.innerHTML = `
            <img src="images/cloud-bot.jpg" alt="Cloud Assistant" class="chatbot-avatar">
            <div class="chatbot-bubble-pulse"></div>
        `;
        document.body.appendChild(bubble);

        // Chatbot window
        const chatWindow = document.createElement('div');
        chatWindow.id = 'chatbot-window';
        chatWindow.className = 'chatbot-window';
        chatWindow.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-header-content">
                    <img src="images/cloud-bot.jpg" alt="Cloud" class="chatbot-header-avatar">
                    <div class="chatbot-header-text">
                        <h3>Cloud ☁️</h3>
                        <p>Jack's AI Assistant</p>
                    </div>
                </div>
                <button class="chatbot-close" id="chatbot-close">✕</button>
            </div>
            <div class="chatbot-messages" id="chatbot-messages"></div>
            <div class="chatbot-suggestions" id="chatbot-suggestions"></div>
            <div class="chatbot-input-wrapper">
                <input 
                    type="text" 
                    id="chatbot-input" 
                    placeholder="Ask about projects, skills, or contact info..."
                    autocomplete="off"
                >
                <button id="chatbot-send">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        `;
        document.body.appendChild(chatWindow);
    }

    attachEventListeners() {
        const bubble = document.getElementById('chatbot-bubble');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        bubble.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.handleSendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('chatbot-window');
        const bubble = document.getElementById('chatbot-bubble');
        
        if (this.isOpen) {
            chatWindow.classList.add('open');
            bubble.classList.add('hidden');
            document.getElementById('chatbot-input').focus();
            
            // Track opening
            if (typeof trackCTAClick !== 'undefined') {
                trackCTAClick('chatbot_opened');
            }
        } else {
            chatWindow.classList.remove('open');
            bubble.classList.remove('hidden');
        }
    }

    displayWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(
                "Hi! I'm Cloud ☁️, Jack's AI assistant! I've been updated with his latest projects like **Scholar2.6** and **SleepCall**. Ask me anything!",
                'bot'
            );
            this.displaySuggestions();
        }, 500);
    }

    displaySuggestions() {
        const suggestionsContainer = document.getElementById('chatbot-suggestions');
        
        // Show 3 random suggestions
        const randomSuggestions = this.getRandomItems(sampleQuestions, 3);
        
        suggestionsContainer.innerHTML = randomSuggestions.map(question => 
            `<button class="suggestion-btn" data-question="${question}">${question}</button>`
        ).join('');

        // Attach click handlers
        suggestionsContainer.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.dataset.question;
                this.handleUserMessage(question);
            });
        });
    }

    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (message) {
            this.handleUserMessage(message);
            input.value = '';
        }
    }

    handleUserMessage(message) {
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Find matching answer
        setTimeout(() => {
            const answer = this.findAnswer(message);
            this.addMessage(answer, 'bot');
            
            // Show new suggestions after answer
            setTimeout(() => this.displaySuggestions(), 500);
        }, 600);

        // Track question
        if (typeof trackCTAClick !== 'undefined') {
            trackCTAClick('chatbot_question_asked');
        }
    }

    findAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        // 1. Check Dynamic Project Data first
        if (typeof projectsData !== 'undefined') {
            // Find project where user question contains the ID OR any significant word from title
            const project = projectsData.find(p => {
                const titleWords = p.title.toLowerCase().split(' ').filter(w => w.length > 3);
                return lowerQuestion.includes(p.id.toLowerCase()) ||
                       titleWords.some(word => lowerQuestion.includes(word));
            });

            if (project) {
                return `**${project.title}** is a project where Jack addressed: "${project.problem}".\n\n**Solution:** ${project.solution}\n\n**Tech Stack:** ${project.techStack.join(', ')}.`;
            }
        }

        // 2. Check Static Knowledge Base
        for (const [pattern, data] of Object.entries(jackKnowledgeBase)) {
            const keywords = pattern.split('|');
            if (keywords.some(keyword => lowerQuestion.includes(keyword))) {
                return data.answer;
            }
        }
        
        // Default response
        return "That's a great question! I don't have specific information about that right now. Try asking about **Scholar2.6**, **SleepCall**, or his **Python skills**!";
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <img src="images/cloud-bot.jpg" alt="Cloud" class="message-avatar">
                <div class="message-content">${this.formatMessage(text)}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">${this.escapeHtml(text)}</div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatMessage(text) {
        // Convert markdown-style formatting to HTML
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/🎯|💰|🤖|📊|📧|💼|📅|🐙|📄|📚|📈|⏱️|🚀|⚡|🔬|📝|👥|🌍|🇮🇱|🇺🇸|🇫🇷|🔔|🔒|🛡️|🎓/g, '<span class="emoji">$&</span>');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cloudChatbot = new CloudChatbot();
    console.log('☁️ Cloud Chatbot initialized');
});
