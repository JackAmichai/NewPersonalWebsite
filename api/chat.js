export const config = {
    runtime: 'edge',
};

const RESUME_CONTEXT = `
# JACK (YARON) YAKOV AMICHAI

**Business Analyst | AI Product Builder | Full Stack Developer**

Herzliya, Israel | +972 54-484-4125 | jackamichai@gmail.com

[LinkedIn](https://linkedin.com/in/jackamichai) | [GitHub](https://github.com/JackAmichai) | [Portfolio](https://new-personal-website-topaz.vercel.app) | [Calendly](https://calendly.com/jackamichai)

---

## PROFESSIONAL SUMMARY

**Business Analyst and AI Product Builder** with a dual background in **Psychology and Computer Science**, bridging the gap between human-centric requirements and complex technical implementation. Experienced in designing data-driven solutions that connect business goals with measurable improvements in revenue and decision quality. Proven track record in **Enterprise AI**, **Cloud Computing**, and **Digital Transformation** (Deloitte), with a portfolio of deployed multi-agent systems and consumer applications.

---

## TECHNICAL & PROFESSIONAL SKILLS

- **AI & ML:** Generative AI (LLMs, RAG), Multi-Agent Systems, LangChain, OpenAI API, Vector DBs (Pinecone), Scikit-learn, Pandas.
- **Languages:** Python, TypeScript, JavaScript, SQL, Java, C++, C.
- **Enterprise Systems:** SAP BTP, SAP SuccessFactors, OData, Power BI, Cloud Computing.
- **Web & Tools:** React, Node.js, FastAPI, Next.js, Git, Jira, Figma, Azure Speech SDK.
- **Core Competencies:** Business Analysis, Revenue Analytics, Agile/Scrum, SDLC Management, Research Design.

---

## PROFESSIONAL EXPERIENCE

### DELOITTE | Tel Aviv, Israel
**Junior Consultant** | *Aug 2025 – Present*

- **Implementing enterprise AI solutions** and data-driven systems, leveraging **SAP BTP** and **Gen AI** to optimize large-scale business processes.
- **Supporting digital transformation projects**, analyzing legacy workflows to recommend and execute automation strategies that improve operational efficiency.
- **Collaborating with cross-functional teams** to align technical deliverables with client business goals, ensuring seamless adoption of new technologies.

### ADI OHAYON HOSPITALITY | Hybrid / Remote
**Business Analyst Intern** | *Apr 2025 – Present*

- **Analyzing demand trends** and competitor pricing strategies across hotel portfolios, building **revenue forecasting models** that directly inform pricing decisions.
- **Developing executive dashboards** (Power BI/Excel) to visualize real-time KPIs, enabling stakeholders to make data-backed strategic adjustments.
- **Collaborating with sales and marketing** to align promotional activities with operational capacity and profitability targets.

### TECHNION - ISRAEL INSTITUTE OF TECHNOLOGY | Haifa, Israel
**Research Assistant & Team Coordinator** | *2021 – 2023*

- **Conducted cognitive psychology research**, managing participant recruitment and lab operations.
- **Analyzed experimental data** using **Python** and **SPSS**, translating complex datasets into actionable research insights.
- **Coordinated cross-functional teams**, ensuring strict adherence to research protocols and timelines.

### HEBREW UNIVERSITY OF JERUSALEM | Jerusalem, Israel
**Research Project Manager & Software Engineer** | *2020 – 2021*

- **Managed research project timelines**, serving as the technical lead for data collection and analysis tools.
- **Developed C++ software solutions** to support experimental workflows, bridging the gap between theoretical research needs and technical execution.

---

## KEY PROJECTS

### Hatrick: AI Cyber Defense | *AI Lead & Developer*
- **Built a multi-agent system** for cyber attack/defense simulation using **LLM orchestration** (LangChain/Groq).
- **Engineered a high-performance architecture** featuring 6+ autonomous AI agents with sub-second inference capabilities.
- **Stack:** React, TypeScript, FastAPI, LangChain, Groq.

### NVIDIA Documentation Navigator | *AI Engineer* | [Code](https://github.com/JackAmichai/Nvidia-doc-agentic-ai)
- **Developed an AI-powered unified search engine** using **RAG (Retrieval-Augmented Generation)** to query NVIDIA documentation.
- **Implemented version-aware answers** and code generation features, utilizing **Pinecone** for vector storage and **FastAPI** for the backend.

### PawQuest: Dog Social App | *Full Stack Developer* | [Live App](https://paw-quest-f31de0c0.base44.app)
- **Launched a social platform** for dog owners featuring real-time matching, location discovery, and event scheduling.
- **Designed a community-focused UX**, enabling users to organize meetups and build local networks.
- **Stack:** React, Node.js, Base44.

### Scholar 2.6: AI Research Navigator | *Frontend Engineer* | [Code](https://github.com/JackAmichai/Scholar2.6)
- **Created a Chrome Extension** with an AI-driven interface for academic research, integrating with **Semantic Scholar** to visualize knowledge graphs.
- **Stack:** TypeScript, React, OpenAI API.

### SleepCall: Meeting Sentinel | *Python Developer* | [Code](https://github.com/JackAmichai/SleepCall)
- **Engineered a real-time audio monitoring tool** using **Azure Speech SDK** to detect specific keywords (e.g., names) and generate AI summaries of missed context.

---

## EDUCATION

### OPEN UNIVERSITY OF ISRAEL
**B.A. in Psychology & Computer Science**
- *Focus:* Dual-major combining algorithmic thinking with human behavioral analysis.

---

## MILITARY SERVICE

### ISRAEL DEFENSE FORCES (IDF)
**Staff Sergeant - Operations & Leadership** | *Mar 2017 – Aug 2018*

- Led team operations and mission planning in high-pressure environments.
- Managed logistics and resource allocation while training junior personnel.

---

## LANGUAGES

- **Hebrew:** Native
- **English:** Fluent
- **Spanish:** Conversational
- **German:** Conversational
`;

// Get API key from environment variable
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export default async function handler(req) {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    // Check if API key is configured
    if (!OPENROUTER_API_KEY) {
        console.error("OPENROUTER_API_KEY not configured");
        return new Response(JSON.stringify({ answer: "I'm not fully configured yet. Please ask Jack to set up my brain! 🧠" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const { message } = await req.json();

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://new-personal-website-topaz.vercel.app",
                "X-Title": "Jack Amichai Portfolio",
            },
            body: JSON.stringify({
                "model": "google/gemini-2.0-flash-exp:free",
                "messages": [
                    {
                        "role": "system",
                        "content": `You are Cloud, Jack Amichai's personal AI assistant on his portfolio website. 
                        Your goal is to answer visitors' questions about Jack using the provided context.
                        
                        Here is Jack's Resume/Context:
                        ${RESUME_CONTEXT}
                        
                        Guidelines:
                        1. Be friendly, professional, and concise.
                        2. Use emojis occasionally to be engaging (e.g., 👋, 🚀, 💻).
                        3. ONLY answer based on the provided context. If you don't know the answer, say you don't have that information but they can contact Jack directly.
                        4. Highlight key skills and achievements.
                        5. If asked about contact info, provide the email and LinkedIn from the context.
                        6. Keep answers relatively short (under 3-4 sentences) unless a detailed explanation is requested.
                        7. You are representing Jack, so be positive and impressive.`
                    },
                    {
                        "role": "user",
                        "content": message
                    }
                ]
            })
        });

        const data = await response.json();
        
        if (data.error) {
             console.error("OpenRouter Error:", data.error);
             return new Response(JSON.stringify({ answer: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const answer = data.choices[0].message.content;

        return new Response(JSON.stringify({ answer }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Server Error:", error);
        return new Response(JSON.stringify({ answer: "Sorry, something went wrong. Please try again." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
