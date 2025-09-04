import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: 500,
    transition: "background-color 0.2s ease",
    border: "none",
    cursor: "pointer",
  };

  const primaryStyle: React.CSSProperties = {
    backgroundColor: "#2563eb", // blue-600
    color: "#fff",
  };

  const secondaryStyle: React.CSSProperties = {
    backgroundColor: "#e5e7eb", // gray-200
    color: "#111827", // gray-900
  };

  const style =
    variant === "primary"
      ? { ...baseStyle, ...primaryStyle }
      : { ...baseStyle, ...secondaryStyle };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
