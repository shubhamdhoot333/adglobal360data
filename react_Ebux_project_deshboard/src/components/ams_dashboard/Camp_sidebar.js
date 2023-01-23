import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function Camp_sidebar() {
  useEffect(() => {
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }, []);
  return (
    //  {/* <!-- ----sidebar start---- --> */}
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {/* <li className="nav-item">
          <Link to={"/dashboard"}>
            <button className="button arrow" style={{}}>
              <span style={{ fontSize: "13px", fontWeight: "900" }}>
                Back to Dashboard
              </span>
            </button>
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            to={"/dashboard"}
            className="nav-link active mt-2 p-3"
            style={{
              background: "rgba(155, 106, 214, 0.1)",
            }}
          >
            <i className="menu-icon fa fa-arrow-circle-left text-success" />
            <span className="menu-title">Back to Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/campaign-dashboard"} className="nav-link active">
            <i className="menu-icon fa fa-dashboard text-success" />
            <span className="menu-title">Campaign Data</span>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="menu-icon fa fa-television text-primary" />
            <span className="menu-title">Demo</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="menu-icon fa fa-street-view text-primary" />
            <span className="menu-title">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
    //  {/* <!-- ----sidebar end---- --> */}
  );
}

export default Camp_sidebar;
