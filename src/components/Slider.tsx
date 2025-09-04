import React from "react";

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
};

export default function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
}: SliderProps) {
  const containerStyle: React.CSSProperties = {
    marginBottom: "16px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,
    marginBottom: "4px",
  };

  const sliderStyle: React.CSSProperties = {
    width: "100%",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>
        {label}: {value}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={sliderStyle}
      />
    </div>
  );
}
