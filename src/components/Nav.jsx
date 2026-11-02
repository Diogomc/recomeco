import { useState } from "react";

const items = [
  ["#cursos", "Cursos"],
  ["#empregos", "Empregos"],
  ["#curriculo", "Currículo"],
  ["#comida", "Comida a R$ 1"],
  ["#empreender", "Empreender"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Principal">
      <div className="wrap nav-in">
        <a href="#inicio" className="brand">
          Recomeço
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
        <ul id="menu" className={open ? "open" : ""}>
          {items.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
