import { Enlace } from "../enlaces/a";
import "../../css/footer/div__footer/div__footer.css";
import "../../css/footer/div__footer/a__redes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { Btn } from "../btn/Btn";
export default function Footer({ theme }) {
  let github = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";

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
              href="as"
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
