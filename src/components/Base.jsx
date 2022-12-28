import "../css/base.css";
import "../css/responsive.css";

import Header from "./header/Header";
import ProyectoPlantilla from "./body/Proyectos/proyectos";
import SobreMi from "./body/sobreMi/SobreMi";
import Lenguajes from "./body/lenguajes/Lenguajes";
import Footer from "./footer/Footer";

import "./theme.css"

import { useEffect, useState } from "react";



export default function Inicio() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div id="inicio" className={theme}>
      <Header accion={toggleTheme} valor={theme}/>
      <ProyectoPlantilla theme={theme}/>
      <SobreMi theme={theme}/>
      <Lenguajes theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}
