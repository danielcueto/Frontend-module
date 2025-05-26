import { useRef, useState } from "react";

export function SpecialForm() {
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    const nameValid = refs.name.current?.checkValidity();
    const emailValid = refs.email.current?.checkValidity();
    const passwordValid = refs.password.current?.checkValidity();

    if (!nameValid) {
      newErrors.name = refs.name.current?.title || "";
      refs.name.current?.focus();
    } else if (!emailValid) {
      newErrors.email = refs.email.current?.validationMessage || "";
      refs.email.current?.focus();
    } else if (!passwordValid) {
      newErrors.password = refs.password.current?.validationMessage || "";
      refs.password.current?.focus();
    } else {
      alert("Formulario válido. Enviando...");
    }

    setErrors(newErrors);
  };
  return (
    <form
      className="flex flex-col w-100 gap-3 p-8 border-2 rounded-2xl bg-amber-50 box-border"
      onSubmit={handleSubmit}
      noValidate
    >
      <label htmlFor="user">Name</label>
      <input
        required
        id="user"
        type="text"
        pattern="[A-Za-z\s]{3,}"
        className="border-2 rounded-2xl px-2 py-1 bg-white"
        title="Name must be at least 3 characters long and contain only letters and spaces."
        placeholder="Enter your name"
        ref={refs.name}
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}

      <label htmlFor="email">Email</label>
      <input
        required
        className="border-2 rounded-2xl px-2 py-1 bg-white"
        type="email"
        title="Please enter a valid email address."
        ref={refs.email}
        id="email"
        placeholder="Enter your email"
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}

      <label htmlFor="pass">Password</label>
      <input
        required
        className="border-2 rounded-2xl px-2 py-1 bg-white"
        type="password"
        minLength={10}
        ref={refs.password}
        title="Password must be at least 10 characters long."
        id="pass"
        placeholder="Enter your password"
      />
      {errors.password && <span className="text-red-500">{errors.password}</span>}
      <button type="submit" className="bg-gray-500 rounded-3xl py-2 ">
        Login
      </button>
    </form>
  );
}
