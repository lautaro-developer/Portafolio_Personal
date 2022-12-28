import {
  faGamepad,
  faBook,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";

import { Icons } from "../../Icons/Icons";
import { Parrafo } from "../../Parrafo/Parrafo";

import imgNutria from "../../../img/nutria.jpg";

import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__contenedorCardSobreMi.css";
import "../../../css/body/div__contenedorSobreMi/div__contenedorSobreMi.css";
import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__descripcionSobreMi/div__descripcionSobreMi.css";

import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__presentarce.css";
import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__pasatiemposContenedor/div__pasatiemposContenedor.css";

import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__tituloPasatiempos/div__tituloPasatiempos.css";
import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__pasatiemposContenedorParrafo/div__pasatiemposContenedorParrafo.css";
import "../../../css/body/div__contenedorSobreMi/div__contenedorCardSobreMi/div__imgSobreMi/div__imgSobreMi.css";

import "../../../css/body/div__contenedorSobreMi/div__contenedorPasatiempos/div__contenedorPasatiempos.css";
import "../../../css/body/div__contenedorSobreMi/div__pasatiempos/div__pasatiempos.css";

function PasatiemposIcons() {
  let pasatiempos = [faGamepad, faBook, faHeadphonesSimple];

  return pasatiempos.map((i) => {
    return (
      <div>
        <Icons icons={i} size="2x" key={i} />
      </div>
    );
  });
}

function PasatiemposParrafos() {
  let parrafoPasatiempos = ["videjuegos", "leer", "musica"];

  return parrafoPasatiempos.map((v) => <Parrafo valor={v} />);
}

function SobreMiBase({ theme }) {
  let estudie =
    "Estudie de manera autodidacta sosteniendome de recursos gratis en internet.";

  let cursos =
    "Gracias a la oportunidad del curso de alura latam fortaleci los conocimientos que tuve previamente, siempre estoy dispuesto a aprender otras tecnologias que tengan o no que ver con el desarrollo web.";

  let empezarProgramar =
    "Comenze estudiando el desarrollo web a mitad de 2020 cuando  estaba la pandemia, anteriormente (2019) ya habia tocado el tema del desarrollo web pero no tan aprofundidad.";
  let sobreMi = [estudie, cursos, empezarProgramar];

  return sobreMi.map((i) => {
    return (
      <div key={i} className={`div__descripcion ${theme}`}>
        <Parrafo valor={i} />
      </div>
    );
  });
}

export default function SobreMi({ theme }) {
  return (
    <div className="div__contenedorSobreMi" id="sobremi">
      <div className="div__contenedorCardSobreMi">
        <div className="div__imgSobreMi">
          <img src={imgNutria} alt="Foto de mi cara" />
        </div>
        <div className="div__presentarce">
          <div>
            <p>Hola soy</p>
            <h1>Alonso Diaz Ruben Lautaro</h1>
            <p>Desarrollador web Front-End</p>
          </div>

          <div className={`div__descripcionSobreMi`}>
            <SobreMiBase theme={theme}/>
          </div>
        </div>
      </div>
      <div className="div__pasatiempos">
        <div className={`div__tituloLenguajes ${theme}`}>
          <h2>Pasatiempos</h2>
        </div>
        <div className="div__contenedorPasatiempos">
          <div className={`div__lenguajesIcons ${theme}`}>
            <PasatiemposIcons />
          </div>
          <div className={`div__lenguajesIcons div__pasatiemposContenedorParrafo ${theme}`}>
            <PasatiemposParrafos />
          </div>
        </div>
      </div>
    </div>
  );
}
