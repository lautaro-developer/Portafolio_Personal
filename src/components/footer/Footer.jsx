<<<<<<< HEAD
import { Enlace } from "../enlaces/a";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../btn/Btn";
=======
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { Enlace } from "../enlaces/a";
import { Icons } from "../Icons/Icons";
>>>>>>> main

import "../../css/footer/div__footer/div__footer.css";
import "../../css/footer/div__footer/a__redes.css";

<<<<<<< HEAD
export default function Footer({ theme }) {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";
=======
export default function Footer() {
  const gh = "https://github.com/lautaro-developer";
  const tw = "https://twitter.com";
>>>>>>> main
  const li = "https://www.linkedin.com/in/ruben-lautaro-alonso-diaz/"

  return (
    <footer>
      <div className="div__footer">
        <p>
          Si queres ver el codigo esta en{" "}
          {
            <Enlace
              href={gh}
              icono={<Icons icons={faLink} />}
              valor="Github"
              target={true}
            />
          }
          . Si queres contactarme aqui te dejo mis redes{" "}
          {
            <Enlace
              href={tw}
              icono={<Icons icons={faLink} />}
              valor="Twitter"
              target={true}
            />
          }{" "}
          o si queres por{" "}
          {
            <Enlace
              href={li}
<<<<<<< HEAD
              valor={
                <Btn titulo="Linkedin" i={<FontAwesomeIcon icon={faLink} />} />
              }
=======
              icono={<Icons icons={faLink} />}
              valor="Linkedin"
>>>>>>> main
              target={true}
            />
          }
        </p>
      </div>
    </footer>
  );
}
