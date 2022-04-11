import React from "react";
import Bookings from "./Bookings";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <TouristInfoCards />
      <TouristInfoCards />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResults /> */}

      <Footer />
    </div>
  );
};

export default App;
