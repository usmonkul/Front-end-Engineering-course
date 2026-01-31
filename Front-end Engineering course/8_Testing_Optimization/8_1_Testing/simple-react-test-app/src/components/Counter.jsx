import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        aria-label="Increment"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        aria-label="Decrement"
      >
        −
      </button>
    </div>
  );
}
