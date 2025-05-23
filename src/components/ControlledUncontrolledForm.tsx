import { useRef, useState, type ChangeEvent } from "react";

export function ControlledUncontrolledForm() {
  const [userInput, setUserInput] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(userInput);
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    alert(userInput);
    alert(passwordRef.current?.value);
  };
  return (
    <div className="flex flex-col w-100 gap-3 p-8 border-2 rounded-2xl bg-amber-50 box-border">
      <label htmlFor="user">Username (Controlled)</label>
      <input
        id="user"
        type="text"
        value={userInput}
        onChange={handleUserInput}
        className="border-2 rounded-2xl px-2 py-1 bg-white"
      />
      <label htmlFor="pass">Password (Uncontrolled)</label>
      <input className="border-2 rounded-2xl px-2 py-1 bg-white" type="password" name="" ref={passwordRef} id="pass" />
      <button onClick={handleClick} className="bg-gray-500 rounded-3xl py-2 ">
        Loggin
      </button>
    </div>
  );
}
