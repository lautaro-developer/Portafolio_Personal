import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Inicio from "./components/Base";


const rootElement = document.getElementById(`root`);
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Inicio />
  </StrictMode>
);
