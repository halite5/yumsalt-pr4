import React from 'react'

export default function PageBody({content, previewer}) {
    var clonedEl = React.cloneElement(content, {
        previewer: previewer
    })

    return (
        <div>
            {clonedEl}
        </div>
    )
}
