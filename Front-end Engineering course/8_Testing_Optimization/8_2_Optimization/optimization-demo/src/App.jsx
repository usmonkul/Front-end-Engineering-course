import ReactMemoDemo from "./demos/ReactMemoDemo";
import UseMemoDemo from "./demos/UseMemoDemo";
import UseCallbackDemo from "./demos/UseCallbackDemo";

function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>React Optimizatsiya Demo</h1>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Har bir bo‘limda <strong>Muammo</strong> (chap) va <strong>Yechim</strong> (o‘ng) yonma-yon.
          Brauzer konsolini oching (F12) va tugmalarni bosing — re-renderlarni kuzating.
        </p>
      </header>

      <ReactMemoDemo />
      <UseMemoDemo />
      <UseCallbackDemo />

      <footer style={{ marginTop: "2rem", padding: "1rem", color: "#888", fontSize: "0.9rem" }}>
        React_optimization.md darsligi bilan birga ishlatish uchun.
      </footer>
    </div>
  );
}

export default App;
