export function Btn({ className, titulo, i, href }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {i} {titulo}
    </a>
  );
}
