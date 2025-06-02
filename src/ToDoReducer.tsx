import { useRef, useReducer } from "react";

type Task = {
  name: string;
  completed: boolean;
};

const reducer = (state: Task[], action: { type: string; payload?: any }) => {
    console.log("payload", action.payload);
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.payload.name, completed: false }];
    case "TOGGLE":
      return state.map((task, index) =>
        index === action.payload.index
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE":
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
};

export function ToDoReducer() {
  const [list, dispatch] = useReducer(reducer, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleComplete = (index: number) => {
    dispatch({ type: "TOGGLE", payload: { index } });
  };

  const handleAdd = () => {
    if (!inputRef.current) return;
    dispatch({ type: "ADD", payload: { name: inputRef.current.value } });
    inputRef.current.value = "";
  };

  const handleDelete = (index: number) => {
    dispatch({ type: "DELETE", payload: { index } });
  };

  return (
    <div className="flex flex-col gap-5">
      <h1>Lista de tareas</h1>
      <div className="flex gap-3 content-around">
        <input ref={inputRef} type="text" name="" id="" />
        <button className="flex-1/3" onClick={handleAdd}>
          add
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {list?.map((task, index) => (
          <div className="flex justify-between items-center" key={index}>
            <p
              className={`task ${task.completed ? "line-through" : ""}`}
              key={index}
              onClick={() => handleComplete(index)}
            >
              {task.name}
            </p>
            <span onClick={() => handleDelete(index)}>🗑️</span>
          </div>
        ))}
      </div>
    </div>
  );
}
