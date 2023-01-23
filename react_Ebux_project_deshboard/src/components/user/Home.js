import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="background">
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          <div className="col-lg-6 col-md-6">
            <div className="icon" style={{ marginTop: "0px" }}>
              <h1
                className="fa fa-laptop"
                style={{ fontSize: "xxx-large", color: "#f2e6e6" }}
              ></h1>

              <span
                style={{
                  fontSize: "42px",
                  fontFamily: "initial",
                  fontWeight: "bold",
                  color: "#f2e6e6",
                }}
              >
                Ebux
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link to="/contact-us">
              <button className="cssbuttons-io-button">
                Contact us
                <div className="icon">
                  <i
                    className="fa fa-arrow-right"
                    style={{ marginRight: "0em" }}
                  ></i>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="images/home-img.png"
              alt="illustration-mockups"
              className=""
            ></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row" style={{ marginTop: "3rem" }}>
              <div className="hero-text">
                <h1 className="head">eCommerce built to win.</h1>
                <p className="text">
                  Marketplace advertising, sales & intelligence. The enterprise
                  software solution to grow your business on Amazon, Walmart,
                  Instacart, and more..
                </p>
                <div className="row">
                  <div className="col-lg-6 text">
                    <Link to="/login">
                      <button className="btn btn success">Login</button>
                    </Link>
                  </div>
                  <div className="col-lg-6 text">
                    <Link to="/sign-up">
                      <button className="btn btn success">Sign up</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="socials">
          {/* <!-- Social Links --> */}
          <a href="https://www.facebook.com/login/">
            <button className="social-btn facebook"></button>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <button className="social-btn twitter"></button>
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <button className="social-btn instagram"></button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
