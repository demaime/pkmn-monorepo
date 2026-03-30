import React, { useRef } from "react";
import axios from "axios";

interface ComponentProps {
  setRegisterOrLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function RegisterComponent({
  setRegisterOrLogin,
}: ComponentProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleRegister() {
    const url = "http://localhost:5000";
    axios
      .post(`${url}/register`, {
        email: emailRef.current?.value,
        user: userRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="h-80 flex flex-col items-center justify-evenly w-full px-4 relative">
      <input
        ref={emailRef}
        className="border border-mauve-400 rounded-xl p-2 text-md w-full"
        type="email"
        placeholder="Correo Electrónico"
      />
      <input
        ref={userRef}
        className="border border-mauve-400 rounded-xl p-2 text-md w-full"
        type="text"
        placeholder="Usuario"
      />
      <input
        ref={passwordRef}
        className="border border-mauve-400 rounded-xl p-2 text-md w-full"
        type="password"
        placeholder="Constraseña"
      />
      <button
        className="bg-mauve-400 rounded-xl px-6 py-2 w-2/3"
        onClick={() => handleRegister()}
      >
        Registrarme
      </button>
      <div className="text-xs text-mauve-600 flex items-center justify-end absolute bottom-0 right-2">
        <button onClick={() => setRegisterOrLogin(null)}>◄ Volver</button>
      </div>
    </div>
  );
}
