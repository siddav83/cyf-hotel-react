import React from "react";
import Bookings from "./Bookings";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchResults /> */}
      <Footer />
    </div>
  );
};

export default App;
