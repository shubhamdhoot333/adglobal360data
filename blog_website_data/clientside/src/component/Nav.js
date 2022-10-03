import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
function Nav() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies("");
  let token_value = cookies.jwtoken;
  // console.log(token_value);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top "
        style={{ backgroundColor: "#4c0bce" }}
      >
        <div className="container-fluid mx-3">
          <span className="navbar-brand ms-4">
            <span className="h4">Adglobal360</span>

            <button
              className="navbar-toggler collapsed"
              id="nav-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginLeft: "100px" }}
            >
              <span className="navbar-toggler-icon "></span>
            </button>
          </span>

          <div
            className="navbar-collapse justify-content-end collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav px-2">
              <li className="nav-item mx-3">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/post"
                >
                  CREATEPOST
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/blog"
                >
                  BLOGS
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                {token_value === "undefined" ? (
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    LOGIN
                  </NavLink>
                ) : (
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/logout"
                  >
                    LOGOUT
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
