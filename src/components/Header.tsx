import "./Header.scss"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header container">
        <div className="header__inner">
          <Logo></Logo>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a className="link link_underlined" href="">Docs</a></li>
              <li className="nav__item"><a className="link link_underlined" href="">Pricing</a></li>
              <li className="nav__item"><a className="link link_underlined" href="">FAQ</a></li>
            </ul>
          </nav>
          <div className="header__actions">
            <a className="link" href="">What's new?</a>
            <Button onClick={() => navigate("/signin")}>Sign in</Button>
          </div>
        </div>
    </header>
  )
}

export default Header