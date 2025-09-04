import React, { useState } from "react";
import ModelSelector from "../components/ModelSelector";
import Slider from "../components/Slider";
import ChatBubble from "../components/ChatBubble";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(256);

  const containerStyle: React.CSSProperties = {
    padding: "16px",
    maxWidth: "960px",
    margin: "0 auto",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  };

  const cardStyle: React.CSSProperties = {
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 600,
    marginBottom: "8px",
  };

  // Responsive (md:grid-cols-2 ka replacement)
  const responsiveGrid: React.CSSProperties =
    window.innerWidth >= 768
      ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }
      : gridStyle;

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ModelSelector />
        <ThemeToggle />
      </div>

      <div style={responsiveGrid}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Parameters</h2>
          <Slider
            label="Temperature"
            min={0}
            max={1}
            step={0.1}
            value={temperature}
            onChange={setTemperature}
          />
          <Slider
            label="Max Tokens"
            min={50}
            max={1000}
            step={50}
            value={tokens}
            onChange={setTokens}
          />
        </div>

        <div style={cardStyle}>
          <h2 style={titleStyle}>Chat</h2>
          <ChatBubble role="user" message="Hello AI!" />
          <ChatBubble role="assistant" message="Hi! How can I help you today?" />
        </div>
      </div>
    </div>
  );
}
