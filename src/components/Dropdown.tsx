import { MdArrowDropDown, MdArrowDropUp, MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import "./Dropdown.scss"

interface Props {
  direction?: "top" | "bottom" | "right" | "left";
  content?: React.ReactNode;
  children?: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
}

interface ItemProps {
  children: React.ReactNode;
}

export const DropdownItem = ({children}: ItemProps) => {
  return (
    <div className="dropdown__item">
      {children}
    </div>
  )
}

const Dropdown = ({direction = "bottom", children, content}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const menu = useRef<HTMLDivElement | null>(null)

  const calcOffsets = () => {
    if (menu.current != null && menu.current.offsetParent != null && menu.current.offsetParent instanceof HTMLElement) {
      const {
        left: parentLeft,
        top: parentTop, 
        right: parentRight,
        bottom: parentBottom
      } = menu.current.offsetParent.getBoundingClientRect()
      const {
        left, 
        top, 
        right,
        bottom,
        height, 
        width
      } = menu.current.getBoundingClientRect()

      const minLeft = Math.min(left, parentRight - width)
      const minTop = Math.min(top, parentTop - height)
      const minRight = Math.min(window.innerWidth - right, window.innerWidth - (parentLeft + width))
      const minBottom = Math.min(window.innerHeight - bottom, window.innerHeight - parentBottom - height)

      const shouldStickToLeft = minLeft < minRight;
      const shouldStickToTop = minTop > minBottom;
      
      if (shouldStickToLeft) {
        menu.current.style.left = '0'
        menu.current.style.right = 'unset'
      } else {
        menu.current.style.right = '0'
        menu.current.style.left = 'unset'
      }

      if (shouldStickToTop) {
        menu.current.style.bottom = '100%'
        menu.current.style.top = 'unset'
      } else {
        menu.current.style.top = '100%'
        menu.current.style.bottom = 'unset'
      }
    }
  }

  useEffect(() => {  
    calcOffsets()  
    window.addEventListener('resize', calcOffsets)
    return () => {
      window.removeEventListener('resize', calcOffsets)
    }
  }, [])

  const getArrow = () => {
    switch(direction) {
      case "top": {
        return <MdArrowDropUp className="icon dropdown__icon"/>
      }
      case "bottom": {
        return <MdArrowDropDown className="icon dropdown__icon"/>
      }
      case "left": {
        return <MdArrowRight className="dropdown__icon"/>
      }
      case "right": {
        return <MdArrowLeft className="dropdown__icon"/>
      }
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown__content">
          {content}
        </div>
        {getArrow()}
      </div>
      <div className="dropdown__menu" data-open={isOpen} ref={menu}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown