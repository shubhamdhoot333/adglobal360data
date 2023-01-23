import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar2() {
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
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to={"/dashboard"}
            className="nav-link active mt-2 p-3"
            style={{
              background: "rgba(155, 106, 214, 0.1)",
            }}
          >
            <i className="menu-icon fa fa-arrow-circle-right text-success" />
            <span className="menu-title backto">Back to Dashboard</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={"/pbi-dashboard"}
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
          >
            <i className="menu-icon fa fa-dashboard text-success" />
            <span className="menu-title">Platform Summary</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={"/pbi-share-of-search"}
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
          >
            <i className="menu-icon fa fa-history text-info" />
            <span className="menu-title">Share of Search</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-organic-rank"}
          >
            <i className="menu-icon fa fa-dollar text-danger" />
            <span className="menu-title">Organic Rank</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-keyword-trend"}
          >
            <i className="menu-icon fa fa-cart-plus text-mute" />
            <span className="menu-title">Keyword-Trend</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-on-shell-availability"}
          >
            <i className="menu-icon fa fa-tree text-warning" />
            <span className="menu-title">On Shelf Availability</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-pricing-and-discount"}
          >
            <i className="menu-icon fa fa-street-view text-secondary" />
            <span className="menu-title">Pricing & Discount</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-discount-trend"}
          >
            <i className="menu-icon fa fa-rocket text-primary" />
            <span className="menu-title">Discount Trend</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to={"/pbi-content-scroe"}
          >
            <i className="menu-icon fa fa-bitbucket text-success" />
            <span className="menu-title">Content Score</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to=""
          >
            <i className="menu-icon fa fa-crosshairs text-danger" />
            <span className="menu-title">SKU - Content Score</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to=""
          >
            <i className="menu-icon fa fa-buysellads text-primary" />
            <span className="menu-title">ASIN Level - Trend</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to=""
          >
            <i className="menu-icon  fa fa-bookmark text-warning" />
            <span className="menu-title">MO - Image Accuracy</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to=""
          >
            <i className="menu-icon fa fa-bandcamp text-success" />
            <span className="menu-title">Portfolio Analysis</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link {({ isActive }) =>
    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'"
            to=""
          >
            <i className="menu-icon fa fa-graduation-cap text-primary" />
            <span className="menu-title">Review & Rating</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Sidebar2;
