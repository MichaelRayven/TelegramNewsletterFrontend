import { useState } from "react"
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md"
import "./Checkbox.scss"

interface Props {
    value?: boolean;
    children?: React.ReactNode;
}

const Checkbox = ({ children, value }: Props) => {
    const [checked, setChecked] = useState(value || false)
    
    const getCheckboxIcon = () => checked ? 
        <MdOutlineCheckBox /> :
        <MdCheckBoxOutlineBlank />

    return (
        <div className="checkbox">
            <button 
                id="checkbox"
                name="checkbox"
                className="button__icon" 
                onClick={() => {setChecked(!checked)}}>
                {getCheckboxIcon()}
            </button>
            <label htmlFor="checkbox" className="link checkbox__content">
                {children}
            </label>
        </div>
    )
}

export default Checkbox