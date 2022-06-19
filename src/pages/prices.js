import React from "react";
import { PriceList } from "../PriceList";
import PriceItem from "../PriceItem";
import "../styles/Prices.css";
  
const Prices = () => {
  return (
    <div className="pricePage">
      <h1 className="priceTitle">
        Prices
      </h1>
      <div className="priceInfo">
        contact for customization; prices may vary depending on customizations
        <br></br>
        see something that isn't on the list? contact me
        <br></br>
        shipping not included in price
      </div>
      <div className="priceList">
        {PriceList.map((priceItem, key) => {
          return (
            <PriceItem 
              key={key} 
              name={priceItem.name} 
              price={priceItem.price}
              description={priceItem.description}
            />
          );
        })}
      </div>
    </div>
  );
};
  
export default Prices;