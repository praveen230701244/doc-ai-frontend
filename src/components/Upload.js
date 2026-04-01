import React, { useState } from "react";

const Upload = ({ setResult }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    // 🔴 Backend API (we will add later)
    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.log(err);
      alert("Error uploading file");
    }
  };

  return (
    <div style={styles.container}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

const styles = {
  container: {
    margin: "30px",
    textAlign: "center",
  },
};

export default Upload;