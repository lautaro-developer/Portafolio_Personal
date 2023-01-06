import { Enlace } from "../enlaces/a";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Btn } from "../btn/Btn";

import "../../css/footer/div__footer/div__footer.css";
import "../../css/footer/div__footer/a__redes.css";

export default function Footer({ theme }) {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";
  const li = "https://www.linkedin.com/in/ruben-lautaro-alonso-diaz/"

  return (
    <footer>
      <div className="div__footer">
        <p>
          Si queres ver el codigo esta en{" "}
          {
            <Enlace
              href={github}
              valor={
                <Btn titulo="Github" i={<FontAwesomeIcon icon={faLink} />} />
              }
              target={true}
            />
          }
          . Si queres contactarme aqui te dejo mis redes{" "}
          {
            <Enlace
              href={tw}
              valor={<Btn titulo="Twitter" i={<FontAwesomeIcon icon={faLink} />} />}
              target={true}
            />
          }{" "}
          o si queres por{" "}
          {
            <Enlace
              href={li}
              valor={
                <Btn titulo="Linkedin" i={<FontAwesomeIcon icon={faLink} />} />
              }
              target={true}
            />
          }
        </p>
      </div>
    </footer>
  );
}
