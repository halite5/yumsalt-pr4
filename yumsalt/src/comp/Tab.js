import React from 'react'

function Tab({name, isActive, onSelected}) {
    let cl = isActive ? 'active' : ''

    return (
        <a href="#" className={cl} onClick={onSelected}>{name}</a>
    )
}

export default Tab
