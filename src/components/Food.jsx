import { food, mapsLink, links } from "../data.js";

export default function Food() {
  return (
    <section className="section section-night" id="comida">
      <div className="wrap">
        <h2>Uma refeição completa por R$ 1</h2>
        <p className="section-lead">
          O Bom Prato, programa do Governo de São Paulo com apoio da Prefeitura, serve comida
          balanceada a preço simbólico. {food.prato}
        </p>

        <div className="price-row">
          {food.precos.map((p) => (
            <div className="price" key={p.item}>
              <strong>{p.valor}</strong>
              <span>{p.item}</span>
            </div>
          ))}
        </div>

        <div className="place-grid">
          {food.bomPrato.map((b) => (
            <article className="place" key={b.nome}>
              <h3>{b.nome}</h3>
              <p className="place-addr">{b.endereco}</p>
              <p>{b.info}</p>
              <a className="btn btn-sun" href={mapsLink(b.mapa)} target="_blank" rel="noreferrer">
                Ver no mapa
              </a>
            </article>
          ))}
        </div>

        <p className="note light">
          Horários variam por unidade.{" "}
          <a href={links.bomPrato} target="_blank" rel="noreferrer">
            Consulte o programa Bom Prato
          </a>{" "}
          ou ligue para a Central 156 antes de ir.
        </p>

        <h3 className="h-small apoio-title">Outras formas de apoio</h3>
        <div className="apoio">
          {food.apoio.map((a) => (
            <div key={a.t}>
              <h4>{a.t}</h4>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
