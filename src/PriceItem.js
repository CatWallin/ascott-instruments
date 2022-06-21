import React from 'react'

function PriceItem({name, price, description}) {
    return (
        
        <div className="PriceItem">
            <h1> {name} </h1>
            <h2> ${price} </h2>
            <text className="description">
                {description.map((message) => <p> {message} </p>)}
            </text>
        </div>
    )
}

export default PriceItem