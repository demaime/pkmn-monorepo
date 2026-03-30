import { useState } from "react";
import "./App.css";
import RegisterInput from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { motion } from "motion/react";

function App() {
  const [registerOrLogin, setRegisterOrLogin] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen bg-mauve-200 flex flex-col p-2 items-center justify-center righteous-regular inset-ring-4 inset-ring-mauve-300">
      <div className="p-2 border rounded-lg border-mauve-300 flex flex-col items-center justify-center">
        <motion.div className="flex p-4 gap-4 w-full items-center justify-center">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-mauve-600 text-5xl font-black"
          >
            {"PKMN".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.img
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="/logo.png"
            alt="pokeballs"
            className="w-16 h-16"
          />
        </motion.div>
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
