import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
// import Restaurant from "./Restaurant";

const Orders = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = props => {
    setOrders(pizza => pizza + 1);
    // console.log("click")
  };
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
      {/* <button onClick={orderOne} className="btn btn-primary">Add</button> */}
    </li>
  );
};

export default Orders;
