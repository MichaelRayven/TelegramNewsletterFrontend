import { IconType } from "react-icons";
import "./Card.scss"

interface Props {
  icon?: IconType;
  image?: string;
  heading: string;
  children?: React.ReactNode;
}

const Card = () => {
  return (
    <div className="card">
      
    </div>
  )
}

export default Card;