import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

function Sidebar() {
  // const [open, setOpen] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [charts, setCharts] = useState(false);
  const [table, setTable] = useState(false);
  const [pages, setPages] = useState(false);

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
    <>
      {/* <!-- ----sidebar start---- --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-database menu-icon"></i>
              <span className="menu-title">AMS-Dashboard</span>
            </a>
          </li> */}
          {/* <li className="nav-item nav-category">General</li> */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <i className="menu-icon fa fa-dashboard" />
              <span className="menu-title">Dashboard</span>
              <i className="fa fa-caret-right" />
            </a>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to={"/campaign-dashboard"} className="nav-link">
                      AMS Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/pbi-dashboard"} className="nav-link" href="">
                      PowerBI Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li> */}

          <li className="nav-item">
            <Link to={" "} className="nav-link">
              <i className="fa fa-database menu-icon text-info" />
              <span className="menu-title">Master Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/campaign-dashboard"} className="nav-link">
              <i className="menu-icon fa fa-dashboard text-success" />
              <span className="menu-title">AMS Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={"/pbi-dashboard"}>
              <i className="menu-icon fa fa-television text-primary" />
              <span className="menu-title">PowerBI Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => setContacts(!contacts)}
              aria-controls="example-collapse-text1"
              aria-expanded={contacts}
            >
              <i className="menu-icon fa fa-paper-plane-o text-danger" />
              <span className="menu-title">Contacts</span>
              <i className="fa fa-caret-right " />
            </a>
            <Collapse in={contacts}>
              <div id="example-collapse-text1">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Basic Elements
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => setCharts(!charts)}
              aria-controls="example-collapse-text2"
              aria-expanded={charts}
            >
              <i className="menu-icon fa fa-bar-chart-o text-warning" />
              <span className="menu-title">Charts</span>
              <i className="fa fa-caret-right" />
            </a>
            <Collapse in={charts}>
              <div id="example-collapse-text2">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Charts
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => setTable(!table)}
              aria-controls="example-collapse-text3"
              aria-expanded={table}
            >
              <i className="menu-icon fa fa-table text-muted" />
              <span className="menu-title">Tables</span>
              <i className="fa fa-caret-right" />
            </a>
            <Collapse in={table}>
              <div id="example-collapse-text3">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Basic table
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => setPages(!pages)}
              aria-controls="example-collapse-text4"
              aria-expanded={pages}
            >
              <i className="menu-icon fa fa-clone text-danger" />
              <span className="menu-title"> Pages</span>
              <i className="fa fa-caret-right" />
            </a>
            <Collapse in={pages}>
              <div id="example-collapse-text4">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to={"/upload-file"} className="nav-link" href="">
                      Upload file{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="menu-icon fa fa-street-view text-primary" />
              <span className="menu-title">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- ----sidebar end---- --> */}
    </>
  );
}
export default Sidebar;
