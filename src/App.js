import React, { useState } from "react";
import { UploadCloud, Sparkles } from "lucide-react";

function App() {
  const [file, setFile] = useState(null);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
  if (!file) return alert("Select a file");

  setLoading(true);

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("https://doc-ai-backend-6m6a.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setPoints(data.points);
  } catch (err) {
    alert("Error processing file");
  }

  setLoading(false);
};

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>✨ AI Document Insights</h1>

      <div style={styles.uploadCard}>
        <UploadCloud size={70} />
        <h2>Upload Document</h2>

        <input
          type="file"
          style={styles.input}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button style={styles.button} onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {points.length > 0 && (
        <div style={styles.resultCard}>
          <Sparkles size={45} />
          <h2>📌 Key Insights</h2>

          <ul style={styles.list}>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
    padding: "40px",
    fontFamily: "Segoe UI",
  },

  title: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "40px",
  },

  uploadCard: {
    width: "420px",
    margin: "auto",
    padding: "50px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    textAlign: "center",
    boxShadow: "0 15px 50px rgba(0,0,0,0.5)",
  },

  input: {
    margin: "25px 0",
  },

  button: {
    padding: "14px 30px",
    borderRadius: "12px",
    border: "none",
    background: "#6366f1",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },

  resultCard: {
    marginTop: "50px",
    padding: "40px",
    maxWidth: "750px",
    marginInline: "auto",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    textAlign: "center",
  },

  list: {
    textAlign: "left",
    marginTop: "25px",
    fontSize: "20px",
    lineHeight: "2",
  },
};

export default App;