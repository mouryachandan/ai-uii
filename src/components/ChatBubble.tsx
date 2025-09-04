import React from "react";

type ChatBubbleProps = {
  role: "user" | "assistant";
  message: string;
};

export default function ChatBubble({ role, message }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "8px 16px",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          backgroundColor: isUser ? "#2563eb" : "#e5e7eb", // blue / gray
          color: isUser ? "#ffffff" : "#111827", // white / dark gray
        }}
      >
        {message}
      </div>
    </div>
  );
}
