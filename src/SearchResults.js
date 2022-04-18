import React from "react";
import Bookings from "./Bookings";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <>
      <table className="table table-striped w-auto">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>

        {results.map(result => (
          <tbody>
            <tr>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default SearchResults;
