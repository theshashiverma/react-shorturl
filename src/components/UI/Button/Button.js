import React from 'react'

const Button = (props) => {
    return (
        <div data-testid="button">
            <button onClick={props.clicked}>{props.value}</button>
        </div>
    )
}

export default Button
