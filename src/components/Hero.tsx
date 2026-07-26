import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/video/poster.svg"
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__grain" />
      </div>

      <div className="container hero__content">
        <p className="eyebrow hero__badge">
          OAB/SP nº 123.456 &nbsp;·&nbsp; Advocacia consultiva e contenciosa
        </p>

        <h1 className="hero__headline">
          Defesa técnica, <em>presença</em> no que
          <br className="hero__break" /> realmente decide um caso.
        </h1>

        <p className="hero__subtitle">
          Há 15 anos representando pessoas físicas e empresas em causas
          cíveis, trabalhistas, empresariais e de família — com atenção
          direta do advogado em cada processo, do primeiro contato à sentença.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn-primary"
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#areas">
            Ver áreas de atuação
          </a>
        </div>

        <dl className="hero__stats">
          <div>
            <dt>15+</dt>
            <dd>anos de atuação</dd>
          </div>
          <div>
            <dt>420+</dt>
            <dd>casos conduzidos</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>áreas de especialização</dd>
          </div>
        </dl>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Rolar para a seção Sobre">
        <span />
      </a>
    </section>
  )
}
