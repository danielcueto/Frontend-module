import { useState, useEffect } from "react";

export function KeyboardControlledCounter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        setCount(count + 1);
      } else if (event.key === "ArrowDown") {
        setCount(count - 1); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);;
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Has contado {count} veces</h1>
      <p className="mb-2">Press the up arrow key to increase the count.</p>
      <p className="mb-4">Press the down arrow key to decrease the count.</p>
      <div className="flex gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
