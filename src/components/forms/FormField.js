import React, {useState} from "react";
import './FormField.css'

export default function FormField({className, style, icon, placeholder, type, onChange, disabled}) {
    const [focused, setFocus] = useState(false)
    let input = undefined;

    return (
        <div
            className={`${className} form-container`}
            style={style}
            onClick={() => {
                input.focus()
            }}>
            {icon({className: iconClasses()})}
            <input
                ref={ref => input = ref}
                type={type || 'text'}
                className={"form-input"}
                placeholder={placeholder}
                onFocus={() => onFocusText()}
                onBlur={() => onBlurText()}
                onChange={(event) => onTextChange(event.target.value)}
                disabled={disabled}
            />
        </div>
    )

    function onTextChange(text) {
        if (onChange) onChange(text)
    }

    function onFocusText() {
        setFocus(true)
    }

    function onBlurText() {
        setFocus(false)
    }

    function iconClasses() {
        return focused ? 'form-icon form-icon-focused' : 'form-icon'
    }
}