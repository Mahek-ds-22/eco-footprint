import React, { useState } from "react";
import axios from "axios";
import EcoGauge from "../components/EcoGauge";
import Badge from "../components/Badge";
import ShareCard from "../components/ShareCard";

const API = "http://localhost:8000/api";

export default function Home() {
  const [form, setForm] = useState({
    transport: "1",
    diet: "1",
    energy: "1",
    habits: "1",
  });
  const [score, setScore] = useState<number | null>(null);
  const [tips, setTips] = useState<string[]>([]);
  const [streak, setStreak] = useState<number>(
    parseInt(localStorage.getItem("ecoStreak") || "0")
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateScore = async () => {
    const total =
      parseInt(form.transport) +
      parseInt(form.diet) +
      parseInt(form.energy) +
      parseInt(form.habits);

    setScore(total);

    // Save streak
    const today = new Date().toDateString();
    const last = localStorage.getItem("ecoLast");
    if (last !== today) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("ecoStreak", newStreak.toString());
      localStorage.setItem("ecoLast", today);
    }

    // Save to backend
    await axios.post(`${API}/footprint/save`, {
      score: total,
      details: form,
    });

    // Get AI tips
    const res = await axios.post(`${API}/footprint/tips`, {
      details: form,
    });
    setTips(res.data.tips);
  };

  return (
    <div className="card">
      <h2>🌱 Eco-Footprint Calculator</h2>
      <p>Answer a few quick questions to see your daily eco score.</p>

      <div className="form-grid">
        <label>
          Transport:
          <select name="transport" value={form.transport} onChange={handleChange}>
            <option value="1">Mostly walk / cycle</option>
            <option value="2">Public transport</option>
            <option value="3">Car (occasionally)</option>
            <option value="4">Car (daily)</option>
          </select>
        </label>
        <label>
          Diet:
          <select name="diet" value={form.diet} onChange={handleChange}>
            <option value="1">Vegetarian / Vegan</option>
            <option value="2">Balanced</option>
            <option value="3">Meat 3–4 days/week</option>
            <option value="4">Meat daily</option>
          </select>
        </label>
        <label>
          Energy Use:
          <select name="energy" value={form.energy} onChange={handleChange}>
            <option value="1">Renewables / very low</option>
            <option value="2">Efficient household</option>
            <option value="3">Average</option>
            <option value="4">High / wasteful</option>
          </select>
        </label>
        <label>
          Daily Habits:
          <select name="habits" value={form.habits} onChange={handleChange}>
            <option value="1">Minimal waste</option>
            <option value="2">Some recycling</option>
            <option value="3">Occasional recycling</option>
            <option value="4">Single-use heavy</option>
          </select>
        </label>
      </div>

      <button className="btn" onClick={calculateScore}>
        Calculate
      </button>

      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Score: {score} / 20</h3>
          <EcoGauge score={score} />
          <Badge score={score} />
          <p>🔥 Streak: {streak} day(s)</p>
          <ShareCard score={score} />

          <div style={{ marginTop: "15px" }}>
            <h4>AI Tips for You</h4>
            <ul>
              {tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
