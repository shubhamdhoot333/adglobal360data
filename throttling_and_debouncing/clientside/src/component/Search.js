import React, { useState, useEffect } from "react";
import axios from "axios";
function Search() {
  const [pin, setPin] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${pin}`)
        .then((response) => {
          console.log(response.data.title);
          setData(response.data);
        });
    }, 2000);
    return () => clearTimeout(getData);
  }, [pin]);
  //throtting function
  function throttle(func, delay) {
    let run = false;
    return function (...args) {
      if (!run) {
        func(...args);
        run = true;
        setTimeout(() => (run = false), delay);
      }
    };
  }

  const handleMouseMove = (e) => {
    console.log("api  call to do some task ");
  };
  window.addEventListener("mousemove", throttle(handleMouseMove, 2000));
  return (
    <>
      <div className="text-center mt-5">
        <h2 className="text-center">Debouncing in reactjs</h2>
        <input
          type="text"
          className="search text-center mt-2"
          placeholder="Enter something here..."
          onChange={(e) => setPin(e.target.value)}
        />
        <h3 className="text-center mt-2">Result of This </h3>
        {data ? data.title : null}
      </div>
    </>
  );
}

export default Search;
