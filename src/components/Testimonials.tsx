import './Testimonials.css'
import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    quote:
      'Fui atendida diretamente pelo Dr. Ricardo do início ao fim. Em nenhum momento me senti perdida sobre o andamento do processo.',
    name: 'C. Menezes',
    context: 'Ação de Direito de Família',
  },
  {
    quote:
      'Resolveu uma disputa contratual complexa da nossa empresa com uma clareza que eu não encontrava em escritórios maiores.',
    name: 'F. Barreto',
    context: 'Consultoria empresarial',
  },
  {
    quote:
      'Explicou cada etapa em linguagem simples e cumpriu todos os prazos combinados. Recomendo sem hesitar.',
    name: 'J. Ohara',
    context: 'Ação trabalhista',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <p className="eyebrow testimonials__eyebrow">Depoimentos</p>
        <h2 className="testimonials__title">O que dizem os clientes atendidos.</h2>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" delay={i * 100} className="testimonial" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonial__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span className="testimonial__meta">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__context">{t.context}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
