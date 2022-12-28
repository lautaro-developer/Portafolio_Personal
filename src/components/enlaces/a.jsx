/**
 *
 * @href "Direccion web o de seciones"
 * @valor "Contenido del elemento"
 * @id "La key (Se indentifica con un valor unico, por el valor)"
 * @target "Para abrir una pagina en otra pestaña, (Este usa una operacion ternaria por si target={true} te envia a otra pagina, por defecto esta en false)"
 * @returns
 */
export const Enlace = ({ href = "#", valor, id, target = false, estilos }) => {
  return target ? (
    <a className={estilos} key={id} href={href} target="_blank" rel="noreferrer">
      {valor}
    </a>
  ) : (
    <a  className={estilos} key={id} href={href}>
      {valor}
    </a>
  );
};
