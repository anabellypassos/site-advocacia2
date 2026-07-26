import './WhyUs.css'
import PhotoFrame from './PhotoFrame'
import Reveal from './Reveal'

const ITEMS = [
  {
    title: 'Atendimento direto do advogado',
    text: 'Você fala e negocia com quem assina as peças do seu processo — do início ao fim, sem intermediários.',
  },
  {
    title: 'Clareza sobre prazos e riscos',
    text: 'Relatórios simples, em linguagem acessível, sobre o andamento real do seu caso e os cenários possíveis.',
  },
  {
    title: 'Resposta em até 24h úteis',
    text: 'Dúvidas e solicitações recebem retorno rápido — por WhatsApp, e-mail ou telefone, como você preferir.',
  },
  {
    title: 'Honorários definidos antes de começar',
    text: 'Sem surpresas: valores e forma de pagamento são combinados com transparência antes de qualquer atuação.',
  },
]

export default function WhyUs() {
  return (
    <section id="diferenciais" className="section whyus">
      <div className="container whyus__grid">
        <Reveal className="whyus__intro">
          <p className="eyebrow whyus__eyebrow">Diferenciais</p>
          <h2 className="whyus__title">O que muda quando o advogado leva o caso a sério.</h2>
          <p className="whyus__text">
            Processos judiciais são, antes de tudo, um período de incerteza na
            vida de quem os vive. Meu papel é reduzir essa incerteza com
            informação clara e decisões bem fundamentadas.
          </p>
          <PhotoFrame
            className="whyus__image"
            tag="Anexo III"
            ratio="4 / 3"
            delay={120}
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=900&auto=format&fit=crop"
            alt="Sala de reuniões do escritório de advocacia"
          />
        </Reveal>

        <ul className="whyus__list">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="whyus__item">
              <span className="whyus__index" aria-hidden="true">§</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
