import { IconType } from "react-icons";
import "./Card.scss"

interface Props {
  icon?: IconType;
  image?: string;
  heading?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({children, heading, className = ""}: Props) => {
  const getClassList = () => className ?
    `${className} card` : "card"

  return (
    <div className={getClassList()}>
      <div className="card__heading">{heading && heading}</div>
      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

export default Card;