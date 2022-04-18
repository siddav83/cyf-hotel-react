import React, { useState } from "react";
import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  console.log(props);
  // const [ bookings, setBookings ] = useState(FakeBookings)
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchButton search={search} />
        <SearchResults result={results} />
      </div>
    </div>
  );
};

export default Bookings;
