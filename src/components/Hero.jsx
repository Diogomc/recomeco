export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <svg
        className="hero-art"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E1B3D" />
            <stop offset="0.45" stopColor="#274A7A" />
            <stop offset="0.75" stopColor="#E58A5B" />
            <stop offset="1" stopColor="#FFC857" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#FFE9A8" stopOpacity="0.95" />
            <stop offset="0.35" stopColor="#FFC857" stopOpacity="0.45" />
            <stop offset="1" stopColor="#FFC857" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#35557F" />
            <stop offset="1" stopColor="#1F3A63" />
          </linearGradient>
          <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <rect width="1440" height="760" fill="url(#sky)" />

        {/* estrelas que somem com o dia */}
        <g fill="#fff" opacity="0.7">
          <circle cx="140" cy="70" r="1.6" />
          <circle cx="260" cy="150" r="1.2" />
          <circle cx="420" cy="60" r="1.4" />
          <circle cx="610" cy="120" r="1.1" />
          <circle cx="780" cy="48" r="1.5" />
          <circle cx="980" cy="110" r="1.2" />
          <circle cx="1180" cy="66" r="1.6" />
          <circle cx="1330" cy="160" r="1.2" />
        </g>

        {/* sol */}
        <circle cx="1030" cy="520" r="330" fill="url(#glow)" />
        <circle cx="1030" cy="520" r="96" fill="#FFE29A" />

        {/* nuvens em faixas */}
        <g fill="#FFF4D6" opacity="0.28">
          <rect x="640" y="400" width="300" height="10" rx="5" />
          <rect x="1120" y="360" width="240" height="9" rx="4.5" />
          <rect x="180" y="440" width="260" height="9" rx="4.5" />
        </g>

        {/* avião subindo: a cidade do Vale é polo aeroespacial */}
        <g transform="translate(1210 235) rotate(-16)">
          <rect x="-460" y="-1.5" width="440" height="3" fill="url(#trail)" />
          <ellipse cx="0" cy="0" rx="74" ry="8.5" fill="#F7F3EA" />
          <polygon points="-6,0 -40,-46 -24,-46 22,-3" fill="#E8E1D0" />
          <polygon points="-6,0 -40,46 -24,46 22,3" fill="#D9D1BD" />
          <polygon points="-58,-2 -80,-26 -68,-26 -40,-2" fill="#E8E1D0" />
          <polygon points="-58,2 -80,24 -68,24 -40,2" fill="#D9D1BD" />
          <rect x="30" y="-3.5" width="26" height="3" rx="1.5" fill="#274A7A" />
        </g>

        {/* serra ao fundo */}
        <path
          d="M0 560 L120 520 L230 548 L360 490 L470 536 L600 500 L720 546 L860 505 L1000 552 L1130 512 L1260 548 L1360 520 L1440 540 L1440 760 L0 760 Z"
          fill="url(#hillFar)"
        />

        {/* skyline */}
        <g fill="#13244A">
          <rect x="40" y="560" width="46" height="200" />
          <rect x="92" y="520" width="38" height="240" />
          <rect x="136" y="580" width="60" height="180" />
          <rect x="204" y="540" width="34" height="220" />
          <rect x="246" y="590" width="70" height="170" />
          <rect x="324" y="500" width="44" height="260" />
          <rect x="376" y="560" width="54" height="200" />
          <rect x="438" y="600" width="64" height="160" />
          <rect x="510" y="530" width="36" height="230" />
          <rect x="554" y="575" width="58" height="185" />
          <rect x="620" y="610" width="70" height="150" />
          <rect x="1120" y="590" width="58" height="170" />
          <rect x="1186" y="548" width="40" height="212" />
          <rect x="1234" y="600" width="64" height="160" />
          <rect x="1306" y="565" width="42" height="195" />
          <rect x="1356" y="605" width="84" height="155" />
          {/* torre */}
          <rect x="344" y="470" width="4" height="30" />
        </g>
        {/* janelas acesas */}
        <g fill="#FFC857" opacity="0.85">
          <rect x="100" y="540" width="5" height="7" />
          <rect x="112" y="560" width="5" height="7" />
          <rect x="334" y="520" width="5" height="7" />
          <rect x="350" y="545" width="5" height="7" />
          <rect x="518" y="552" width="5" height="7" />
          <rect x="1196" y="570" width="5" height="7" />
          <rect x="1314" y="590" width="5" height="7" />
          <rect x="212" y="565" width="5" height="7" />
          <rect x="386" y="590" width="5" height="7" />
        </g>

        {/* chão e caminho */}
        <rect y="690" width="1440" height="70" fill="#0B1733" />
        <path d="M700 760 L840 690 L1080 690 L1260 760 Z" fill="#E58A5B" opacity="0.55" />
        <path d="M780 760 L890 690 L1030 690 L1140 760 Z" fill="#FFC857" opacity="0.5" />

        {/* pessoas caminhando em direção ao sol */}
        <g fill="#0B1733">
          <g transform="translate(900 660)">
            <circle cx="0" cy="-34" r="7" />
            <rect x="-6" y="-26" width="12" height="28" rx="6" />
            <rect x="-6" y="0" width="5" height="22" rx="2.5" />
            <rect x="1" y="0" width="5" height="22" rx="2.5" />
          </g>
          <g transform="translate(940 664) scale(0.92)">
            <circle cx="0" cy="-34" r="7" />
            <path d="M-8 -26 h16 l3 28 h-22 z" />
            <rect x="-5" y="2" width="4" height="20" rx="2" />
            <rect x="1" y="2" width="4" height="20" rx="2" />
          </g>
          <g transform="translate(980 668) scale(0.8)">
            <circle cx="0" cy="-34" r="7" />
            <rect x="-6" y="-26" width="12" height="28" rx="6" />
            <rect x="-6" y="0" width="5" height="22" rx="2.5" />
            <rect x="1" y="0" width="5" height="22" rx="2.5" />
          </g>
        </g>
      </svg>

      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-content">
        <p className="hero-place">São José dos Campos</p>
        <h1>
          O seu próximo passo
          <br />
          começa aqui.
        </h1>
        <p className="hero-lead">
          Cursos gratuitos, vagas de emprego, um modelo de currículo e refeições a R$ 1. Tudo
          reunido, com endereço e horário, para você agir hoje.
        </p>
        <div className="hero-actions">
          <a className="btn btn-sun" href="#cursos">
            Ver cursos gratuitos
          </a>
          <a className="btn btn-ghost" href="#curriculo">
            Montar meu currículo
          </a>
        </div>
      </div>
    </header>
  );
}
