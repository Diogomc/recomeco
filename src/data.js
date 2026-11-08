
export const mapsLink = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ", São José dos Campos, SP")}`;

export const links = {
  qualifica: "https://www.sjc.sp.gov.br/qualifica",
  pat: "https://www.sjc.sp.gov.br",
  senai: "https://sp.senai.br",
  senac: "https://www.sp.senac.br/senac-sao-jose-dos-campos",
  mei: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor",
  bomPrato: "https://www.desenvolvimentosocial.sp.gov.br/acoes-de-protecao-social/programa-bom-prato/",
};

export const courseProviders = [
  {
    id: "qualifica",
    nome: "Qualifica São José",
    tipo: "Prefeitura",
    resumo:
      "Programa da Prefeitura com cursos gratuitos de capacitação, feitos em parceria com Senai, Senac, Sesi, Sebrae e Cephas. Em abril de 2026 havia 4.314 vagas em 22 cursos.",
    exemplos: [
      "Marketing Digital e Redes Sociais (Sebrae)",
      "Inteligência Artificial Descomplicada (Senac)",
      "Logística Essencial (Cephas)",
      "Assistente Despachante Aduaneiro (Cephas)",
      "Instalador de Ar-Condicionado Split (Senai)",
    ],
    requisito:
      "Em geral: ter 18 anos ou mais e morar em São José dos Campos. Quando há mais inscritos que vagas, a seleção considera a situação socioeconômica.",
    como: "Inscreva-se pelo site da Prefeitura ou ligue para a Central 156.",
    endereco: null,
    link: links.qualifica,
    linkTexto: "Ver cursos abertos",
    foco: "cursos",
  },
  {
    id: "senai",
    nome: "SENAI São José dos Campos",
    tipo: "Indústria",
    resumo:
      "Cursos técnicos e de aprendizagem industrial para entrar na indústria. Há vagas gratuitas por processo seletivo (gratuidade regimental).",
    exemplos: ["Cursos técnicos", "Aprendizagem industrial", "Cursos livres e EAD"],
    requisito: "Idade mínima e escolaridade variam por curso. Confira o edital.",
    como: "Inscrição pelo portal sp.senai.br: escolha a unidade e o curso. Não pague taxa para garantir vaga em curso gratuito.",
    endereco: "Rua Pedro Rachid, 304, Santana",
    mapa: "SENAI Rua Pedro Rachid 304 Santana",
    link: links.senai,
    linkTexto: "Abrir portal do SENAI",
    foco: "cursos",
  },
  {
    id: "senac",
    nome: "Senac São José dos Campos",
    tipo: "Comércio e serviços",
    resumo:
      "Cursos de comércio, tecnologia, beleza, gastronomia e gestão. O Programa Senac de Gratuidade oferece vagas gratuitas para quem atende aos critérios.",
    exemplos: ["Técnicas de vendas", "Informática e tecnologia", "Beleza e estética", "Gastronomia"],
    requisito: "Os critérios do Programa de Gratuidade constam em cada edital.",
    como: "Atendimento de segunda a sexta, das 8h às 21h, e sábado, das 8h às 12h. E-mail: sjcampos@sp.senac.br.",
    endereco: "Rua Saigiro Nakamura, 400, Vila Industrial",
    mapa: "Senac Rua Saigiro Nakamura 400 Vila Industrial",
    link: links.senac,
    linkTexto: "Ver cursos do Senac",
    foco: "cursos",
  },
];

export const patInfo = {
  nome: "PAT – Posto de Atendimento ao Trabalhador",
  endereco: "Praça Afonso Pena, 175, Centro",
  horario: "Segunda a sexta, das 8h às 16h",
  gratuito: "Todos os serviços são gratuitos para quem busca vaga e para empresas.",
  levar: [
    "Carteira de trabalho (digital ou física)",
    "Documento de identidade com foto",
    "Currículo impresso (não é obrigatório, mas ajuda)",
  ],
  passos: [
    {
      t: "Veja as vagas do dia",
      d: "A Prefeitura publica a lista todos os dias, a partir das 18h, no site oficial. Confira se alguma combina com você antes de sair de casa.",
    },
    {
      t: "Separe os documentos",
      d: "Carteira de trabalho, documento com foto e o currículo impresso.",
    },
    {
      t: "Vá ao PAT",
      d: "Compareça no horário de atendimento e peça o encaminhamento para a vaga escolhida.",
    },
  ],
  areas: [
    "Atendimento e telemarketing",
    "Cozinha, restaurante e lanchonete",
    "Limpeza e conservação",
    "Construção civil",
    "Vendas e comércio",
    "Indústria e técnicos",
  ],
};

export const empreender = {
  titulo: "Sala do Empreendedor",
  endereco: "Rua José de Alencar, 123, Centro (4º andar do Paço Municipal)",
  horario: "Segunda a sexta, das 8h15 às 16h30, com distribuição de senhas",
  texto:
    "Quer trabalhar por conta própria? A Sala do Empreendedor ajuda a abrir e regularizar o negócio, inclusive o MEI. A cidade é conhecida pela abertura de empresas em poucas horas.",
  mei: "O cadastro como MEI também pode ser feito online, no Portal do Empreendedor, sem pagar nada.",
};

export const food = {
  bomPrato: [
    {
      nome: "Bom Prato – unidade fixa",
      endereco: "Rua Rubião Júnior, 228, Centro",
      mapa: "Bom Prato Rua Rubião Júnior 228",
      info: "Funciona todos os dias, inclusive fins de semana e feriados.",
    },
    {
      nome: "Bom Prato Móvel",
      endereco: "Parque Nova Esperança, Rua José Benedito Pereira da Silva, 112 (zona leste, perto do CRAS)",
      mapa: "Rua José Benedito Pereira da Silva 112 Parque Nova Esperança",
      info: "O caminhão muda de bairro a cada alguns meses. Já passou pelo Dom Pedro I e pelo Campo dos Alemães. Confirme o ponto atual no site da Prefeitura ou ligando para a Central 156.",
    },
  ],
  precos: [
    { item: "Almoço", valor: "R$ 1" },
    { item: "Jantar (onde houver)", valor: "R$ 1" },
    { item: "Café da manhã (onde houver)", valor: "R$ 0,50" },
    { item: "Crianças até 6 anos", valor: "Grátis" },
  ],
  prato: "Arroz, feijão, proteína, guarnição, salada, fruta e bebida, com cardápio feito por nutricionistas.",
  apoio: [
    {
      t: "CRAS da sua região",
      d: "Ponto de entrada para programas sociais. Lá você faz ou atualiza o Cadastro Único (CadÚnico), que abre portas para benefícios e programas de alimentação.",
    },
    {
      t: "Banco de Alimentos e Fundo Social",
      d: "O Banco de Alimentos da Prefeitura (Galo Branco, zona leste) distribui para entidades cadastradas: creches, casas de repouso e instituições. Para receber ajuda como família, procure o CRAS.",
    },
    {
      t: "Central 156",
      d: "Telefone da Prefeitura para tirar dúvidas e descobrir qual serviço atende o seu bairro.",
    },
  ],
};

export const curriculoDicas = [
  { t: "Uma página só", d: "Quem recruta lê muitos currículos por dia. Seja direto e deixe o mais importante no começo." },
  { t: "Contatos que funcionam", d: "Telefone com WhatsApp e um e-mail simples, com seu nome. Evite apelidos." },
  { t: "Comece pelo que já fez", d: "Liste experiências da mais recente para a mais antiga. Bicos, trabalho voluntário e ajuda na família também contam." },
  { t: "Mostre resultado", d: "Em vez de “atendia clientes”, escreva “atendia 40 clientes por dia”. Números ajudam." },
  { t: "Sem foto, sem RG, sem CPF", d: "Esses dados só são pedidos na contratação. Nome, contato e bairro bastam." },
  { t: "Releia antes de imprimir", d: "Confira nomes, datas e telefone. Peça para alguém ler também." },
];

export const dicasPrimeiroEmprego = [
  "Sem experiência? Destaque cursos, trabalhos voluntários e habilidades como organização e pontualidade.",
  "Cursos do Qualifica, Senai e Senac entram na seção “Cursos” do currículo.",
  "Leve o currículo impresso ao PAT: ele agiliza o encaminhamento.",
];

export const renda = {
  texto:
    "A cidade já tem iniciativas que unem meio ambiente e renda. Algumas servem para alimentação e aprendizado, outras para trabalho. Veja o que existe e como se aproximar.",
  itens: [
    {
      t: "Hortas urbanas e comunitárias",
      o: "O Programa Hortas Urbanas, da Prefeitura desde 2009, está em 56 escolas municipais, com oficinas de plantio, compostagem e biodigestores. Na UBS Dom Pedro (zona sul), funcionários e frequentadores cuidam de uma horta comunitária: em agosto de 2025, cerca de 90 pessoas receberam hortaliças e ervas de graça.",
      c: "Para pedir uma horta no seu bairro ou espaço comunitário, ligue para a Central 156 ou para (12) 3947-8727. As notícias oficiais falam de alimento e educação, não de venda. Se quiser vender o que produz, comece pela seção Empreender.",
      f: "https://sjc.sp.gov.br/noticias/2026/maio/04/programa-hortas-urbanas-chega-a-mais-de-50-escolas-da-cidade/",
    },
    {
      t: "Reciclagem e cooperativas",
      o: "A coleta seletiva atende 100% da área urbana. Separar os recicláveis gera renda para as cooperativas de catadores. Nas feiras livres, os contêineres azuis são para recicláveis e os marrons para lixo orgânico.",
      c: "Separe o lixo em casa e, nas feiras, use o contêiner certo. Para saber como trabalhar numa cooperativa, pergunte na Central 156.",
      f: "https://www.sjc.sp.gov.br/noticias/2022/junho/20/servico-de-coleta-seletiva-e-implantado-em-feiras-livres/",
    },
    {
      t: "Artesanato e negócio próprio",
      o: "Em 2018, a Prefeitura e o Sebrae ofereceram aos artesãos um curso de gestão empreendedora (26 horas, 9 encontros) sobre preço, plano de negócio e vendas pelas redes sociais. Cerca de 180 artesãos cadastrados na Sutaco participaram.",
      c: "Essa informação é de 2018. Pergunte na Central 156 ou na Diretoria de Turismo da Prefeitura se há cadastro de artesãos e nova turma.",
      f: "https://www.sjc.sp.gov.br/noticias/2018/outubro/3/prefeitura-incentiva-capacitacao-empreendedora-de-artesaos/",
    },
    {
      t: "Compostagem e economia circular",
      o: "Reaproveitar resíduos é tema da cidade: as hortas escolares fazem oficinas de compostagem, e em outubro de 2025 a Prefeitura, a Urbam e o Instituto Valoriza Resíduos reuniram mais de 100 pessoas num seminário sobre resíduos e economia circular.",
      c: "Não encontramos curso aberto ao público sobre o tema. Pergunte na Central 156 e acompanhe as notícias da Prefeitura.",
      f: "https://www.sjc.sp.gov.br/noticias/2025/outubro/07/seminario-debate-residuos-solidos-e-economia-circular/",
    },
  ],
};
