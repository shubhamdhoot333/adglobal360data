import React, { useState } from "react";

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <div className="row">
                <div className="col-lg-3">
                  <th scope="col">postID</th>
                </div>
                <div className="col-lg-3">
                  <th scope="col">ID</th>
                </div>
                <div className="col-lg-3">
                  <th scope="col"> Name</th>
                </div>
                <div className="col-lg-3">
                  <th scope="col">Email</th>
                </div>
              </div>
            </tr>
          </thead>
        </table>
        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>

        {/* show the pagiantion
    it consists of next and previous buttons
    along with page numbers, in our case, 5 page
    numbers at a time
*/}

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
      </div>
    </>
  );
}

export default Pagination;
