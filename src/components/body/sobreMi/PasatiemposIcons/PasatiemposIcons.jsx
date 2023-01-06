import {
  faGamepad,
  faBook,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";

import { Icons } from "../../../Icons/Icons.jsx";

export function PasatiemposIcons() {
  let pasatiempos = [faGamepad, faBook, faHeadphonesSimple];

  return pasatiempos.map((i) => {
    return (
      <div>
        <Icons icons={i} size="2x" key={i} />
      </div>
    );
  });
}
