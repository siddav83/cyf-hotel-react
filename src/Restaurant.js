import React, { useState } from "react";

const Restaurant = () => {
  const [pizzas, setPizzas] = useState(0);

  const addPizza = () => {
    setPizzas(pizza => pizza + 1);
    // console.log("click")
  };

  return (
    <div>
      <h3>Restaurant Ordersssss</h3>
      <ul>
        <li>
          Pizzas: {pizzas}{" "}
          <button onClick={addPizza} className="btn btn-primary">
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
