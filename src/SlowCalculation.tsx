import { useMemo, useState } from "react";

export function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log('renderizando todo el componete')
  const expensiveValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i;
    }
    console.log('rendirazando solo cuando el input cambia')

    const totalChars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const readingTimeMinutes = words / 200;
    const avgWordLength =
      words > 0 ? text.replace(/\s+/g, "").length / words : 0;

    return {
      totalChars,
      words,
      readingTimeMinutes,
      avgWordLength,
      total,
    };
  }, [text]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <textarea
        value={text}
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
        placeholder="Type something"
      />
      <p> Characters: {expensiveValue.totalChars}</p>
      <p> Words: {expensiveValue.words}</p>
      <p> Reading Time: {expensiveValue.readingTimeMinutes.toFixed(2)}</p>
      <p> AVG Word length: {expensiveValue.avgWordLength.toFixed(2)}</p>
    </div>
  );
}
