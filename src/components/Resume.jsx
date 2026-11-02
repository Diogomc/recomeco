import { useState } from "react";
import { curriculoDicas, dicasPrimeiroEmprego } from "../data.js";

const emptyJob = { empresa: "", cargo: "", periodo: "", descricao: "" };
const emptyEdu = { curso: "", instituicao: "", ano: "" };

const sample = {
  nome: "Maria da Silva",
  cargo: "Auxiliar administrativo",
  telefone: "(12) 90000-0000",
  email: "maria.silva@email.com",
  bairro: "Jardim Satélite, São José dos Campos",
  resumo:
    "Pessoa organizada e pontual, com experiência em atendimento ao público. Busco minha oportunidade na área administrativa.",
  jobs: [
    {
      empresa: "Mercado Bom Preço",
      cargo: "Atendente de caixa",
      periodo: "2023 a 2025",
      descricao: "Atendimento a cerca de 60 clientes por dia, conferência de valores e organização do caixa.",
    },
  ],
  edus: [{ curso: "Ensino médio completo", instituicao: "E.E. Prof. Exemplo", ano: "2022" }],
  cursos: "Informática básica (Qualifica São José), Técnicas de vendas (Senac)",
  habilidades: "Atendimento, organização, pacote Office, trabalho em equipe",
};

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function Resume() {
  const [d, setD] = useState({
    nome: "",
    cargo: "",
    telefone: "",
    email: "",
    bairro: "",
    resumo: "",
    jobs: [{ ...emptyJob }],
    edus: [{ ...emptyEdu }],
    cursos: "",
    habilidades: "",
  });

  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });
  const setItem = (list, i, k) => (e) => {
    const next = d[list].map((x, idx) => (idx === i ? { ...x, [k]: e.target.value } : x));
    setD({ ...d, [list]: next });
  };
  const addItem = (list, blank) => setD({ ...d, [list]: [...d[list], { ...blank }] });
  const removeItem = (list, i) => setD({ ...d, [list]: d[list].filter((_, idx) => idx !== i) });

  const isEmpty = !d.nome && !d.cargo;
  const show = isEmpty ? sample : d;
  const split = (s) =>
    s
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);

  return (
    <section className="section section-tint" id="curriculo">
      <div className="wrap">
        <h2>Monte seu currículo</h2>
        <p className="section-lead">
          Preencha ao lado e veja o resultado na hora. Quando terminar, imprima ou salve em PDF. Seus
          dados ficam só no seu navegador: nada é enviado a ninguém.
        </p>

        <div className="resume-layout">
          <form className="resume-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Seus dados</legend>
              <Field label="Nome completo">
                <input value={d.nome} onChange={set("nome")} autoComplete="name" />
              </Field>
              <Field label="Vaga que você procura">
                <input value={d.cargo} onChange={set("cargo")} placeholder="Ex.: Auxiliar de cozinha" />
              </Field>
              <div className="two">
                <Field label="Telefone com WhatsApp">
                  <input value={d.telefone} onChange={set("telefone")} inputMode="tel" autoComplete="tel" />
                </Field>
                <Field label="E-mail">
                  <input value={d.email} onChange={set("email")} type="email" autoComplete="email" />
                </Field>
              </div>
              <Field label="Bairro e cidade">
                <input value={d.bairro} onChange={set("bairro")} placeholder="Ex.: Centro, São José dos Campos" />
              </Field>
              <Field label="Resumo (2 ou 3 frases)">
                <textarea rows="3" value={d.resumo} onChange={set("resumo")} />
              </Field>
            </fieldset>

            <fieldset>
              <legend>Experiências</legend>
              {d.jobs.map((j, i) => (
                <div className="repeat" key={i}>
                  <div className="two">
                    <Field label="Empresa ou local">
                      <input value={j.empresa} onChange={setItem("jobs", i, "empresa")} />
                    </Field>
                    <Field label="Função">
                      <input value={j.cargo} onChange={setItem("jobs", i, "cargo")} />
                    </Field>
                  </div>
                  <Field label="Período">
                    <input value={j.periodo} onChange={setItem("jobs", i, "periodo")} placeholder="Ex.: 2022 a 2024" />
                  </Field>
                  <Field label="O que você fazia">
                    <textarea rows="2" value={j.descricao} onChange={setItem("jobs", i, "descricao")} />
                  </Field>
                  {d.jobs.length > 1 && (
                    <button type="button" className="link-btn" onClick={() => removeItem("jobs", i)}>
                      Remover esta experiência
                    </button>
                  )}
                </div>
              ))}
              <button type="button" className="btn btn-line small" onClick={() => addItem("jobs", emptyJob)}>
                Adicionar experiência
              </button>
            </fieldset>

            <fieldset>
              <legend>Estudos</legend>
              {d.edus.map((e, i) => (
                <div className="repeat" key={i}>
                  <Field label="Curso ou escolaridade">
                    <input value={e.curso} onChange={setItem("edus", i, "curso")} placeholder="Ex.: Ensino médio completo" />
                  </Field>
                  <div className="two">
                    <Field label="Escola ou instituição">
                      <input value={e.instituicao} onChange={setItem("edus", i, "instituicao")} />
                    </Field>
                    <Field label="Ano de conclusão">
                      <input value={e.ano} onChange={setItem("edus", i, "ano")} inputMode="numeric" />
                    </Field>
                  </div>
                  {d.edus.length > 1 && (
                    <button type="button" className="link-btn" onClick={() => removeItem("edus", i)}>
                      Remover este estudo
                    </button>
                  )}
                </div>
              ))}
              <button type="button" className="btn btn-line small" onClick={() => addItem("edus", emptyEdu)}>
                Adicionar estudo
              </button>
            </fieldset>

            <fieldset>
              <legend>Cursos e habilidades</legend>
              <Field label="Cursos extras (separe por vírgula)">
                <input value={d.cursos} onChange={set("cursos")} />
              </Field>
              <Field label="Habilidades (separe por vírgula)">
                <input value={d.habilidades} onChange={set("habilidades")} />
              </Field>
            </fieldset>
          </form>

          <div className="resume-side">
            <div className="resume-bar">
              <span>{isEmpty ? "Exemplo de como fica" : "Seu currículo"}</span>
              <button className="btn btn-solid small" onClick={() => window.print()}>
                Imprimir ou salvar em PDF
              </button>
            </div>

            <article className="resume-paper" aria-label="Pré-visualização do currículo">
              <h3>{show.nome || "Seu nome"}</h3>
              <p className="r-role">{show.cargo}</p>
              <p className="r-contact">
                {[show.telefone, show.email, show.bairro].filter(Boolean).join("  |  ")}
              </p>

              {show.resumo && (
                <>
                  <h4>Resumo</h4>
                  <p>{show.resumo}</p>
                </>
              )}

              {show.jobs.some((j) => j.empresa || j.cargo) && (
                <>
                  <h4>Experiência</h4>
                  {show.jobs
                    .filter((j) => j.empresa || j.cargo)
                    .map((j, i) => (
                      <div className="r-item" key={i}>
                        <p>
                          <strong>{j.cargo}</strong>
                          {j.empresa && ` – ${j.empresa}`}
                          {j.periodo && <em> ({j.periodo})</em>}
                        </p>
                        {j.descricao && <p>{j.descricao}</p>}
                      </div>
                    ))}
                </>
              )}

              {show.edus.some((e) => e.curso) && (
                <>
                  <h4>Formação</h4>
                  {show.edus
                    .filter((e) => e.curso)
                    .map((e, i) => (
                      <p key={i}>
                        <strong>{e.curso}</strong>
                        {e.instituicao && ` – ${e.instituicao}`}
                        {e.ano && ` (${e.ano})`}
                      </p>
                    ))}
                </>
              )}

              {split(show.cursos).length > 0 && (
                <>
                  <h4>Cursos</h4>
                  <ul>
                    {split(show.cursos).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </>
              )}

              {split(show.habilidades).length > 0 && (
                <>
                  <h4>Habilidades</h4>
                  <ul>
                    {split(show.habilidades).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </div>
        </div>

        <h3 className="h-small tips-title">Seis dicas para um currículo que é lido</h3>
        <div className="tips">
          {curriculoDicas.map((t) => (
            <div key={t.t}>
              <h4>{t.t}</h4>
              <p>{t.d}</p>
            </div>
          ))}
        </div>

        <div className="first-job">
          <h3>Primeiro emprego?</h3>
          <ul className="check">
            {dicasPrimeiroEmprego.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
