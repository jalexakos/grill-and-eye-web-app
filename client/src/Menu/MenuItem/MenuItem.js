import React from 'react'

const MenuItem = props => {
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.desc}</span>
            <span>{props.price}</span>
        </div>
    )
}

export default MenuItem;