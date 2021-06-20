import React from "react";
import './Button.css'

declare interface ButtonProps {
   content?: string,
   onClick?: ()  => void
   appendIcon: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
   return <div>
      <button className="AppButton"
      onClick = { props.onClick }
      >
         { props.children || 'Nameless button' }
         { props.appendIcon }
      </button>
   </div>
}
export default Button