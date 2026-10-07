const conciergeWhatsApp = "https://wa.me/5511982129999";
const conciergeHref = `${conciergeWhatsApp}?text=${encodeURIComponent("Olá, Concierge Resid! Gostaria de atendimento sobre o Resid Nas Rocas.")}`;
const transferWhatsAppHref = `${conciergeWhatsApp}?text=${encodeURIComponent("Olá, Concierge Resid! Gostaria de solicitar meu transfer para o lançamento Nas Rocas.\n\nData de chegada:\nHorário de chegada:\nNúmero do voo:\nAeroporto de chegada:\nHotel onde estarei hospedado:\nNúmero de passageiros (PAX):")}`;

const experiences = [
  { title: "Caminhar pela Rua das Pedras", image: "/buzios-rua-das-pedras.jpg", alt: "Orla de Búzios junto à Rua das Pedras", text: "Um passeio clássico pelo centro de Búzios, entre lojas, restaurantes e o movimento da cidade.", note: <>Caminhe sem pressa e faça uma parada para tomar um sorvete na <strong>Maria Maria</strong>.</> },
  { title: "Mirante do Pai Vitório", image: "/buzios-mirante-pai-vitorio.jpg", alt: "Vista do Mirante do Pai Vitório em Búzios", text: "Um dos pontos mais especiais para contemplar Búzios de cima.", note: <>Vale incluir no roteiro para ter uma vista privilegiada da <strong>Ilha Rasa</strong>, onde está o Nas Rocas.</> },
  { title: "Pôr do sol no Porto da Barra", image: "/buzios-porto-da-barra.jpg", alt: "Pôr do sol entre barcos no Porto da Barra", text: "Uma sugestão para aproveitar o fim de tarde à beira-mar, entre restaurantes, bares e o clima mais gostoso de Búzios." },
  { title: "Amanhecer na Praia dos Ossos", image: "/buzios-praia-dos-ossos.jpg", alt: "Vista da Praia dos Ossos em Búzios", text: "Para quem gosta de começar o dia cedo, a Praia dos Ossos ao amanhecer é uma das formas mais bonitas de encontrar Búzios ainda tranquila." },
];

const benefits = [
  { title: "Nami", text: "Cozinha japonesa em um ambiente descontraído, ideal para uma noite de sabores, drinks e bons encontros em Búzios.", benefit: "Reserva através do Concierge + Welcome Drink." },
  { title: "Grupo Belli Belli", text: "Um dos points do Porto da Barra, à beira-mar, para combinar boa gastronomia, drinks e o clima mais gostoso de Búzios.", benefit: "Reserva através do Concierge + Welcome Drink." },
  { title: "Gisele", text: "Um clássico de Búzios, com cozinha caiçara de alto nível e aquele tipo de mesa que os locais sabem onde encontrar.", benefit: "Reserva através do Concierge + 1 drink." },
];

const conciergeTips = [
  { title: "74 Restaurante", cuisine: "Frutos do mar · Mediterrânea · Contemporânea", paragraphs: ["Por muito tempo, a casa teve o chef argentino Gonzalo à frente da cozinha. Mesmo após sua saída, o restaurante mantém um excelente padrão e um cardápio que vale a visita."] },
  { title: "Mistico Restaurant", cuisine: "Brasileira · Frutos do mar · Internacional", paragraphs: ["Uma das nossas dicas para quem quer comer bem em Búzios. Tudo que fazem é muito bem executado, mas vale um destaque especial para o bar: os drinks são excelentes."], tip: "Sente no balcão e deixe o bartender ajudar na escolha." },
  { title: "A Galeria", cuisine: "Contemporânea · Autoral", paragraphs: ["A Galeria reúne gastronomia e arte em um dos cenários mais bonitos de Búzios, com vista panorâmica para a enseada da Ferradura.", "A cozinha valoriza ingredientes locais, pescados da região, vegetais cultivados na própria horta e produtos brasileiros, em pratos leves e bem elaborados.", "Vale reservar com antecedência e aproveitar o restaurante com calma, especialmente no fim de tarde."] },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function ConciergeLink({ label = "Conversar com o Concierge" }: { label?: string }) { return <a className="guide-cta" href={conciergeHref}>{label}<Arrow /></a>; }

export default function Home() {
  return (
    <main id="top">
      <header className="site-header"><a className="brand-header" href="#top" aria-label="Resid — início"><img src="resid-logo.png" alt="Resid" /></a><nav aria-label="Navegação principal"><a href="#olhar-resid">Búzios</a><a href="#onde-comer">Onde comer</a><a href="#onde-ficar">Onde ficar</a><a href="#transfer">Transfer</a></nav><a className="header-cta" href="#onde-comer">Ver curadoria <Arrow /></a></header>

      <section className="hero guide-hero" aria-labelledby="hero-title"><img className="hero-image" src="nas-rocas-home-dji0877.jpg" alt="Vista aérea do Resid Nas Rocas e do mar de Búzios" /><div className="hero-wash" aria-hidden="true" /><div className="hero-content"><p className="eyebrow">ViajaR · Resid Nas Rocas</p><h1 id="hero-title">Búzios pelo<br /><em>olhar Resid.</em></h1><div className="hero-intro"><strong>Um jeito de viver Búzios com mais tempo, beleza e boas descobertas.</strong><span>Reunimos lugares, sabores, hospedagens e pequenos detalhes para acompanhar você antes e durante a jornada Nas Rocas.</span></div><a className="pill-link" href="#olhar-resid"><span>Conhecer a curadoria</span><Arrow /></a></div></section>

      <section className="guide-section experiences-section" id="olhar-resid"><div className="guide-heading"><span>01</span><div><p className="kicker">BÚZIOS PELO OLHAR RESID</p><h2>Um roteiro para<br /><em>sentir a cidade.</em></h2></div></div><div className="experience-grid">{experiences.map((item, index) => <article key={item.title} className="experience-card"><div className="experience-image"><img src={item.image} alt={item.alt} /></div><div className="experience-content"><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>{item.note && <p className="editorial-note">{item.note}</p>}</div></article>)}</div></section>

      <section className="image-interlude"><div><p className="kicker">CURADORIA RESID</p><strong>Escolhas que fazem<br />a viagem acontecer.</strong></div></section>

      <section className="guide-section dining-section" id="onde-comer"><div className="guide-heading light"><span>02</span><div><p className="kicker">CURADORIA RESID · ONDE COMER</p><h2>Lugares para<br /><em>comer sem pressa.</em></h2></div></div><div className="benefit-grid">{benefits.map((item) => <article className="benefit-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><div className="benefit-copy"><span>Para quem está com o Resid</span><strong>{item.benefit}</strong></div><ConciergeLink label="Descobrir este lugar" /></article>)}</div></section>

      <section className="guide-section tips-section" id="dicas-concierge"><div className="guide-heading"><span>03</span><div><p className="kicker">DICAS DO CONCIERGE RESID</p><h2>Mesas que valem<br /><em>a visita.</em></h2></div></div><div className="tips-list">{conciergeTips.map((item) => <article key={item.title}><div className="tip-title"><p>{item.cuisine}</p><h3>{item.title}</h3></div><div className="tip-copy">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{item.tip && <p className="concierge-note"><strong>Dica do Concierge:</strong> {item.tip}</p>}</div></article>)}</div></section>

      <section className="guide-section stay-section" id="onde-ficar"><div className="guide-heading light"><span>04</span><div><p className="kicker">HOSPEDAGEM</p><h2>Onde ficar<br /><em>em Búzios.</em></h2><p className="heading-intro">Opções selecionadas pelo Resid para o período do lançamento.</p></div></div><div className="stay-grid"><article><div className="stay-image"><img src="/hotel-zendaya.jpg" alt="Área externa do Zendaya Resort" /></div><div className="stay-content"><p className="property-label">ZENDAYA</p><h3>Quartos Classic</h3><span>24 a 27 de setembro</span><hr /><h3>Golf Villa</h3><span>25 a 27 de setembro</span><p>As Golf Villas acomodam até <strong>4 pessoas</strong>.</p><ConciergeLink /></div></article><article><div className="stay-image"><img src="/hotel-arete.jpeg" alt="Entrada do Hotel Aretê em Búzios" /></div><div className="stay-content"><p className="property-label">HOTEL ARETÊ</p><h3>Suítes Master Marina</h3><span>25 a 27 de setembro</span><ConciergeLink /></div></article></div></section>

      <section className="guide-section transfer-section" id="transfer"><div className="guide-heading"><span>05</span><div><p className="kicker">TRANSFER · CHEGUE A BÚZIOS COM O RESID</p><h2>Chegar também<br /><em>faz parte da viagem.</em></h2></div></div><div className="transfer-layout"><div className="transfer-copy"><p>Para começar sem pressa, o Resid organiza uma operação de transfer com atendimento personalizado.</p><p>Carro reservado, cuidado em cada detalhe e alguns mimos para deixar o caminho mais leve.</p><div className="transfer-price"><span>Valor especial para o lançamento Nas Rocas</span><strong>Aproximadamente R$ 650</strong></div></div><div className="transfer-form"><p className="kicker">SE QUISER, É SÓ CHAMAR</p><p>Envie ao Concierge Resid:</p><ul><li>Data e horário de chegada</li><li>Voo e aeroporto</li><li>Hotel em Búzios</li><li>Número de passageiros</li></ul><a className="guide-cta" href={transferWhatsAppHref} target="_blank" rel="noreferrer">Conversar sobre o transfer <Arrow /></a></div></div></section>

      <footer><span className="footer-logo"><img src="resid-logo.png" alt="Resid" /></span><p>Búzios, pelo olhar Resid.</p><a href="#top">Voltar ao topo ↑</a></footer>
    </main>
  );
}
