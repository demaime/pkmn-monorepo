import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import RegisterAndLogin from "./pages/RegisterAndLogin.tsx";
import { CookiesProvider } from "react-cookie";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <RegisterAndLogin /> },
  { path: "/home", element: <Home /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </StrictMode>,
);
