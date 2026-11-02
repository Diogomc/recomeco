import { patInfo, mapsLink, links } from "../data.js";

export default function Jobs() {
  return (
    <section className="section section-tint" id="empregos">
      <div className="wrap">
        <h2>Onde encontrar emprego</h2>
        <p className="section-lead">
          O PAT é o caminho mais direto da cidade: lista vagas reais de empresas locais e faz o
          encaminhamento, sem custo.
        </p>

        <div className="jobs-grid">
          <div className="pat-card">
            <h3>{patInfo.nome}</h3>
            <dl className="facts light">
              <div>
                <dt>Endereço</dt>
                <dd>{patInfo.endereco}</dd>
              </div>
              <div>
                <dt>Horário</dt>
                <dd>{patInfo.horario}</dd>
              </div>
              <div>
                <dt>Custo</dt>
                <dd>{patInfo.gratuito}</dd>
              </div>
            </dl>
            <div className="card-actions">
              <a className="btn btn-sun" href={mapsLink("PAT Praça Afonso Pena 175")} target="_blank" rel="noreferrer">
                Ver no mapa
              </a>
              <a className="btn btn-ghost" href={links.pat} target="_blank" rel="noreferrer">
                Ver vagas do dia
              </a>
            </div>
          </div>

          <div>
            <h3 className="h-small">Como funciona</h3>
            <ol className="steps">
              {patInfo.passos.map((p) => (
                <li key={p.t}>
                  <strong>{p.t}</strong>
                  <span>{p.d}</span>
                </li>
              ))}
            </ol>

            <h3 className="h-small">Leve com você</h3>
            <ul className="check">
              {patInfo.levar.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="h-small areas-title">Áreas com mais vagas no PAT</h3>
        <ul className="chips">
          {patInfo.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="note">
          Nos boletins recentes do PAT aparecem muitas vagas em atendimento, cozinha, limpeza,
          construção e vendas, entre centenas de ofertas por dia. A lista completa muda diariamente.
        </p>
      </div>
    </section>
  );
}
