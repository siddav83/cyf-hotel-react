import React from "react";
import glasgow from "./glasgow.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card text-center" style={{ width: 18 }}>
      <img src={glasgow} className="card-img-top" />
      <div className="card-body text-center">
        <h2 className=" text-center">Glasgow</h2>
        <a
          className="info-box pd-1"
          href="https://peoplemakeglasgow.com/"
          className="btn btn-primary"
        >
          <p>More info</p>
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
