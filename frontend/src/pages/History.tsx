import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const API = "http://localhost:8000/api";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${API}/footprint/history`);
      setHistory(res.data.history);
    })();
  }, []);

  if (history.length === 0) return <div className="card"><h2>No history yet.</h2></div>;

  const scores = history.map((h) => h.score).reverse();
  const dates = history.map((h) =>
    new Date(h.timestamp).toLocaleDateString()
  ).reverse();

  const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Eco Score",
        data: scores,
        fill: false,
        borderColor: "#2e7d32",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="card">
      <h2>📊 Your Eco History</h2>
      <p>Average Score: {avg} / 20</p>
      <Line data={data} />
      <ul>
        {history.map((h) => (
          <li key={h.id}>
            {new Date(h.timestamp).toLocaleString()} → {h.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
