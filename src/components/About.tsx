import './About.css'
import PhotoFrame from './PhotoFrame'
import Reveal from './Reveal'

const CREDENTIALS = [
  'Graduação em Direito — Universidade de São Paulo (USP)',
  'Pós-graduação em Direito Processual Civil — PUC-SP',
  'Membro da Comissão de Direito de Família da OAB/SP',
  'Certificação em Mediação e Arbitragem — CBMA',
]

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        
        {/* LADO DA FOTO (Composição moderna) */}
        <div className="about__portrait">
          {/* Foto Principal */}
          <Reveal direction="right" delay={100}>
            <PhotoFrame
              className="about__portrait-main"
              tag="Sócio-Fundador"
              ratio="4 / 5"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Retrato do advogado Ricardo Andrade"
            />
          </Reveal>

          {/* Foto Menor Sobreposta */}
          <div className="about__portrait-floating">
            <Reveal direction="up" delay={400}>
              <PhotoFrame
                tag="Escritório"
                ratio="1 / 1"
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop"
                alt="Detalhe do escritório"
              />
            </Reveal>
          </div>
          
          <p className="about__caption">Ricardo Andrade — Advocacia Artesanal</p>
        </div>

        {/* LADO DO TEXTO (Conteúdo refinado) */}
        <div className="about__text">
          <Reveal delay={100}>
            <p className="eyebrow about__eyebrow">Sobre o advogado</p>
            <h2 className="about__title">
              Cada processo carrega uma decisão de vida. <span className="text-brass">Eu trato assim.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="about__lead">
              “Fundei este escritório com uma convicção simples: quem contrata um
              advogado quer ser atendido pelo advogado — não repassado a uma
              fila de estagiários.”
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="about__body">
              Ao longo de 15 anos de atuação, construí uma prática voltada a
              resultados objetivos: entender o problema real por trás do
              processo, avaliar riscos com honestidade e agir com a rapidez que
              cada situação exige — seja em uma negociação extrajudicial ou em
              um litígio complexo.
            </p>
          </Reveal>

          <ul className="about__credentials">
            {CREDENTIALS.map((item, index) => (
              <Reveal key={index} delay={400 + index * 100} direction="left">
                <li>{item}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}