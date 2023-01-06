export default function Id({ Valor, Enlace, estilos }) {
  return (
    <div className={estilos}>
      {Valor.map((e) => {
        let link = e.split(" ").join("").toLowerCase();
        return <Enlace valor={e} key={link} href={`#${link}`} />;
      })}
    </div>
  );
}
