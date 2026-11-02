import { courseProviders, mapsLink } from "../data.js";

export default function Courses() {
  return (
    <section className="section" id="cursos">
      <div className="wrap">
        <h2>Cursos gratuitos em São José</h2>
        <p className="section-lead">
          Três portas para se qualificar sem pagar. As vagas mudam o tempo todo, então confira o
          prazo de inscrição no site de cada uma.
        </p>

        <div className="course-list">
          {courseProviders.map((c) => (
            <article className="course" key={c.id}>
              <div className="course-head">
                <h3>{c.nome}</h3>
                <span className="tag">{c.tipo}</span>
              </div>
              <p>{c.resumo}</p>

              <h4>Exemplos de cursos</h4>
              <ul className="plain">
                {c.exemplos.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <dl className="facts">
                <div>
                  <dt>Quem pode</dt>
                  <dd>{c.requisito}</dd>
                </div>
                <div>
                  <dt>Como fazer</dt>
                  <dd>{c.como}</dd>
                </div>
                {c.endereco && (
                  <div>
                    <dt>Endereço</dt>
                    <dd>{c.endereco}</dd>
                  </div>
                )}
              </dl>

              <div className="card-actions">
                <a className="btn btn-solid" href={c.link} target="_blank" rel="noreferrer">
                  {c.linkTexto}
                </a>
                {c.mapa && (
                  <a className="btn btn-line" href={mapsLink(c.mapa)} target="_blank" rel="noreferrer">
                    Ver no mapa
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="note">
          Os exemplos do Qualifica são da lista divulgada pela Prefeitura em abril de 2026. A oferta
          muda a cada nova turma.
        </p>
      </div>
    </section>
  );
}
