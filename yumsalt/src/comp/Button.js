import React from 'react'

function Button({text, click}) {
    return (
        <a className="btn" href="#" onClick={click}>{text}</a>
    )
}

export default Button
