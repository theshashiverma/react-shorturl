import React from 'react'

const Input = (props) => {
    return (
        <div data-testid="input">
            <input 
                type="text" 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.changed}
            />
        </div>
    )
}

export default Input
