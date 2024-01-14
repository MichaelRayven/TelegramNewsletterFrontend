import logo from "@/assets/logo.svg"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <a href="#" className="logo"><img className="logo__image" src={logo} alt="" />Botty</a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a className="link" href="">Docs</a></li>
            <li className="nav__item"><a className="link" href="">Pricing</a></li>
            <li className="nav__item"><a className="link" href="">FAQ</a></li>
          </ul>
        </nav>
        <div className="header__actions">
          <a className="link" href="">What's new</a>
          <button className="button"><a href="">Sign in</a></button>
        </div>
      </div>
    </header>
  )
}

export default Header