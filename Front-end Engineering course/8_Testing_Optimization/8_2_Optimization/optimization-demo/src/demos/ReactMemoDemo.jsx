import React, { useState } from "react";

// ========== MUAMMO: Bola har re-render da qayta chiziladi ==========
function BolaMemosiz({ title }) {
  console.log("🔴 [Muammo] Bola chizildi");
  return <p style={{ color: "#666" }}>{title}</p>;
}

function OtaMemosiz() {
  const [count, setCount] = useState(0);
  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#c00" }}>Muammo (memo yo‘q)</h4>
      <p>Tugmani bosing — konsolda har safar "Bola chizildi" chiqadi</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <BolaMemosiz title="Salom" />
    </div>
  );
}

// ========== YECHIM: React.memo — Bola faqat props o‘zgaganda chiziladi ==========
const BolaMemoBilan = React.memo(function BolaMemoBilan({ title }) {
  console.log("🟢 [Yechim] Bola chizildi");
  return <p style={{ color: "#666" }}>{title}</p>;
});

function OtaMemoBilan() {
  const [count, setCount] = useState(0);
  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#080" }}>Yechim (React.memo)</h4>
      <p>Tugmani bosing — konsolda faqat birinchi marta "Bola chizildi" chiqadi</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <BolaMemoBilan title="Salom" />
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

export default function ReactMemoDemo() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2>1. React.memo</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Ota re-render bo‘lganda bola ham keraksiz qayta chiziladi. React.memo buni oldini oladi.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <OtaMemosiz />
        <OtaMemoBilan />
      </div>
    </section>
  );
}
