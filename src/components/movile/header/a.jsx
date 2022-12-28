import { NavbarWrapper } from "./navBar";
import Id from "../../header/headerId";
import { Sesiones } from "../../header/sesiones";
import React from "react";
import { Enlace } from "../../enlaces/a";
import "./a.css";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <Id Enlace={Enlace} Valor={Sesiones} estilos="a" />
    </NavbarWrapper>
  );
}

export default Navbar;
