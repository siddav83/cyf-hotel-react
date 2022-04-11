import React from "react";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <>
      <table>
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
              <th scope="row">1</th>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default SearchResults;
