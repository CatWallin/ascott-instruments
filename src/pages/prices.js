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
        stuff about prices woo
      </div>
      <div className="priceList">
        {PriceList.map((priceItem, key) => {
          return (
            <PriceItem 
              key={key}
              image={priceItem.image} 
              name={priceItem.name} 
              price={priceItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
  
export default Prices;