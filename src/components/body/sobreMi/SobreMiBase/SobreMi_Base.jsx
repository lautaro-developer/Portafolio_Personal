import { Parrafo } from "../../../Parrafo/Parrafo.jsx"

export function SobreMi_Base({ theme }) {
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
