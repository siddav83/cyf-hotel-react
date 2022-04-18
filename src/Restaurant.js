import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Hotdog" />
        <Order orderType="hamburger" />
      </ul>
    </div>
  );
};

export default Restaurant;
