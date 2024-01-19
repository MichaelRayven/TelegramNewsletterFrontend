import { forwardRef, useState } from "react";
import { MdClose, MdVisibility, MdVisibilityOff } from "react-icons/md";
import './InputField.scss'

interface InputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((
  props,
  ref
) => {
  const isPasswordField = props.type == "password"
  const [text, setText] = useState("")
  const [shouldShowText, setShouldShowText] = useState(!isPasswordField)

  const getVisibilityIcon = () => 
    shouldShowText ?
      <MdVisibilityOff /> :
      <MdVisibility />
  const getInputType = () => isPasswordField && shouldShowText ? "text" : props.type
  const getClassName = () => props.className ? props.className + " input__element" : "input__element"

  return (
    <div className="input">
      <input 
        {...{
          ...props, 
          type: getInputType(),
          className: getClassName()
        }}
        ref={ref}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="input__controls">
        {
          text.length != 0 &&
          <button 
            className="button__icon" 
            onClick={() => setText("")}>
              <MdClose className="icon-button__icon"/>
          </button>
        }
        {
          (text.length != 0 && isPasswordField) &&
          <button 
            className="button__icon" 
            onClick={() => setShouldShowText(!shouldShowText)}>
              {getVisibilityIcon()}
          </button>
        }
      </div>
    </div>
  )
})

export default InputField