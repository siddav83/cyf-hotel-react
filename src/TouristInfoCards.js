import React from "react";
import glasgow from "./glasgow.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img src={glasgow} className="card-img-top" />
      <div className="card-body">
        <h2>Glasgow</h2>
        <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
