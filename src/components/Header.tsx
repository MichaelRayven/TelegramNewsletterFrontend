import logo from "@/assets/logo.svg"
import "./Header.scss"
import Button from "./Button"

const Header = () => {
  return (
    <header className="header container">
        <div className="header__inner">
          <a href="#" className="logo">
            <img className="logo__image" src={logo} alt="" />
            <h3 className="logo__text">Botty</h3>
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a className="link link_underlined" href="">Docs</a></li>
              <li className="nav__item"><a className="link link_underlined" href="">Pricing</a></li>
              <li className="nav__item"><a className="link link_underlined" href="">FAQ</a></li>
            </ul>
          </nav>
          <div className="header__actions">
            <a className="link" href="">What's new?</a>
            <Button>Sign in</Button>
          </div>
        </div>
    </header>
  )
}

export default Header