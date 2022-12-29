import React from "react";
import ReactDOM from "react-dom/client";
import Inicio from "./components/Base";
import Lenguajes from "./components/body/lenguajes/Lenguajes";
import ProyectoPlantilla from "./components/body/Proyectos/plantilla";
import SobreMi from "./components/body/sobreMi/SobreMi";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);
