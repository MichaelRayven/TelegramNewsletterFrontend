import './Button.scss'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode 
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <div className="button">
      <button className="button__element" onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button