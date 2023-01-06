import { Parrafo } from "../../../Parrafo/Parrafo.jsx"

export function PasatiemposParrafos() {
  let parrafoPasatiempos = ["videjuegos", "leer", "musica"];
  return parrafoPasatiempos.map((v) => <Parrafo valor={v} />);
}
