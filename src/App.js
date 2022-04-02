import React from "react";
import Bookings from "./Bookings";
import Header from "./Header";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
