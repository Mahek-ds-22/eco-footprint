🌱 Eco-Footprint Mini-Calculator
A simple, engaging web app that helps people estimate their daily eco-footprint based on lifestyle choices like transport, diet, energy use, and daily habits.
It provides personalized tips, progress tracking, gamification badges, streaks, and history charts to raise awareness and encourage sustainable living.
🚀 Features
✅ Interactive Calculator – Quick form with questions on transport, diet, energy, and habits.
✅ Instant Score – Calculates your daily eco-score (1–20).
✅ AI-Powered Tips – Personalized suggestions for greener choices.
✅ Eco Gauge – Visual feedback with colors (green = good, yellow = average, red = high impact).
✅ Streak Tracker – Build eco-friendly habits daily.
✅ Badges & Gamification – Earn badges like Green Hero 🌍 or Eco Learner 🌿.
✅ History & Charts – View past scores and trends in a line chart.
✅ Social Sharing – Share your score with friends to spread awareness.
✅ Responsive Design – Works seamlessly on desktop & mobile.
✅ Full-Stack Ready – React frontend + FastAPI backend with persistent history storage.
🖼️ Screenshots
🏠 Home (Calculator + Score + Tips)
📊 History (Trends & Progress)
📂 Folder Structure
eco-footprint/
│── backend/
│   ├── main.py                # FastAPI backend
│   ├── insights.py            # AI-powered tips
│   ├── requirements.txt       # Python dependencies
│   └── footprint_history.json # Auto-created storage
│
│── frontend/
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── styles.css
│       ├── components/
│       │    ├── EcoGauge.tsx
│       │    ├── Badge.tsx
│       │    └── ShareCard.tsx
│       └── pages/
│            ├── Home.tsx
│            ├── History.tsx
│            └── About.tsx
│
└── README.md
⚙️ Setup Instructions
1️⃣ Backend (FastAPI)
cd backend
python -m venv .venv
source .venv/bin/activate   # (Windows: .venv\Scripts\activate)
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
Runs API at → http://localhost:8000
2️⃣ Frontend (React + Vite)
cd frontend
npm install
npm run dev
Runs app at → http://localhost:5173
🌍 Tech Stack
Frontend → React + Vite + TypeScript + Chart.js
Backend → FastAPI + Python
Storage → JSON (file-based, simple for hackathon)
Styling → Custom CSS with eco-friendly green scheme
