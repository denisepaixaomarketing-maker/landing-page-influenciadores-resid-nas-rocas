import "./influenciadores.css";
import ContactForm from "./ContactForm";
import PageMotion from "./PageMotion";

const base = process.env.GITHUB_ACTIONS === "true" ? "/landing-page-influenciadores-resid-nas-rocas" : "";
const asset = (name: string) => base + "/nas-rocas-oficial/" + name;
const experiences = [
  ["Terraço Alto Mar", "A chegada à ilha começa no píer de recepção, entre o mar e a paisagem de Búzios."],
  ["Resid Bar Nas Rocas", "Restaurante e bar com gastronomia assinada por Alex Atala."],
  ["Casa Carioca", "Um restaurante que leva o espírito carioca para a ilha."],
  ["Praia e decks", "Faixa de areia, decks à beira-mar e tempo para aproveitar os dias de sol."],
  ["Deck do Sol e piscina flutuante", "Uma área de banho de sol com piscina sobre o mar."],
  ["Gazebos", "Espaços privativos à beira-mar, disponíveis mediante reserva."],
  ["Esporte e vida náutica", "Tênis, beach tennis, esportes náuticos e marina com valet para as embarcações dos membros."],
  ["Vila das Lojas", "Lojas e boutiques selecionadas para completar a experiência."]
];
const faqs = [
  ["O que é o Nas Rocas Club?", "Um clube privado do Resid Club & Hotels na Ilha Rasa, em Búzios. Reúne lazer, gastronomia, esporte, bem-estar e encontros em uma comunidade com número limitado de memberships patrimoniais. O membership não é uma diária nem uma assinatura."],
  ["Quando começa a operação?", "A página oficial informa o início da operação em outubro de 2026, com implantação em fases. A cada etapa entregue, os membros são os primeiros a conhecer os novos espaços da ilha."],
  ["Quais são as modalidades?", "Club e Bardot. O Club inclui 12 convites anuais de cortesia. O Bardot inclui 36, acesso prioritário e áreas reservadas. O time do clube apresenta os benefícios e as condições vigentes de cada modalidade."],
  ["Qual é o valor e como funciona o pagamento?", "Os memberships partem de aproximadamente R$ 200 mil, conforme a modalidade e o lote vigente. O pagamento é feito com entrada e saldo parcelado. Valores e condições são apresentados pelo time do clube no momento da adesão."],
  ["O que está incluído?", "Acesso às áreas de lazer e convivência e à programação de experiências dos membros. Consumos em restaurantes e bares, além de determinados serviços e experiências pay-per-use, são cobrados à parte."],
  ["Existe uma taxa adicional?", "Sim. O fee anual é de R$ 12.000, destinado à manutenção e operação do clube, com reajuste conforme os critérios previstos em contrato."],
  ["O membership tem prazo? Posso transferi-lo?", "É patrimonial e sem prazo determinado. Pode ser vendido ou transferido, sujeito à aprovação do novo membro pelo clube e à taxa de transferência de 20%."],
  ["Como funciona para a família?", "Cada membership permite o uso simultâneo por até 4 pessoas vinculadas ao plano, mais 4 pessoas adicionais. Outros acessos simultâneos poderão ser liberados conforme a disponibilidade."],
  ["Posso levar convidados?", "Sim. São 12 convites anuais de cortesia no Club e 36 no Bardot. Convites adicionais podem ser adquiridos exclusivamente pelos membros; não há venda avulsa para quem não faz parte da comunidade."],
  ["Crianças e pets são permitidos?", "Crianças são muito bem-vindas. Para preservar o conforto e o ambiente natural da ilha, não é permitida a entrada de pets."],
  ["Preciso reservar?", "Sim. O clube recomenda reservar com 72 horas de antecedência, mas aceita reservas até 1 hora antes do horário de chegada."],
  ["Como chegar à Ilha Rasa?", "Os membros contam com transfer náutico do clube, partindo de Búzios. Também é possível chegar com embarcação própria e utilizar o valet náutico."],
  ["O clube funciona o ano todo?", "Sim. O Nas Rocas Club opera durante o ano inteiro."],
  ["O membership inclui hospedagem?", "Não. O hotel da ilha faz parte das próximas etapas de implantação. Quando estiver em operação, os membros terão prioridade nas reservas e benefícios exclusivos nas diárias."],
  ["Como conhecer as condições e me tornar membro?", "Converse com o time do Nas Rocas para conhecer as modalidades, as condições vigentes e os detalhes do projeto. A adesão passa por avaliação e aprovação para preservar a essência da comunidade."]
];
const photos = [
  ["galeria-bar-inauguracao.jpg", "Aqui se vive bem — Resid Bar Nas Rocas"],
  ["galeria-deck-inauguracao.jpg", "Encontros ao pôr do sol"],
  ["galeria-praia-inauguracao.jpg", "O mar, a praia e o tempo sem pressa"],
  ["galeria-descanso-inauguracao.jpg", "Pausa à beira-mar"]
];

function CTA({ children = "QUERO GARANTIR" }: { children?: React.ReactNode }) {
  return <a className="nr-cta" href="#contato">{children}<span aria-hidden="true">↓</span></a>;
}

export default function Home() {
  return <main className="nr-page" id="inicio" data-version="influenciadores-v2">
    <PageMotion />
    <header className="nr-header"><a href="#inicio" aria-label="Resid — início"><img src={base + "/resid-logo.png"} alt="Resid" /></a><nav aria-label="Navegação"><a href="#clube">O clube</a><a href="#experiencias">Experiências</a><a href="#membership">Membership</a></nav><a href="#contato">Conhecer o Nas Rocas ↓</a></header>
    <section className="nr-hero">
      <img className="nr-cover" src={asset("hero-inauguracao.jpg")} alt="Pôr do sol sobre o mar e o Nas Rocas em Búzios" fetchPriority="high" />
      <div className="nr-hero-copy"><h1>A ilha voltou<br /><em>a ser vivida!</em></h1><p>Há uma Búzios que se conhece pelo mar, pelos encontros e pelo tempo que a gente escolhe viver com calma. O Nas Rocas abre um novo capítulo desse lugar.</p><CTA>DESCUBRA COMO FAZER PARTE</CTA></div>
    </section>
    <section className="nr-editorial" id="clube"><div><p className="nr-label">O NAS ROCAS CLUB</p><h2><em>Um novo jeito de viver Búzios.</em></h2></div><div className="nr-copy"><p>Existe uma Búzios que muita gente guarda na memória. Uma época de encontros verdadeiros, liberdade e uma energia muito própria daquele pedaço de Brasil.</p><p>Essa memória nunca desapareceu. O Nas Rocas (re)nasce na Ilha Rasa, com um clube privado, uma comunidade que se reconhece e um calendário vivo de experiências.</p><p>Um lugar para voltar, reunir quem importa e encontrar um novo ritmo de vida.</p></div></section>
    <section className="nr-section nr-club-overview" aria-labelledby="nr-club-title"><p className="nr-label">O CLUBE</p><h2 id="nr-club-title">Um destino icônico.<br /><em>O Nas Rocas Club.</em></h2><ul className="nr-club-pillars"><li>Um clube privado</li><li>Uma comunidade que se reconhece</li><li>Um calendário vivo de experiências</li><li>Um novo ritmo de vida</li></ul></section>
    <section className="nr-section"><p className="nr-label">UM VISLUMBRE DA ILHA</p><h2>Antes de chegar,<br /><em>um pouco do que espera você.</em></h2><div className="nr-gallery">{photos.map(([src,alt])=><figure key={src}><img src={asset(src)} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>)}</div></section>
    <section className="nr-section" id="experiencias"><p className="nr-label">A VIDA NA ILHA</p><h2>Descobertas para<br /><em>viver sem pressa.</em></h2><p className="nr-intro">Gastronomia, praia, esporte e bem-estar se encontram na ilha. A implantação acontece em fases, e os membros acompanham cada novo espaço entregue.</p><div className="nr-experiences">{experiences.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text} <strong>{title === "Resid Bar Nas Rocas" ? "FASE 1 — entregue" : "EM ANDAMENTO"}</strong></p></article>)}</div><p className="nr-note">Eventos e experiências exclusivas completam o calendário da comunidade. Disponibilidade dos espaços conforme as etapas de implantação.</p></section>
    <section className="nr-community" id="comunidade"><div><p className="nr-label">COMUNIDADE</p><h2>Para quem entende<br /><em>o valor do tempo.</em></h2><p>O Nas Rocas é para quem encontra sentido nos encontros e nos lugares certos. Uma comunidade que não anuncia. Reconhece.</p><p>O acesso acontece por curadoria, com um número limitado de memberships e um processo de admissão atento à afinidade com o clube.</p><CTA /></div><img className="nr-community-photo" src={asset("comunidade-brinde-inauguracao.jpg")} alt="Brinde à beira-mar durante a inauguração do Nas Rocas" loading="lazy" /></section>
    <section className="nr-membership nr-patrimony" id="membership"><p className="nr-label">PATRIMÔNIO VIVO</p><h2>Quem decide agora, garante <em>exclusividade</em>, pertencimento e valorização patrimonial em um <em>lifestyle único</em>.</h2><p className="nr-intro">O membership do Nas Rocas Clube é um investimento na qualidade de vida de toda família; além de ser um ativo patrimonial que se valoriza ao longo do tempo, e transforma seu acesso em valores intangíveis, que são suas memórias juntas das pessoas que realmente fazem da vida um propósito maior.</p><CTA>QUERO FAZER PARTE</CTA></section>
    <section className="nr-history"><p className="nr-label">MARCOS DO PROJETO</p><div>{[["2022","Idealização e aquisição da Ilha Rasa"],["2023","Início do desenvolvimento dos projetos"],["2025","Licenciamento e início das obras"],["2026","Inauguração oficial e implantação em fases"]].map(([year,text])=><article key={year}><h3>{year}</h3><p>{text}</p></article>)}</div></section>
    <section className="nr-section" id="duvidas"><p className="nr-label">PARA CONHECER MELHOR</p><h2>Algumas respostas,<br /><em>antes da conversa.</em></h2><div className="nr-faq">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="nr-contact" id="contato" aria-label="Formulário de contato"><p className="nr-label">RESID CLUB & HOTELS · NAS ROCAS CLUB</p><h2>Se esse lugar faz sentido,<br /><em>a conversa começa aqui.</em></h2><p>Conheça o projeto, tire suas dúvidas e descubra como viver o Nas Rocas com a sua família. O Concierge apresenta as condições atuais e acompanha os próximos passos da admissão.</p><ContactForm /></section>
    <footer className="nr-footer"><img src={base + "/resid-logo.png"} alt="Resid" /><p>RESID CLUB & HOTELS<br />ILHA RASA · BÚZIOS · RJ</p><a href="https://www.instagram.com/nasrocas.club/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="#inicio">Voltar ao topo ↑</a></footer>
  </main>;
}
