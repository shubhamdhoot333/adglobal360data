import React from "react";

function Demo() {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-sm-12">
            <div className="home-tab">
              <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active ps-0"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#overview"
                      role="tab"
                      aria-controls="overview"
                      aria-selected="true"
                    >
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#audiences"
                      role="tab"
                      aria-selected="false"
                    >
                      Audiences
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      href="#demographics"
                      role="tab"
                      aria-selected="false"
                    >
                      Demographics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link border-0"
                      id="more-tab"
                      data-bs-toggle="tab"
                      href="#more"
                      role="tab"
                      aria-selected="false"
                    >
                      More
                    </a>
                  </li>
                </ul>
                <div>
                  <div className="btn-wrapper">
                    <a
                      href="#"
                      className="btn btn-otline-dark align-items-center"
                    >
                      <i className="icon-share" /> Share
                    </a>
                    <a href="#" className="btn btn-otline-dark">
                      <i className="icon-printer" /> Print
                    </a>
                    <a href="#" className="btn btn-primary text-white me-0">
                      <i className="icon-download" /> Export
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0.25rem",
                      backgroundColor: "rgb(66 66 66)",
                      backgroundClip: "border-box",
                      border: "1px solid rgba(0,0,0,.125)",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{ padding: "1.75rem 1.5625rem" }}
                    >
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex align-items-center align-self-start">
                            <h3 className="mb-0 text-white">$12.34</h3>
                            <p
                              className="text-success ml-2 mb-0 font-weight-medium"
                              style={{ marginLeft: "0.5em" }}
                            >
                              +3.5%
                            </p>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="icon icon-box-success ">
                            <i className="mdi mdi-arrow-top-right icon-item" />
                          </div>
                        </div>
                      </div>
                      <h6 className="text-info font-weight-normal mt-2">
                        {" "}
                        Potential growth
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0.25rem",
                      backgroundColor: "rgb(66 66 66)",
                      backgroundClip: "border-box",
                      border: "1px solid rgba(0,0,0,.125)",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex align-items-center align-self-start">
                            <h3 className="mb-0 text-white">$17.34</h3>
                            <p
                              className="text-success ml-2 mb-0 font-weight-medium"
                              style={{ marginLeft: "0.5em" }}
                            >
                              +11%
                            </p>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="icon icon-box-success">
                            <span className="mdi mdi-arrow-top-right icon-item" />
                          </div>
                        </div>
                      </div>
                      <h6 className="text-info font-weight-normal mt-2">
                        Revenue current
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0.25rem",
                      backgroundColor: "rgb(66 66 66)",
                      backgroundClip: "border-box",
                      border: "1px solid rgba(0,0,0,.125)",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex align-items-center align-self-start">
                            <h3 className="mb-0 text-white">$12.34</h3>
                            <p
                              className="text-danger ml-2 mb-0 font-weight-medium"
                              style={{ marginLeft: "0.5em" }}
                            >
                              -2.4%
                            </p>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="icon icon-box-danger">
                            <span className="mdi mdi-arrow-bottom-left icon-item" />
                          </div>
                        </div>
                      </div>
                      <h6 className="text-info font-weight-normal mt-2">
                        Daily Income
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0.25rem",
                      backgroundColor: "rgb(66 66 66)",
                      backgroundClip: "border-box",
                      border: "1px solid rgba(0,0,0,.125)",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex align-items-center align-self-start">
                            <h3 className="mb-0 text-white">$31.53</h3>
                            <p
                              className="text-success ml-2 mb-0 font-weight-medium"
                              style={{ marginLeft: "0.5em" }}
                            >
                              +3.5%
                            </p>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="icon icon-box-success ">
                            <span className="mdi mdi-arrow-top-right icon-item" />
                          </div>
                        </div>
                      </div>
                      <h6 className="text-info font-weight-normal mt-2">
                        Expense current
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-white text-center text-sm-left d-block d-sm-inline-block">
            Premium{" "}
            <a href="" target="_blank">
              Adglobal360
            </a>
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Copyright © 2021. All rights reserved.
          </span>
        </div>
      </footer>
      {/* partial */}
    </div>
  );
}

export default Demo;
