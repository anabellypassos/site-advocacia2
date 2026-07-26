import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__mark">
          <span>Ricardo Andrade Advocacia</span>
          <span className="eyebrow footer__oab">OAB/SP nº 123.456</span>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} Ricardo Andrade Advocacia. Todos os direitos reservados.
          As informações deste site têm caráter geral e não substituem uma consulta jurídica.
        </p>
      </div>
    </footer>
  )
}
