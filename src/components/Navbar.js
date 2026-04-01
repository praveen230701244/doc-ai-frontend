import React from "react";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <h2>📄 AI Document Processor</h2>
    </div>
  );
};

const styles = {
  nav: {
    padding: "15px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  },
};

export default Navbar;