import React from 'react'

function PriceItem({image, name, price}) {
    return (
        <div className="PriceItem">
            <div style={{ backgroundImage: `url(${image})` }} > </div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    )
}

export default PriceItem