import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const url = "https://jsonplaceholder.typicode.com/users";
function Work() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [col1, setCol1] = useState([
    "username",
    "phone",
    "website",
    "id",
    "name",
    "email",
  ]);

  const [col2, setCol2] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, [col2]);

  const Show = () => {
    // console.log("show data ");
    setShow(true);
  };
  const Hide = () => {
    // console.log("hide data ");
    setShow(false);
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      setCol2((col2) => [...col2, event.target.value]);
    } else {
      console.log(event.target.value);

      for (var i = 0; i < col2.length; i++) {
        if (col2[i] === event.target.value) {
          col2.splice(i, 1);
        }
      }
      console.log(col2);
      setCol2((col2) => [...col2]);
    }
  };

  if (error) return <h1>{error}</h1>;
  return (
    <>
      <div>
        <ul className="nav nav-pills justify-content-end">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              pagination
            </a>
            <ul className="dropdown-menu">
              <li>
                <button className="btn" onClick={Show}>
                  Show
                </button>
              </li>
              <li>
                <button className="btn" onClick={Hide}>
                  Hide
                </button>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Add/Less Column
            </button>
            <ul className="dropdown-menu">
              {col1.map((value, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name="option1"
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="check1">
                    {value}
                  </label>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              convert Another Form
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  JSON
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  XML
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Mysql
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  Text
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        {show === false ? (
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
                {posts.map((value, index) => (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>

                    {col2.map((value1, index) => (
                      <td key={index}>
                        <td>{value1 === "username" ? value.username : null}</td>
                        <td> {value1 === "phone" ? value.phone : null} </td>
                        <td>{value1 === "website" ? value.website : null}</td>
                        <td>{value1 === "id" ? value.id : null}</td>
                        <td>{value1 === "name" ? value.name : null}</td>
                        <td>{value1 === "email" ? value.email : null}</td>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            {posts.length > 0 ? (
              <>
                <Pagination
                  data={posts}
                  pageLimit={5}
                  dataLimit={5}
                  col1={col1}
                  col2={col2}
                />
              </>
            ) : (
              <h1>No Posts to display</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Work;
