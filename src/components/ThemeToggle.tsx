import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.backgroundColor = "#111";
      document.documentElement.style.color = "#fff";
    } else {
      document.documentElement.style.backgroundColor = "#fff";
      document.documentElement.style.color = "#000";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const buttonStyle: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: theme === "dark" ? "#333" : "#f9f9f9",
    color: theme === "dark" ? "#fff" : "#000",
    transition: "background 0.2s ease",
  };

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={buttonStyle}
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
