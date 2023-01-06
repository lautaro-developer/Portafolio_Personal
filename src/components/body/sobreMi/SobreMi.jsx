import { Parrafo } from "../../Parrafo/Parrafo";
import { PasatiemposIcons } from "./PasatiemposIcons/PasatiemposIcons"
import { PasatiemposParrafos } from "./PasatiemposParrafo/PasatiemposParrafo"
import { SobreMi_Base } from "./SobreMiBase/SobreMi_Base.jsx"

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
            <SobreMi_Base theme={theme}/>
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
