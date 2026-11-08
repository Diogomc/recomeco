import { renda } from "../data.js";

export default function Sustainable() {
  return (
    <section className="section section-tint" id="renda-sustentavel">
      <div className="wrap">
        <h2>Renda sustentável</h2>
        <p className="section-lead">{renda.texto}</p>

        <div className="renda-grid">
          {renda.itens.map((i) => (
            <article className="renda" key={i.t}>
              <h3>{i.t}</h3>
              <p>{i.o}</p>
              <h4>Como se aproximar</h4>
              <p>{i.c}</p>
              <a href={i.f} target="_blank" rel="noreferrer">
                Ler a notícia da Prefeitura
              </a>
            </article>
          ))}
        </div>

        <p className="note">
          Reunimos apenas o que consta em notícias oficiais. Programas e prazos mudam, então
          confirme na Central 156 antes de se deslocar.
        </p>
      </div>
    </section>
  );
}