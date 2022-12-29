import { Li } from "../Li/Li";
import { Enlace } from "../enlaces/a";
import { Ul } from "../Ul/Ul";
import { useState } from "react";
import Btn2 from "../btn/Btn2";
import Id from "./headerId";
import { Sesiones } from "./sesiones";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../../css/header/ul/ul.css";
import "../../css/header/sobreMi/sobreMi.css";
import "../../css/header/li_sobreMi/li_sobreMi.css";
import "../../css/header/li__nombre/li__nombre.css";
import "../../css/header/Header/Header.css";
import "../../css/btn/Btn.css";
import Navbar from "../movile/header/a";
import { Btn } from "../btn/Btn";
import { Icons } from "../Icons/Icons";
import "./btn.css";

export default function Header({ accion, valor }) {
  const [open, setOpen] = useState(false);

  function Tema() {
    if (valor === "dark")
      return (
        <button className="light" onClick={accion}>
          {<Icons icons={faSun} />}
          {localStorage.setItem("hola", valor)}
        </button>
      );
    else
      return (
        <button className="dark" onClick={accion}>
          {<Icons icons={faMoon} />}
          {localStorage.setItem("hola", valor)}
        </button>
      );
  }

  const click = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <Ul
          estilos="lista"
          valor={
            <div>
              <Li estilo="li__nombre" valor="Alonso Diaz Ruben Lautaro" />
              <Li
                estilo="li_sobreMi"
                valor={
                  <div>
                    <Id Enlace={Enlace} Valor={Sesiones} estilos="sobreMi" />
                    <Btn2 click={click} open={open} />
                    <Navbar open={open} />
                    <Tema />
                  </div>
                }
              />
            </div>
          }
        />
      </nav>
    </header>
  );
}
