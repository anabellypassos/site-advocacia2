import { ReactNode, ElementType } from 'react' // Importamos ElementType para o tipo da tag
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right";
  as?: ElementType; // <-- Adicione esta linha para corrigir o erro
}

export default function Reveal({ 
  children, 
  delay = 0, 
  className = '', 
  as: Tag = 'div', // Renomeamos 'as' para 'Tag' aqui (boa prática)
  direction = 'up' 
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      // Adicionamos a classe da direção para que o CSS possa animar corretamente
      className={`reveal reveal--${direction} ${inView ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}