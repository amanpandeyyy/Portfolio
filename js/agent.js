/**
 * Aman's AI Agent — Interactive Chatbot Engine
 * Provides intelligent, contextual responses about Aman Pandey's skills,
 * projects (DataLens, Echo Notes, MindPulse), internship, achievements, 
 * certifications, and contact information.
 */

(function () {
  'use strict';

  // Knowledge Base Data
  const AMAN_KB = {
    name: "Aman Pandey",
    role: "Aspiring AI/ML Engineer | Computer Science Engineering Student",
    location: "Lucknow, Uttar Pradesh, India",
    email: "amanpandey20506@gmail.com",
    phone: "+91-7233990093",
    linkedin: "https://www.linkedin.com/in/aman-pandey-a791403b9/",
    github: "https://github.com/amanpandeyyy",
    portfolio: "https://amanportfolio-alpha.vercel.app/",
    resume_path: "assets/Aman_pandey_resume.pdf",

    education: [
      {
        institution: "SMS Lucknow",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        timeline: "2023 — 2027",
        location: "Lucknow, Uttar Pradesh"
      },
      {
        institution: "S.S.V Inter College",
        degree: "Intermediate (XIIth), Science",
        timeline: "2021 — 2023",
        location: "Ayodhya, Uttar Pradesh"
      }
    ],

    internship: {
      role: "Machine Learning & Generative AI Intern",
      company: "Amigo India",
      timeline: "June 2026 — July 2026",
      type: "Remote",
      highlights: [
        "Architected an internal prototype Retrieval-Augmented Generation (RAG) pipeline utilizing LangChain, LangGraph, and ChromaDB vector search to optimize context retrieval for production workflows.",
        "Designed and evaluated prompt engineering strategies across iterative LLM experiments in Jupyter Notebook, improving response reliability and substantially reducing experimentation time."
      ]
    },

    leadership: {
      title: "Treasurer — Abhivyakti Club",
      organization: "SMS Lucknow",
      timeline: "June 2026 — Present",
      description: "Oversees financial operations, budget allocation, and expense management for institute-level events and club activities."
    },

    achievements: [
      {
        title: "Winner — Amigo India Hackathon 2026",
        description: "Secured 1st Prize at Amigo India Hackathon 2026 by developing an innovative AI-powered solution.",
        link: "https://lnkd.in/p/gfFvQjQH"
      }
    ],

    certifications: [
      {
        title: "Artificial Intelligence and Machine Learning",
        issuer: "Infosys Springboard",
        link: "https://drive.google.com/file/d/1W7l5h0obfKj9vH_8Hk9lRNjm2hNpB1ke/view?pli=1"
      },
      {
        title: "Basic of Data Analytics",
        issuer: "Physics Wallah & Microsoft",
        link: "https://pwskills.com/learn/certificate/e6e194f0-c063-4191-a6f8-b2e06e6ff388/"
      },
      {
        title: "Generative AI & LLM Systems Specialization",
        issuer: "DeepLearning.AI / Coursera (Applied RAG & Architecture)",
        link: "#certifications"
      },
      {
        title: "AI — Data Engineering Analyst",
        issuer: "Skill India & N.S.D.C",
        link: "assets/certificate_30abc684-c033-40a9-836b-caa3d4b7be33.pdf"
      }
    ],

    projects: [
      {
        name: "DataLens — AI Data Analyst",
        stack: "React, FastAPI, DuckDB, Pandas, Scikit-Learn, SQLite",
        github: "https://github.com/amanpandeyyy/DataLens",
        live: "https://datalens-2.onrender.com/",
        bullets: [
          "Transforms raw CSV/XLSX datasets into actionable insights with automated data cleaning, statistical analysis, and interactive visualizations.",
          "Scalable analytics engine using DuckDB, Pandas, SciPy, and Scikit-Learn for correlation analysis and Isolation Forest anomaly detection.",
          "Natural Language-to-SQL querying and executive PDF/Excel report exports."
        ]
      },
      {
        name: "Echo Notes — AI Meeting Assistant",
        stack: "yt-dlp, FFmpeg, Whisper, ChromaDB, Mistral AI, Streamlit",
        github: "https://github.com/amanpandeyyy/Echo-Notes",
        live: "https://echo-notes-hla1.onrender.com/",
        bullets: [
          "End-to-end meeting intelligence converting YouTube audio into transcripts, automated summaries, and interactive Q&A.",
          "Automated audio ingestion pipeline using yt-dlp & FFmpeg, integrating Whisper & Sarvam AI for multilingual transcription.",
          "RAG pipeline using Hugging Face Sentence Transformers & ChromaDB for semantic vector search.",
          "Mistral AI integration to extract key action items with a modular Streamlit UI."
        ]
      },
      {
        name: "MindPulse — AI Wellness Predictor",
        stack: "Scikit-Learn, FastAPI, Pandas, JavaScript",
        github: "https://github.com/amanpandeyyy/MindPulse",
        live: "https://mind-pulse-uwef.onrender.com/",
        bullets: [
          "End-to-end machine learning app predicting student mental wellness scores using a Random Forest predictive model.",
          "Production-ready inference pipeline with Scikit-Learn, FastAPI, and Pydantic with automated preprocessing.",
          "Interactive dashboard with responsive wellness scoring and cloud-hosted API integration."
        ]
      }
    ],

    skills: {
      languages: ["Python", "SQL"],
      ml_dl: ["Supervised/Unsupervised Learning", "CNN", "RNN", "Transformers", "GANs", "TensorFlow", "PyTorch", "Scikit-Learn"],
      genai_nlp: ["GenAI", "LLMs", "RAG (Retrieval-Augmented Generation)", "OpenAI APIs", "ChromaDB", "LangChain", "LangGraph", "Whisper", "Mistral AI"],
      data: ["DuckDB", "Pandas", "Feature Engineering", "Data Cleaning", "Data Visualization", "SciPy"],
      devops_backend: ["FastAPI", "Flask", "Docker", "Kubernetes", "Git & GitHub", "Streamlit"]
    }
  };

  // Structured Query Intent Rules with Priority Scoring
  const INTENT_RULES = [
    // 1. DataLens Specific
    {
      id: "datalens",
      keywords: ["datalens", "data lens", "data analyst", "nl-to-sql", "duckdb project", "csv analytics"],
      reply: () => `📊 <strong>DataLens — AI Data Analyst</strong><br><br>
        An AI-powered analytics platform that transforms raw CSV/XLSX datasets into actionable insights:<br>
        • <strong>Tech Stack:</strong> React, FastAPI, DuckDB, Pandas, Scikit-Learn, SQLite.<br>
        • <strong>Key Capabilities:</strong> Automated data cleaning, correlation analysis, and Isolation Forest-based anomaly detection.<br>
        • <strong>Conversational BI:</strong> Natural Language-to-SQL querying and executive PDF/Excel report exports.<br><br>
        🔗 <a href="https://datalens-2.onrender.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="margin-top:4px;">🚀 Live Demo</a>
        <a href="https://github.com/amanpandeyyy/DataLens" target="_blank" rel="noopener" class="btn btn-sm btn-secondary" style="margin-top:4px; margin-left:6px;">🐙 GitHub Repo</a>`
    },

    // 2. Echo Notes Specific
    {
      id: "echonotes",
      keywords: ["echo notes", "echonotes", "echo note", "meeting assistant", "whisper project", "youtube audio", "transcription project"],
      reply: () => `🎙️ <strong>Echo Notes — AI Meeting Assistant</strong><br><br>
        An end-to-end meeting intelligence platform converting YouTube audio into transcripts and conversational Q&A:<br>
        • <strong>Tech Stack:</strong> yt-dlp, FFmpeg, Whisper, ChromaDB, Mistral AI, Streamlit.<br>
        • <strong>Ingestion Pipeline:</strong> Automated audio ingestion pipeline with Sarvam AI & Whisper multilingual transcription.<br>
        • <strong>RAG Architecture:</strong> Hugging Face Sentence Transformers & ChromaDB vector database for semantic search over long-form transcripts.<br>
        • <strong>Action Items:</strong> Mistral AI extraction of key takeaways and actionable tasks.<br><br>
        🔗 <a href="https://echo-notes-hla1.onrender.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="margin-top:4px;">🚀 Live Demo</a>
        <a href="https://github.com/amanpandeyyy/Echo-Notes" target="_blank" rel="noopener" class="btn btn-sm btn-secondary" style="margin-top:4px; margin-left:6px;">🐙 GitHub Repo</a>`
    },

    // 3. MindPulse Specific
    {
      id: "mindpulse",
      keywords: ["mindpulse", "mind pulse", "wellness predictor", "mental health", "wellness score", "random forest project"],
      reply: () => `🧠 <strong>MindPulse — AI Wellness Predictor</strong><br><br>
        An end-to-end machine learning application that predicts student mental wellness scores:<br>
        • <strong>Tech Stack:</strong> Scikit-Learn, FastAPI, Pandas, JavaScript, Pydantic.<br>
        • <strong>Predictive Model:</strong> Random Forest model trained on academic, behavioral, and lifestyle factors.<br>
        • <strong>Production Serving:</strong> High-throughput RESTful inference pipeline with automated preprocessing and responsive web dashboard.<br><br>
        🔗 <a href="https://mind-pulse-uwef.onrender.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="margin-top:4px;">🚀 Live Demo</a>
        <a href="https://github.com/amanpandeyyy/MindPulse" target="_blank" rel="noopener" class="btn btn-sm btn-secondary" style="margin-top:4px; margin-left:6px;">🐙 GitHub Repo</a>`
    },

    // 4. Recommend Only One Project (Flagship Spotlight)
    {
      id: "project_recommend",
      keywords: [
        "recommend only one project", "recommend one project", "recommend a project",
        "recommend project", "recommend", "which project", "best project", "top project",
        "the project", "the projects", "projects", "project", "suggest a project",
        "featured project", "flagship project", "what did you build", "built", "apps", "portfolio work"
      ],
      reply: () => `🌟 <strong>Recommended Flagship Project: DataLens — AI Data Analyst</strong><br><br>
        If you explore only one project, I highly recommend <strong>DataLens</strong>. It represents Aman's most comprehensive engineering work, fusing modern fullstack web architecture with high-speed analytical engines and Generative AI:<br><br>
        • <strong>Automated Intelligence:</strong> Automatically cleans messy CSV/XLSX datasets, computes statistical correlations, and detects outliers using <em>Scikit-Learn Isolation Forests</em>.<br>
        • <strong>High-Performance Analytics:</strong> Powered by <em>DuckDB, Pandas, and SQLite</em> for ultra-fast in-process SQL execution.<br>
        • <strong>Natural Language-to-SQL:</strong> Enables users to ask plain English questions about their data and automatically generates SQL queries and interactive charts.<br>
        • <strong>Tech Stack:</strong> React, FastAPI, DuckDB, Pandas, Scikit-Learn, SQLite.<br><br>
        🔗 <a href="https://datalens-2.onrender.com/" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="margin-top:4px;">🚀 Launch Live Demo</a>
        <a href="https://github.com/amanpandeyyy/DataLens" target="_blank" rel="noopener" class="btn btn-sm btn-secondary" style="margin-top:4px; margin-left:6px;">🐙 GitHub Repo</a><br><br>
        <span style="font-size:0.825rem; color:#94a3b8;"><em>Want to explore his other projects? Ask me about <strong>Echo Notes</strong> (Meeting AI) or <strong>MindPulse</strong> (Wellness Predictor)!</em></span>`
    },

    // 4b. Explicit request to list all projects
    {
      id: "all_projects",
      keywords: ["list all projects", "show all projects", "all projects", "list projects", "every project"],
      reply: () => `🚀 <strong>All 3 Featured Production Projects by Aman:</strong><br><br>
        1. <strong>DataLens — AI Data Analyst</strong> (React, FastAPI, DuckDB, Pandas, Scikit-Learn)<br>
        🔗 <a href="https://datalens-2.onrender.com/" target="_blank" rel="noopener">Live Demo</a> | <a href="https://github.com/amanpandeyyy/DataLens" target="_blank" rel="noopener">GitHub</a><br><br>
        2. <strong>Echo Notes — AI Meeting Assistant</strong> (Whisper, ChromaDB RAG, Mistral AI, Streamlit)<br>
        🔗 <a href="https://echo-notes-hla1.onrender.com/" target="_blank" rel="noopener">Live Demo</a> | <a href="https://github.com/amanpandeyyy/Echo-Notes" target="_blank" rel="noopener">GitHub</a><br><br>
        3. <strong>MindPulse — AI Wellness Predictor</strong> (Scikit-Learn Random Forest, FastAPI, Pandas)<br>
        🔗 <a href="https://mind-pulse-uwef.onrender.com/" target="_blank" rel="noopener">Live Demo</a> | <a href="https://github.com/amanpandeyyy/MindPulse" target="_blank" rel="noopener">GitHub</a>`
    },

    // 5. Generative AI & RAG
    {
      id: "rag",
      keywords: ["rag", "retrieval augmented", "llm", "llms", "genai", "generative ai", "langchain", "langgraph", "vector database", "chromadb", "embeddings"],
      reply: () => `⚡ <strong>Generative AI & RAG Expertise:</strong><br><br>
        Aman specializes in building production-grade RAG pipelines and LLM systems:<br>
        • <strong>Amigo India Internship:</strong> Engineered an internal prototype RAG system with LangChain, LangGraph, and ChromaDB vector search.<br>
        • <strong>Echo Notes:</strong> Integrated Hugging Face Sentence Transformers & ChromaDB to semantically index and retrieve long meeting transcripts.<br>
        • <strong>Prompt & Model Optimization:</strong> Evaluated multi-step prompt engineering strategies across iterative experiments in Jupyter Notebook to reduce latency and eliminate hallucinations.`
    },

    // 6. Internship & Work Experience
    {
      id: "internship",
      keywords: ["intern", "internship", "amigo", "experience", "work experience", "job"],
      reply: () => `💼 <strong>Professional Internship Experience:</strong><br><br>
        <strong>Machine Learning & Generative AI Intern @ Amigo India</strong> (June 2026 — July 2026, Remote):<br>
        • Developed an internal prototype <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline utilizing LangChain, LangGraph, and ChromaDB vector search to optimize context retrieval for production workflows.<br>
        • Formulated and evaluated iterative prompt engineering strategies in Jupyter Notebook, drastically improving response reliability and experimentation speed.`
    },

    // 7. Hackathon & Achievements
    {
      id: "achievements",
      keywords: ["hackathon", "winner", "achievement", "award", "prize", "1st prize", "recognition"],
      reply: () => `🏆 <strong>Major Achievement:</strong><br><br>
        Aman secured <strong>1st Prize at the Amigo India Hackathon 2026</strong> for developing an innovative, scalable AI-powered solution evaluated by industry judges.<br><br>
        🔗 <a href="https://lnkd.in/p/gfFvQjQH" target="_blank" rel="noopener">View Official Hackathon Certificate</a>`
    },

    // 8. Certifications
    {
      id: "certifications",
      keywords: ["certificate", "certifications", "certified", "credentials", "infosys", "physics wallah", "msde", "springboard", "skill india", "nsdc"],
      reply: () => `📜 <strong>Technical Certifications (4 Total):</strong><br><br>
        1. <strong>Artificial Intelligence and Machine Learning</strong> — <em>Infosys Springboard</em><br>
        2. <strong>Basic of Data Analytics</strong> — <em>Physics Wallah & Microsoft</em><br>
        3. <strong>Generative AI & LLM Systems Specialization</strong> — <em>DeepLearning.AI / Coursera</em><br>
        4. <strong>AI — Data Engineering Analyst</strong> — <em>Skill India & N.S.D.C</em><br><br>
        All credentials are verified with links in the Certifications section!`
    },

    // 9. Tech Stack & Skills
    {
      id: "skills",
      keywords: ["skill", "skills", "tech stack", "technologies", "tools", "python", "pytorch", "stack", "fastapi", "docker", "tensorflow"],
      reply: () => `🛠️ <strong>Aman's Technical Arsenal:</strong><br><br>
        • <strong>Languages:</strong> Python, SQL<br>
        • <strong>Machine & Deep Learning:</strong> PyTorch, TensorFlow, Transformers, CNNs, RNNs, GANs, Scikit-Learn<br>
        • <strong>Generative AI & NLP:</strong> LangChain, LangGraph, ChromaDB, RAG, OpenAI APIs, Mistral AI, Whisper, Prompt Engineering<br>
        • <strong>Data Engineering:</strong> DuckDB, Pandas, SciPy, Feature Engineering, Preprocessing<br>
        • <strong>DevOps & Web:</strong> FastAPI, Flask, Docker, Kubernetes, Git & GitHub, Streamlit, React`
    },

    // 10. Resume Download
    {
      id: "resume",
      keywords: ["resume", "cv", "download resume", "pdf", "get resume", "curriculum vitae"],
      reply: () => `📄 <strong>Aman Pandey's Resume:</strong><br><br>
        You can download his official ATS-friendly resume here:<br><br>
        <a href="${AMAN_KB.resume_path}" download class="btn btn-sm btn-primary">📥 Download Resume (PDF)</a>`
    },

    // 11. Contact & Socials
    {
      id: "contact",
      keywords: ["contact", "email", "phone", "hire", "reach", "message", "call", "connect", "interview"],
      reply: () => `📬 <strong>Connect with Aman:</strong><br><br>
        • 📧 <strong>Email:</strong> <a href="mailto:${AMAN_KB.email}">${AMAN_KB.email}</a><br>
        • 📱 <strong>Phone:</strong> <a href="tel:${AMAN_KB.phone.replace(/[^0-9+]/g, '')}">${AMAN_KB.phone}</a><br>
        • 💼 <strong>LinkedIn:</strong> <a href="${AMAN_KB.linkedin}" target="_blank" rel="noopener">linkedin.com/in/aman-pandey</a><br>
        • 🐙 <strong>GitHub:</strong> <a href="${AMAN_KB.github}" target="_blank" rel="noopener">github.com/amanpandeyyy</a>`
    },

    // 12. Education
    {
      id: "education",
      keywords: ["education", "college", "school", "degree", "university", "btech", "b.tech", "sms lucknow", "ssv"],
      reply: () => `🎓 <strong>Education:</strong><br><br>
        • <strong>B.Tech in Computer Science and Engineering</strong> (2023 — 2027)<br>
        <em>SMS Lucknow</em>, Uttar Pradesh<br><br>
        • <strong>Intermediate (XIIth, Science Stream)</strong> (2021 — 2023)<br>
        <em>S.S.V Inter College</em>, Ayodhya, Uttar Pradesh`
    },

    // 13. Leadership
    {
      id: "leadership",
      keywords: ["leadership", "club", "treasurer", "abhivyakti", "campus"],
      reply: () => `🏛️ <strong>Leadership & Campus Role:</strong><br><br>
        Aman is the <strong>Treasurer of the Abhivyakti Club</strong> at SMS Lucknow (June 2026 — Present), managing event budgeting, expense approvals, and financial planning for collegiate activities.`
    },

    // 14. About Aman (Only matched when explicitly asking about Aman himself)
    {
      id: "about_aman",
      keywords: [
        "who is aman", "about aman", "tell me about yourself", "tell me about aman",
        "who are you", "introduce yourself", "introduce aman", "bio", "profile summary",
        "tell me your background", "overview", "what is your background"
      ],
      reply: () => `👋 <strong>Aman Pandey</strong> is an aspiring <strong>AI/ML Engineer</strong> and Computer Science Engineering student at SMS Lucknow (2023–2027).<br><br>
        • <strong>Core Focus:</strong> Deep Learning, Generative AI, RAG pipelines, and scalable backend deployment with FastAPI & Docker.<br>
        • <strong>Experience:</strong> ML & GenAI Intern at Amigo India; 1st Prize Winner at Amigo India Hackathon 2026.<br>
        • <strong>Key Projects:</strong> DataLens (AI Data Analyst), Echo Notes (AI Meeting Assistant), and MindPulse (Predictive ML).<br><br>
        Would you like to explore his <strong>projects</strong>, his <strong>internship experience</strong>, or <strong>download his resume</strong>?`
    },

    // 15. Greetings
    {
      id: "greetings",
      keywords: ["hi", "hello", "hey", "good morning", "good evening", "greetings", "help"],
      reply: () => `👋 Hello! I'm <strong>Aman's AI Agent</strong>.<br><br>
        I can answer questions about Aman's <strong>production projects</strong>, his <strong>Generative AI & RAG work at Amigo India</strong>, his technical skills, or provide his resume and contact info. How can I help you today?`
    }
  ];

  // Work inquiry indicator keywords
  const WORK_INQUIRY_PATTERNS = [
    "did he work", "did aman work", "did you work", "have you worked", "has he worked",
    "has aman worked", "worked on", "worked with", "work on", "work with", "worked at",
    "work at", "experience in", "experience with", "does he know", "do you know",
    "can he do", "has he done", "did he do", "did he build", "has he built",
    "have you built", "what work", "which company", "any experience", "worked"
  ];

  // Reply for work, skills, or topics Aman has NOT worked on (Polite, natural, professional)
  function getUnworkedReply(query) {
    return `No, Aman hasn't had the chance to work on that directly just yet.<br><br>
      However, he is an enthusiastic and fast learner who is constantly exploring new tools and expanding his skill set.<br><br>
      Currently, his primary hands-on production expertise is in:<br>
      • <strong>Generative AI &amp; RAG Systems:</strong> LangChain, LangGraph, ChromaDB, OpenAI APIs, Mistral AI.<br>
      • <strong>Machine &amp; Deep Learning:</strong> PyTorch, Scikit-Learn, Transformers, CNNs.<br>
      • <strong>Backend &amp; Data:</strong> FastAPI, Python, DuckDB, Docker.<br><br>
      He is always eager to take on new technical challenges and adapt quickly! Would you like to check out his flagship project <strong>DataLens</strong>, his internship at <strong>Amigo India</strong>, or <a href="${AMAN_KB.resume_path}" download>download his resume</a>?`;
  }

  // Default fallback response
  function getFallbackReply(query) {
    const q = query.toLowerCase();
    const isWorkQuestion = WORK_INQUIRY_PATTERNS.some(p => q.includes(p));

    if (isWorkQuestion) {
      return getUnworkedReply(query);
    }

    return `No, Aman hasn't worked directly with "<em>${escapeHTML(query)}</em>" yet.<br><br>
      He is, however, an adaptable engineer who is always curious to learn and build in new domains. His proven strengths lie in <strong>Generative AI, RAG pipelines, Deep Learning, and Python/FastAPI backend engineering</strong>.<br><br>
      Feel free to ask about his recommended project <strong>DataLens</strong>, his internship at <strong>Amigo India</strong>, or connect with him directly!`;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Priority-aware Matching Engine: Longest/most specific keyword wins
  function matchQuery(userQuery) {
    const q = userQuery.toLowerCase().trim();
    if (!q) return "Please enter a question or select one of the suggested topics below!";

    let bestRule = null;
    let maxKeywordLength = 0;

    for (const rule of INTENT_RULES) {
      for (const kw of rule.keywords) {
        if (q.includes(kw)) {
          if (kw.length > maxKeywordLength) {
            maxKeywordLength = kw.length;
            bestRule = rule;
          }
        }
      }
    }

    if (bestRule) {
      return bestRule.reply();
    }

    return getFallbackReply(userQuery);
  }

  // DOM Elements Setup
  document.addEventListener('DOMContentLoaded', () => {
    const agentFab = document.getElementById('agentFab');
    const agentDrawer = document.getElementById('agentDrawer');
    const agentCloseBtn = document.getElementById('agentCloseBtn');
    const agentChatBody = document.getElementById('agentChatBody');
    const agentInputForm = document.getElementById('agentInputForm');
    const agentInputField = document.getElementById('agentInputField');
    const navAgentBtn = document.getElementById('navAgentBtn');
    const heroAgentBtn = document.getElementById('heroAgentBtn');

    if (!agentDrawer) return;

    // Open/Close Handlers
    function openDrawer() {
      agentDrawer.classList.add('open');
      agentInputField.focus();
    }

    function closeDrawer() {
      agentDrawer.classList.remove('open');
    }

    if (agentFab) agentFab.addEventListener('click', () => {
      agentDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    if (navAgentBtn) navAgentBtn.addEventListener('click', openDrawer);
    if (heroAgentBtn) heroAgentBtn.addEventListener('click', openDrawer);
    if (agentCloseBtn) agentCloseBtn.addEventListener('click', closeDrawer);

    // Append Message with Typing Effect
    function appendMessage(sender, htmlContent, isHtml = true) {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${sender}`;
      if (isHtml) {
        bubble.innerHTML = htmlContent;
      } else {
        bubble.textContent = htmlContent;
      }
      agentChatBody.appendChild(bubble);
      agentChatBody.scrollTop = agentChatBody.scrollHeight;
      return bubble;
    }

    // Show Typing Indicator
    function showTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'chat-bubble bot typing-indicator-box';
      typingDiv.id = 'agentTypingIndicator';
      typingDiv.innerHTML = `
        <div class="typing-dots">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `;
      agentChatBody.appendChild(typingDiv);
      agentChatBody.scrollTop = agentChatBody.scrollHeight;
    }

    function hideTypingIndicator() {
      const el = document.getElementById('agentTypingIndicator');
      if (el) el.remove();
    }

    // Process User Query
    function handleUserSubmit(queryText) {
      const cleanText = queryText.trim();
      if (!cleanText) return;

      appendMessage('user', cleanText, false);
      agentInputField.value = '';

      showTypingIndicator();

      // Realistic response delay for natural conversational feel
      setTimeout(() => {
        hideTypingIndicator();
        const responseHTML = matchQuery(cleanText);
        appendMessage('bot', responseHTML, true);
      }, 400);
    }

    // Form Submit Listener
    agentInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserSubmit(agentInputField.value);
    });

    // Suggestion Chips Delegated Listener
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('agent-chip')) {
        const query = e.target.getAttribute('data-query') || e.target.textContent;
        openDrawer();
        handleUserSubmit(query);
      }
    });

    // Expose global trigger for inline links
    window.openAmanAgent = function (initialQuery) {
      openDrawer();
      if (initialQuery) {
        handleUserSubmit(initialQuery);
      }
    };
  });
})();
