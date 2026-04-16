import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

interface ComponentProps {
  setRegisterOrLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function LoginComponent({ setRegisterOrLogin }: ComponentProps) {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["pkmn_token"]);
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin() {
    // const url = import.meta.env.BASE_URL;
    const url = "http://localhost:5000";
    console.log(url);
    axios
      .post(
        `${url}/login`,
        {
          user: userRef.current?.value,
          password: passwordRef.current?.value,
        },
        { withCredentials: true },
      )
      .then(function (response) {
        if (response.data) {
          console.log(response.data);
          if (cookies["pkmn_token"]) {
          navigate("/home");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="h-80 flex flex-col items-center justify-evenly w-full px-4 relative">
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
        onClick={() => handleLogin()}
      >
        Iniciar Sesión
      </button>
      <div className="text-xs text-mauve-600 flex items-center justify-end absolute bottom-0 right-2">
        <button onClick={() => setRegisterOrLogin(null)}>◄ Volver</button>
      </div>
    </div>
  );
}
