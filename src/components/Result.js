import React from "react";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div style={styles.box}>
      <h3>Extracted Data:</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

const styles = {
  box: {
    margin: "20px",
    padding: "20px",
    background: "#e2e8f0",
  },
};

export default Result;