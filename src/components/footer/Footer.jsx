import { faLink } from "@fortawesome/free-solid-svg-icons";

import { Enlace } from "../enlaces/a";
import { Icons } from "../Icons/Icons";

import "../../css/footer/div__footer/div__footer.css";
import "../../css/footer/div__footer/a__redes.css";

export default function Footer() {
  let gh = "https://github.com/lautaro-developer";
  let tw = "https://twitter.com";

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
              href="as"
              icono={<Icons icons={faLink} />}
              valor="Linkedin"
              target={true}
            />
          }
        </p>
      </div>
    </footer>
  );
}
