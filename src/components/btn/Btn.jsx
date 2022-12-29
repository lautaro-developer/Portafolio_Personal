export let Btn = ({ className, titulo, i, href = "#" }) => {
  return (
    <a href={href} className={className} rel="noreferrer">
      {i} {titulo}
    </a>
  );
};
