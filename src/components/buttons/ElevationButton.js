import React from "react";
import "./ElevationButton.css"

export default function ElevationButton({className, text, style, onClick, upperCase}) {
    return (
        <button
            className={`${className} elevation-button-container`}
            style={style}
            onClick={onClick}>
            <span className={'elevation-button-text'}>{upperCase ? text.toUpperCase() : text}</span>
        </button>
    )
}