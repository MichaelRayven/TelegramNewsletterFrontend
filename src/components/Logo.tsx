import logo from "@/assets/logo.svg"
import './Logo.scss'
import { useNavigate } from "react-router-dom"

const Logo = () => {
  const navigate = useNavigate()

  return (
    <a onClick={() => navigate("/")} className="logo">
      <img className="logo__image" src={logo} alt="" />
      <h3 className="logo__text">Botty</h3>
    </a>
  )
}

export default Logo;