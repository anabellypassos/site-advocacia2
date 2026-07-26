import './PracticeAreas.css'
import Reveal from './Reveal'

const AREAS = [
  {
    file: '2024.001',
    title: 'Direito Civil',
    text: 'Contratos, responsabilidade civil, ações de indenização e cobrança, e defesa em processos cíveis de qualquer complexidade.',
  },
  {
    file: '2024.002',
    title: 'Direito Empresarial',
    text: 'Constituição e reestruturação societária, contratos comerciais, recuperação de crédito e prevenção de litígios para empresas.',
  },
  {
    file: '2024.003',
    title: 'Direito Trabalhista',
    text: 'Defesa de empregadores e empregados em reclamações trabalhistas, acordos, e consultoria preventiva em rotinas de RH.',
  },
  {
    file: '2024.004',
    title: 'Direito de Família',
    text: 'Divórcio, guarda, pensão alimentícia, inventário e planejamento sucessório, conduzidos com discrição e cuidado.',
  },
  {
    file: '2024.005',
    title: 'Direito do Consumidor',
    text: 'Ações contra cobranças indevidas, negativação irregular, vícios de produto e serviço, e relações de consumo em geral.',
  },
  {
    file: '2024.006',
    title: 'Direito Penal',
    text: 'Defesa em inquéritos e processos criminais, com atuação desde a fase investigativa até o trânsito em julgado.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="section areas">
      <div className="container">
        <Reveal className="areas__head">
          <p className="eyebrow areas__eyebrow">Áreas de atuação</p>
          <h2 className="areas__title">Seis frentes, um único responsável pelo seu caso.</h2>
        </Reveal>

        <div className="areas__grid">
          {AREAS.map((area, i) => (
            <Reveal as="div" delay={i * 80} className="area-card" key={area.file}>
              <div className="area-card__stamp">
                <span>Autos nº</span>
                <span className="area-card__file">{area.file}</span>
              </div>
              <h3 className="area-card__title">{area.title}</h3>
              <p className="area-card__text">{area.text}</p>
              <a
                className="area-card__link"
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                  `Olá, gostaria de falar sobre um caso de ${area.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar sobre este tema →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
