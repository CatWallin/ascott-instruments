import React from 'react'

function PriceItem({name, price, description}) {
    return (
        <div className="PriceItem">
            <h1> {name} </h1>
            <p> ${price} </p>
            <p> {description} </p>
        </div>
    )
}

export default PriceItem