import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Post from "./Post";
const url = "https://jsonplaceholder.typicode.com/comments";
function Work() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  const Show = () => {
    console.log("show data ");
    setShow(true);
  };
  const Hide = () => {
    console.log("hide data ");
    setShow(false);
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
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            {posts.length > 0 ? (
              <>
                <Pagination
                  data={posts}
                  RenderComponent={Post}
                  title="Posts"
                  pageLimit={5}
                  dataLimit={5}
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
