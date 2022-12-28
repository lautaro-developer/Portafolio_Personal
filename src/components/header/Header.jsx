import { Li } from "../Li/Li";
import { Enlace } from "../enlaces/a";
import { Ul } from "../Ul/Ul";
import { useState } from "react";
import Btn2 from "../btn/Btn2";
import Id from "./headerId";
import { Sesiones } from "./sesiones";

import "../../css/header/ul/ul.css";
import "../../css/header/sobreMi/sobreMi.css";
import "../../css/header/li_sobreMi/li_sobreMi.css";
import "../../css/header/li__nombre/li__nombre.css";
import "../../css/header/Header/Header.css";
import "../../css/btn/Btn.css";
import Navbar from "../movile/header/a";
import { Btn } from "../btn/Btn";

export default function Header({ accion, valor }) {
  const [open, setOpen] = useState(false);

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
                    <button onClick={accion}>{valor}</button>
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
