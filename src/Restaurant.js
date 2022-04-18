import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);

  const orderOne = () => {
    setPizzas(pizza => pizza + 1);
    // console.log("click")
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}
          <RestaurantButton orderOne={orderOne} />
          {/* <button onClick={orderOne} className="btn btn-primary">Add</button> */}
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
