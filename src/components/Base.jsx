<<<<<<< HEAD
import "../css/base.css";
import "../css/responsive.css";
=======
import { useState, useEffect } from "react";
>>>>>>> pruebas

import Header from "./header/Header";
import ProyectoPlantilla from "./body/Proyectos/proyectos";
import SobreMi from "./body/sobreMi/SobreMi";
import Lenguajes from "./body/lenguajes/Lenguajes";
import Footer from "./footer/Footer";

import "./theme.css";
<<<<<<< HEAD

import { useEffect, useState } from "react";

export default function Inicio() {
  let tema = localStorage.getItem('hola')
  const [theme, setTheme] = useState("dark");


=======
import "../css/base.css";

export default function Inicio() {
  const [theme, setTheme] = useState("dark");

>>>>>>> pruebas
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div id="inicio" className={theme}>
<<<<<<< HEAD
      <Header accion={toggleTheme} valor={theme} />
=======
      <Header tema={theme} dale={toggleTheme} />
>>>>>>> pruebas
      <ProyectoPlantilla theme={theme} />
      <SobreMi theme={theme} />
      <Lenguajes theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
