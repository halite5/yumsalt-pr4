import React, { useState } from 'react'
import MediaHost from './MediaHost'

function Previewer({ mediaUrl, isOpen, onDismiss }) {
    console.log('is previewer open?:', isOpen)

    if (!isOpen) return (<aside />)

    return (
        <aside id="overlay" className="overlay">
            <MediaHost mediaUrl={mediaUrl} onDismiss={onDismiss} />
        </aside>
    )
}

export default Previewer
