import React from "react";
import axios from "axios";

interface ComponentProps {
  setRegisterOrLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function LoginComponent({ setRegisterOrLogin }: ComponentProps) {
  function handleRegister() {
    const url = "http://localhost:5000/";
    axios.get(url).then((response) => {
      alert(`recibido con exito : ${response.data}`);
    });
  }

  return (
    <div className="h-80 flex flex-col items-center justify-evenly w-full px-4 relative">
      <input
        className="border border-mauve-400 rounded-xl p-2 text-md w-full"
        type="text"
        placeholder="Usuario"
      />
      <input
        className="border border-mauve-400 rounded-xl p-2 text-md w-full"
        type="password"
        placeholder="Constraseña"
      />
      <button
        className="bg-mauve-400 rounded-xl px-6 py-2 w-2/3"
        onClick={() => handleRegister()}
      >
        Iniciar Sesión
      </button>
      <div className="text-xs text-mauve-600 flex items-center justify-end absolute bottom-0 right-2">
        <button onClick={() => setRegisterOrLogin(null)}>◄ Volver</button>
      </div>
    </div>
  );
}
