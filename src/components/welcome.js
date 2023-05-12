import React from 'react'

const Welcome = (props) =>
{
    const {name} = props //Destructuring props and state
    return (
        
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default Welcome

