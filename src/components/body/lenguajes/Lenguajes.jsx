import { motion } from "framer-motion";
import { Icons } from "../../Icons/Icons";

import { LenguajesIcons } from "./lenguajesIcons/LenguajesIcons.jsx"

import "../../../css/body/div__lenguajes/div__lenguajes.css";
import "../../../css/body/div__lenguajes/div__iconContenedor/div__iconContenedor.css";

import "../../../css/body/div__lenguajes/div__lenguajesIcons/div.css";
import "../../../css/body/div__lenguajes/div__lenguajesIcons/div__lenguajesIcons.css";

import "../../../css/body/div__lenguajes/div__tituloLenguajes/div__tituloLenguajes.css";
import "../../../css/responsive.css";

export default function Lenguajes({ theme }) {

  return (
    <div id="lenguajes" className="div__lenguajes">
      <div className="contenedorLe">
        <div className={`div__tituloLenguajes ${theme}`}>
          <h2>Lenguajes</h2>
        </div>
        <div className="div__iconContenedor">
          <div className={`div__lenguajesIcons ${theme}`}>
<<<<<<< HEAD
            {LenguajesIcons.map((i) => (
              <motion.div whileHover={{ scale: 1.3 }}>
=======
            {lenguajes.map((i) => (
              <motion.div whileHover={{ scale: 1.3 }} key={i.iconName}>
>>>>>>> main
                <Icons icons={i} size="3x" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
