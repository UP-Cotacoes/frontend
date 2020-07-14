import React from "react";
import "./ElevationButton.css"

export default function ElevationButton({className, text, style, onClick, upperCase, disabled}) {
    return (
        <button
            className={`${className} elevation-button-container`}
            style={style}
            onClick={onClick}
            disabled={disabled}>
            <span className={'elevation-button-text'}>{upperCase ? text.toUpperCase() : text}</span>
        </button>
    )
}