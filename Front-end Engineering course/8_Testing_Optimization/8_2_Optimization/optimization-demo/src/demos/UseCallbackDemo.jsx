import React, { useState, useCallback } from "react";

// ========== MUAMMO: handleClick har re-render da yangi — memo ishlamaydi ==========
const BolaCallbackSiz = React.memo(function BolaCallbackSiz({ onClick }) {
  console.log("🔴 [Muammo] Bola (callback siz) chizildi");
  return (
    <button onClick={onClick} style={{ marginTop: "0.5rem" }}>
      Bolaning tugmasi
    </button>
  );
});

function OtaCallbackSiz() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("Bolaning tugmasi bosildi");
  };
  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#c00" }}>Muammo (useCallback yo‘q)</h4>
      <p>Hisob tugmasini bosing — bola ham qayta chiziladi (konsolda ko‘ring)</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <BolaCallbackSiz onClick={handleClick} />
    </div>
  );
}

// ========== YECHIM: useCallback — funksiya reference barqaror ==========
const BolaCallbackBilan = React.memo(function BolaCallbackBilan({ onClick }) {
  console.log("🟢 [Yechim] Bola (callback bilan) chizildi");
  return (
    <button onClick={onClick} style={{ marginTop: "0.5rem" }}>
      Bolaning tugmasi
    </button>
  );
});

function OtaCallbackBilan() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Bolaning tugmasi bosildi");
  }, []);
  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#080" }}>Yechim (useCallback)</h4>
      <p>Hisob tugmasini bosing — bola qayta chizilmaydi</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <BolaCallbackBilan onClick={handleClick} />
    </div>
  );
}

const cardStyle = {
  padding: "1rem",
  marginBottom: "1rem",
  background: "#fff",
  borderRadius: "8px",
  border: "1px solid #ddd",
};

export default function UseCallbackDemo() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2>3. useCallback</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Funksiya har re-render da yangi yaratiladi → memo ishlamaydi. useCallback barqaror reference beradi.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <OtaCallbackSiz />
        <OtaCallbackBilan />
      </div>
    </section>
  );
}
