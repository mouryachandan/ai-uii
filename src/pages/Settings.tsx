import React from "react";

export default function Settings() {
  const containerStyle: React.CSSProperties = {
    padding: "16px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  };

  const paragraphStyle: React.CSSProperties = {
    marginTop: "8px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Settings</h1>
      <p style={paragraphStyle}>This is the settings page (dummy).</p>
    </div>
  );
}
