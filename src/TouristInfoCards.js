import React from "react";
import glasgow from "./glasgow.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card" style={{ width: 200 }}>
      <img src={glasgow} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
