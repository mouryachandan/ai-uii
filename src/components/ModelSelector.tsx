import React, { useEffect, useState } from "react";

type Model = { id: string; name: string };

export default function ModelSelector() {
  const [models, setModels] = useState<Model[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("/data/models.json")
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch(() => console.error("Failed to load models"));
  }, []);

  return (
    <div style={{ padding: "8px" }}>
      <label
        style={{
          display: "block",
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "6px",
        }}
      >
        Choose Model
      </label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "8px",
          backgroundColor: "#f9f9f9",
          fontSize: "14px",
        }}
      >
        <option value="">Select a model</option>
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
