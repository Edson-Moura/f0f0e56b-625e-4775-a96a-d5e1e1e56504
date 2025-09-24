import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🚀 Main.tsx: Iniciando aplicação");

const rootElement = document.getElementById("root");
console.log("🚀 Main.tsx: Elemento root encontrado:", !!rootElement);

if (rootElement) {
  console.log("🚀 Main.tsx: Criando root e renderizando App");
  createRoot(rootElement).render(<App />);
} else {
  console.error("❌ Main.tsx: Elemento root não encontrado!");
}
