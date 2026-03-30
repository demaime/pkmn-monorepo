import { useState } from "react";
import "./App.css";
import RegisterInput from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  const [registerOrLogin, setRegisterOrLogin] = useState<string | null>(null);

  return (
    <div className="h-screen bg-mauve-200 flex flex-col p-2 items-center justify-center righteous-regular inset-ring-4 inset-ring-mauve-300">
      <div className="p-2 border rounded-lg border-mauve-300 flex flex-col items-center justify-center">
        <div className="flex p-4 gap-4 w-full items-center justify-center">
          <h1 className="text-mauve-600 text-5xl font-black">PKMN</h1>
          <img src="/logo.png" alt="pokeballs" className="w-16 h-16" />
        </div>
        <div className="h-80 w-80 flex flex-col items-center justify-evenly">
          {!registerOrLogin && (
            <>
              <button
                onClick={() => setRegisterOrLogin("register")}
                className="bg-mauve-300/90 hover:bg-mauve-400 transition-all duration-100 rounded-xl px-6 py-2 h-24 w-50 tracking-wider"
              >
                REGISTRARME
              </button>
              <button
                className="bg-mauve-300/90 hover:bg-mauve-400 transition-all duration-100 rounded-xl px-6 py-2 h-24 w-50 tracking-wider"
                onClick={() => setRegisterOrLogin("login")}
              >
                INICIAR SESION
              </button>{" "}
            </>
          )}
          {registerOrLogin === "register" ? (
            <RegisterInput setRegisterOrLogin={setRegisterOrLogin} />
          ) : registerOrLogin === "login" ? (
            <LoginComponent setRegisterOrLogin={setRegisterOrLogin} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
