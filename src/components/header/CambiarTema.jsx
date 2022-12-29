import { motion } from "framer-motion";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Icons } from "../Icons/Icons";
import "../../css/header/cambiarTema/cambiarTema.css";

export default function CambiarTema({ valor, toggleTheme }) {
  if (valor === "dark")
    return (
      <motion.button
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.2, borderBottom: "1px solid" }}
        animate={{ color: "#FFFF00" }}
        className="CambiarTema"
        onClick={toggleTheme}
      >
        {<Icons icons={faSun} />}
        {localStorage.setItem("hola", valor)}
      </motion.button>
    );
  else
    return (
      <motion.button
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.2, borderBottom: "1px solid" }}
        className="CambiarTema"
        onClick={toggleTheme}
      >
        {<Icons icons={faMoon} />}
        {localStorage.setItem("hola", valor)}
      </motion.button>
    );
}
