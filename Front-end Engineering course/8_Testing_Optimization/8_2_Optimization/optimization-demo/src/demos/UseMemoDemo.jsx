import { useState, useMemo } from "react";

// Qimmat hisob-kitobni taqlid qilish (simulyatsiya)
function qimmatHisob(items, filterText) {
  console.log("qimmatHisob ishga tushdi");
  const start = performance.now();
  const result = items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  while (performance.now() - start < 5) {} // ~5ms kechikish
  return result;
}

// ========== MUAMMO: Har re-render da filter qayta ishlaydi ==========
function RoyxatMemosiz({ items: initialItems }) {
  const [filterText, setFilterText] = useState("");
  const [count, setCount] = useState(0);

  const filtered = qimmatHisob(initialItems, filterText);

  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#c00" }}>Muammo (useMemo yo‘q)</h4>
      <p>Hisob tugmasini bosing — filter har safar qayta ishlaydi (sekin)</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <input
        placeholder="Qidirish..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginTop: "0.5rem", padding: "0.25rem" }}
      />
      <ul style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        {filtered.slice(0, 5).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {filtered.length > 5 && <li>... va yana {filtered.length - 5} ta</li>}
      </ul>
    </div>
  );
}

// ========== YECHIM: useMemo — faqat items/filterText o‘zgaganda hisobla ==========
function RoyxatMemoBilan({ items: initialItems }) {
  const [filterText, setFilterText] = useState("");
  const [count, setCount] = useState(0);

  const filtered = useMemo(
    () => qimmatHisob(initialItems, filterText),
    [initialItems, filterText]
  );

  return (
    <div style={cardStyle}>
      <h4 style={{ color: "#080" }}>Yechim (useMemo)</h4>
      <p>Hisob tugmasini bosing — filter qayta ishlamaydi (tez)</p>
      <button onClick={() => setCount(count + 1)}>Hisob: {count}</button>
      <input
        placeholder="Qidirish..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginTop: "0.5rem", padding: "0.25rem" }}
      />
      <ul style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        {filtered.slice(0, 5).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {filtered.length > 5 && <li>... va yana {filtered.length - 5} ta</li>}
      </ul>
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

const SAMPLE_ITEMS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `Element ${i}`,
}));

export default function UseMemoDemo() {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2>2. useMemo</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Qimmat hisob-kitob har re-render da qayta bajariladi. useMemo faqat dependency o‘zgaganda hisoblaydi.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <RoyxatMemosiz items={SAMPLE_ITEMS} />
        <RoyxatMemoBilan items={SAMPLE_ITEMS} />
      </div>
    </section>
  );
}
