export default function Id({ Valor, Enlace, estilos }) {
  return (
    <div className={estilos}>
      {Valor.map((e) => {
        let link = e.split(" ").join("").toLowerCase();
        return <Enlace valor={e} id={link} href={`#${link}`} />;
      })}
    </div>
  );
}
