import { useCallback, useEffect, useState } from "react";

export default function BrokenEffect() {
  const [data, setData] = useState<number[]>([]);
  const [query, setQuery] = useState("initial");

  const fetchData = useCallback(() => {
    console.log("🔁 Fetching data for", query);
    setData([1, 2, 3]);
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <h2>Query: {query}</h2>
      <button
        onClick={() => {
          console.log("tocado");
          setQuery("updated");
        }}
      >
        Change Query
      </button>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
