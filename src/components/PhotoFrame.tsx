import './PhotoFrame.css'
import Reveal from './Reveal'

interface PhotoFrameProps {
  src: string
  alt: string
  tag: string
  caption?: string
  ratio?: string
  className?: string
  delay?: number
}

export default function PhotoFrame({
  src,
  alt,
  tag,
  caption,
  ratio = '4 / 5',
  className = '',
  delay = 0,
}: PhotoFrameProps) {
  return (
    <Reveal as="figure" delay={delay} className={`photo-frame ${className}`.trim()}>
      <div className="photo-frame__inner" style={{ aspectRatio: ratio }}>
        <span className="photo-frame__tag">{tag}</span>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {caption && <figcaption className="photo-frame__caption">{caption}</figcaption>}
    </Reveal>
  )
}
