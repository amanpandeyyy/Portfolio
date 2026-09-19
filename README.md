# Aman Pandey — Modern AI/ML Portfolio Website

A sleek, responsive, cyberpunk-minimalist portfolio website tailored for an **AI/ML Engineer & Computer Science Student**, featuring an interactive **"Talk to my Agent"** AI chatbot, direct **Resume Download**, **Certifications & Achievements Showcase**, and **Production Projects**.

---

## 🚀 Key Features

1. **"Talk to my Agent" Interactive AI Persona**:
   - Floating action button + chat drawer primed with Aman's entire resume knowledge base.
   - Answers recruiter queries in natural language about his **RAG & GenAI experience at Amigo India**, **DataLens**, **Echo Notes**, **MindPulse**, technical skills, and contact information.
   - Includes quick-prompt suggestion chips for one-click exploration.

2. **Resume Download & Quick-Preview System**:
   - Prominent **"Download Resume"** buttons in the navigation bar, hero section, and dedicated resume spotlight card.
   - Linked directly to `assets/Aman_pandey_resume.pdf`.
   - Includes an interactive in-browser **Quick Preview Modal** and download feedback toast notifications.

3. **Separated Certifications & Achievements**:
   - **Achievements**: Spotlight on **Winner — Amigo India Hackathon 2026** (1st Prize for innovative AI-powered solution) with official verification link.
   - **Certifications**: Dedicated grid with all credentials:
     1. *Artificial Intelligence and Machine Learning* (Infosys Springboard)
     2. *Basic of Data Analytics* (Physics Wallah & Microsoft)
     3. *AI — Data Engineering Analyst* (MSDE Skill India)
     4. *Generative AI & LLM Systems Specialization* (DeepLearning.AI / Coursera)

4. **Production Projects Showcase**:
   - **DataLens**: React, FastAPI, DuckDB, Pandas, Scikit-Learn (Live on Render + GitHub)
   - **Echo Notes**: yt-dlp, FFmpeg, Whisper, ChromaDB, Mistral AI, Streamlit (Live on Render + GitHub)
   - **MindPulse**: Scikit-Learn, FastAPI, Pandas, JavaScript (Live on Render + GitHub)
   - Interactive filtering by project type (*All*, *Generative AI & RAG*, *Machine Learning*).

5. **Aesthetics & Technology**:
   - Deep obsidian space theme (`#06080f`) with electric cyan (`#22d3ee`) and neon violet (`#a855f7`) glow accents.
   - Interactive HTML5 Neural Network canvas that connects nodes and responds to mouse movement.
   - Dynamic typewriter effect for the hero subtitle.
   - One-click copy email button with toast notifications.
   - Fully responsive on mobile, tablet, laptop, and ultra-wide displays.

---

## 📂 Project Structure

```
Portfolio/
├── index.html                  # Main portfolio website
├── css/
│   └── style.css               # Complete styling, animations, theme & responsiveness
├── js/
│   ├── main.js                 # Neural canvas, typewriter, filters, modals, toasts
│   └── agent.js                # "Talk to my Agent" conversational engine & knowledge base
├── assets/
│   ├── Aman_pandey_resume.pdf  # Resume download target (replace with your compiled PDF)
│   └── favicon.svg             # Tech favicon
└── README.md                   # Documentation & deployment guide
```

---

## 📄 How to Place Your Resume PDF

1. Compile your LaTeX resume to a `.pdf` file.
2. Name the file **`Aman_pandey_resume.pdf`**.
3. Place/replace it in the **`assets/`** folder:
   ```
   Portfolio/assets/Aman_pandey_resume.pdf
   ```
4. All resume buttons across the navbar, hero, resume spotlight, and the AI agent will automatically download this file!

---

## 🤖 How to Customize "Talk to my Agent"

The knowledge base for the AI agent lives in `js/agent.js` inside the `AMAN_KB` object and `INTENT_RULES` array. You can easily add new questions, projects, or modify answers anytime.

---

## 🌐 How to Deploy

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/amanpandeyyy/Portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), import your repository, and click **Deploy**.
3. It deploys instantly with zero build steps needed!

### Option 2: GitHub Pages
1. Go to your GitHub repository **Settings** > **Pages**.
2. Under **Branch**, select `main` and `/ (root)`.
3. Click **Save** — your site will be live at `https://amanpandeyyy.github.io/Portfolio/`.

