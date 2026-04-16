import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["pkmn_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cookies);
    if (!cookies["pkmn_token"]) {
      navigate("/login");
    }
  }, []);

  function handleLogOut() {
    removeCookie("pkmn_token", { path: "/" });
    navigate("/login");
    console.log("Cerrando sesión...");
  }

  return (
    <div className="h-screen bg-mauve-200 flex flex-col p-2 items-center justify-center righteous-regular inset-ring-4 inset-ring-mauve-300">
      <p>Home</p>
      <button
        onClick={() => handleLogOut()}
        className="mt-12 p-2 border-2 rounded hover:bg-mauve-300"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
