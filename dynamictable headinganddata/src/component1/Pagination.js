import React, { useState } from "react";

function Pagination({ data, pageLimit, dataLimit, col1, col2 }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => {
      return page > 0 ? page - 1 : 0;
    });
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              {col2.map((value, index) => (
                <th scope="col" key={index}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map((value, idx) => (
              <tr key={idx}>
                <td>{value.id} </td>
                <td>{value.name} </td>
                <td>{value.email} </td>
                {col2.map((value1, index) => (
                  <td key={index}>
                    <td>{value1 === "username" ? value.username : ""}</td>
                    <td>{value1 === "phone" ? value.phone : ""}</td>
                    <td>{value1 === "website" ? value.website : ""}</td>
                    <td>{value1 === "id" ? value.id : ""}</td>
                    <td>{value1 === "name" ? value.name : ""}</td>
                    <td>{value1 === "email" ? value.email : ""}</td>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination ">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Pagination;
