import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./a.css"

export default function Btn2({ open, click }) {
  return !open ? (
    <div className="desktop">
      <FontAwesomeIcon icon={faBars} onClick={click} />
    </div>
  ) : (
    <div className="desktop">
      <FontAwesomeIcon icon={faTimes} onClick={click} />
    </div>
  );
}
