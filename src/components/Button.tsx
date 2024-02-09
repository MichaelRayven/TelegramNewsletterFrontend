import { IconType } from "react-icons";
import "./Button.scss"

interface Props {
  icon?: IconType;
  appearance?: 'basic' | 'outline';
  children?: React.ReactNode;
}

const Button = ({ appearance, children, icon }: Props) => {
  const getClassList = () => {
    let list = "button"

    if (appearance != 'basic') {
      list =  `${list} button__${appearance}`
    }

    if (icon) {
      list =  `${list} button__icon`
    }

    return list;
  }

    return (
      <button className={getClassList()}><a href="">Sign in</a></button>
    )
}

export default Button