import { FormEvent, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nome = data.get('nome')
    const assunto = data.get('assunto')
    const mensagem = data.get('mensagem')
    
    const text = `Olá, meu nome é ${nome}. Assunto: ${assunto}. Mensagem: ${mensagem}`
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" className="section contact">
      <div className="container contact__grid">
        
        {/* COLUNA 1: INFORMAÇÕES E MAPA */}
        <div className="contact__info">
          <p className="eyebrow contact__eyebrow">Contato</p>
          <h2 className="contact__title">Vamos conversar sobre o seu caso.</h2>
          <p className="contact__text">
            Atendimento personalizado e acompanhamento direto. Escolha o canal de sua preferência ou visite nosso escritório.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__list-label">WhatsApp</span>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">(11) 99999-9999</a>
            </li>
            <li>
              <span className="contact__list-label">E-mail</span>
              <a href="mailto:contato@ricardoandrade.adv.br">contato@ricardoandrade.adv.br</a>
            </li>
            <li>
              <span className="contact__list-label">Endereço</span>
              <span>Av. Paulista, 1000 — Conj. 210, São Paulo/SP</span>
            </li>
          </ul>

          <div className="contact__map-wrapper">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.106696296001!2d-46.65390548502213!3d-23.56461118468153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da5aa315%3A0xd59f9fc31f907d7!2sAv.%20Paulista%2C%201000!5e0!3m2!1spt-BR!2sbr!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="contact__map-tag">Localização — Anexo VII</div>
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO PREMIUM */}
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-header">
              <h3>Solicitar Atendimento</h3>
              <p>Envie sua mensagem e retornaremos em breve.</p>
            </div>

            <div className="contact__form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" required placeholder="Como podemos te chamar?" />
            </div>

            <div className="contact__form-group">
              <label htmlFor="assunto">Área de Interesse</label>
              <div className="contact__select-wrapper">
                <select id="assunto" name="assunto" defaultValue="Direito Civil">
                  <option>Direito Civil</option>
                  <option>Direito de Família</option>
                  <option>Direito Empresarial</option>
                  <option>Direito Penal</option>
                  <option>Outro assunto</option>
                </select>
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="mensagem">Sua Mensagem</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                required 
                rows={4} 
                placeholder="Conte-nos brevemente sobre o seu caso..." 
              />
            </div>

            <button className="contact__btn" type="submit">
              <span>Iniciar conversa no WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {sent && (
              <div className="contact__sent-msg">
                <div className="contact__pulse-dot"></div>
                Redirecionando para o WhatsApp...
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}