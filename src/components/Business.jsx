import { empreender, links, mapsLink } from "../data.js";

export default function Business() {
  return (
    <section className="section" id="empreender">
      <div className="wrap business">
        <div>
          <h2>Quer abrir o seu negócio?</h2>
          <p className="section-lead">{empreender.texto}</p>
          <p>{empreender.mei}</p>
        </div>
        <div className="biz-card">
          <h3>{empreender.titulo}</h3>
          <dl className="facts">
            <div>
              <dt>Endereço</dt>
              <dd>{empreender.endereco}</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>{empreender.horario}</dd>
            </div>
          </dl>
          <div className="card-actions">
            <a className="btn btn-solid" href={links.mei} target="_blank" rel="noreferrer">
              Abrir MEI online
            </a>
            <a
              className="btn btn-line"
              href={mapsLink("Paço Municipal Rua José de Alencar 123")}
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
