import { useEffect, useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de atuação', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta.";

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''} ${isOpen ? 'header--open' : ''}`}>
      <div className="header__row">
        {/* LOGO */}
        <a href="#topo" className="header__mark" onClick={() => setIsOpen(false)}>
          <div className="header__mark-initial">RA</div>
          <div className="header__mark-name">
            Ricardo Andrade
            <span className="header__mark-sub">Advocacia</span>
          </div>
        </a>

        {/* NAV DESKTOP */}
        <nav className="header__nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        {/* ACTIONS (PHONE + CTA + BURGER) */}
        <div className="header__actions">
         
          
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header__cta-desktop">
            Agendar consulta
          </a>

          <button 
            className="header__burger" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="header__mobile">
        <nav className="header__mobile-links">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__mobile-footer">
          <div className="header__oab">
            OAB/SP Nº 123.456 • ADVOCACIA CONSULTIVA E CONTENCIOSA
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header__cta-desktop" style={{display: 'block', textAlign: 'center'}}>
            Agendar consulta
          </a>
        </div>
      </div>
    </header>
  )
}