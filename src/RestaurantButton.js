import React from "react";
import Restaurant from "./Restaurant";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
