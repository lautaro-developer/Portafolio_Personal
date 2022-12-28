import imgTiendaVirtual from "../../../img/pagEcommerse.png";
import imgTodoList from "../../../img/todoList.png";
import ProyectoPlantilla from "./plantilla";

let titulo;
let descripcion;
let alt;
let img;
let gh;
let dm;

export default function proyectos({ theme }) {
  return (
    <div className="div__contenedorCard">
      {<Proyecto1 theme={theme} />}
      {<Proyecto2 theme={theme}/>}
    </div>
  );
}

function Proyecto1({ theme }) {
  titulo = "Pag Tienda Virtual";
  descripcion = `Pagina diseñada para el curso de Alura Latam. Este cuenta con guardado en localStorage pero no es visible al usuario`;
  alt = "Pag tienda Virtual";
  img = imgTiendaVirtual;
  gh = "https://github.com/lautaro-developer/Ecommerce";
  dm = "https://lautaro-developer.github.io/Ecommerce/";

  return (
    <ProyectoPlantilla
      titulo={titulo}
      descripcion={descripcion}
      alt={alt}
      img={img}
      gh={gh}
      dm={dm}
      theme={theme}
    />
  );
}

function Proyecto2({ theme }) {
  titulo = "Pag TodoList";
  descripcion =
    "App para guardar sus notas por fecha, Este es un proyecto echo por un curso de Aluta Latam, hace uso de localStorage para guardar la informacion";
  img = imgTodoList;
  alt = "Pag TodoList";
  gh = "https://github.com/lautaro-developer/TODO-App";
  dm = "https://lautaro-developer.github.io/TODO-App/";

  return (
    <ProyectoPlantilla
      titulo={titulo}
      descripcion={descripcion}
      alt={alt}
      img={img}
      gh={gh}
      dm={dm}
      theme={theme}
    />
  );
}
