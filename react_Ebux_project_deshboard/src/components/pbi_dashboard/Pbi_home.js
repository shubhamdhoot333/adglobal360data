import React, { useEffect, useState } from "react";
// import Pbi_header from "./Pbi_header";
import Header from "../ams_dashboard/Header";
import Pbi_sidebar from "./Pbi_sidebar";
import { useForm } from "react-hook-form";
// import Setting from "../ams_dashboard/Setting.js";
import makeAnimated from "react-select/animated";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { summary } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { summarydata } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { useCookies } from "react-cookie";
import { ThreeDots } from "react-loader-spinner";
import { color } from "@mui/system";
import { grey, red } from "@mui/material/colors";
import { grep } from "jquery";
import { Link } from "react-router-dom";
function Pbi_home() {
  //date picker state
  const [startDate, setStartDate] = useState(new Date());

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  const [show, setShow] = useState("");
  const [error, setError] = useState(false);
  const [show1, setShow1] = useState("");

  let token = cookies.access_token;
  useEffect(() => {
    tdbgcolor();
    rankingcolor();
    avg();
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //console.log(token);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await summary(token);
    setShow(res.data);
    // console.log(res.data);
  };
  const handleRegistration = async (data) => {
    // console.log(data);
    data["keys"] = "";
    data["product_name"] = "";
    let resp = await summarydata(token, data);
    if (resp.data.error) {
      setError(true);
    } else {
      // console.log(resp.data);
      // console.log(resp.data.error);

      setShow1(resp.data);
      setError(false);
    }
  };

  const imgfunction = (data) => {
    // console.log(data);
    if (data === "Amazon") {
      return <img src="images/Amazon.png" alt="amazon" />;
    } else if (data === "Amazon Fresh") {
      return <img src="images/Amazon_fresh.png" alt="amazon" />;
    } else if (data === "Bigbasket") {
      return <img src="images/bigbasket.jpg" alt="amazon" />;
    } else if (data === "Blinkit") {
      return <img src="images/blinkit.png" alt="amazon" />;
    } else if (data === "Flipkart Supermart") {
      return <img src="images/flipkart-supermart.jpeg" alt="amazon" />;
    }
  };

  const tdbgcolor = (data) => {
    if (data > 0 && data <= 40) {
      return "#ef5350";
    } else if (data > 40 && data <= 80) {
      return "#ffee58";
    } else if (data > 80 && data <= 100) {
      return "#43a047";
    } else {
      return "#9e9e9e";
    }
  };
  const rankingcolor = (data) => {
    if (data > 0 && data <= 4) {
      return "#ef5350";
    } else if (data > 4 && data < 8) {
      return "#ffee58";
    } else if (data >= 8 && data <= 10) {
      return "#43a047";
    } else {
      return "#9e9e9e";
    }
  };
  const avg = (data) => {
    if (data > 0) {
      return "#43a047";
    } else {
      return "#757575";
    }
  };
  return (
    <>
      <div className="container-scroller">
        <Header />

        <div className="container-fluid page-body-wrapper">
          <Pbi_sidebar />

          <div className="container mt-2">
            <div className="row" style={{ textAlign: "center" }}>
              <div
                className="breadcrumb flat p-0"
                style={{ marginBottom: "4px" }}
              >
                <Link to={"/dashboard"} className="active">
                  PowerBi Dashboard
                </Link>
                <Link to={""} style={{ pointerEvents: "none" }}>
                  <span> {">>"} </span>{" "}
                </Link>
                <Link to={"#"}>Platform Wise Summary</Link>
              </div>
            </div>
            {/* 
            <div className="row">
              <div className="card filterCard">
                <div className="card-body p-3">
                  <h2> Plateform Wise Summary</h2>
                </div>
              </div>
            </div> */}
            <form onChange={handleSubmit(handleRegistration)}>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  <div className="card" style={{ border: "none" }}>
                    <div className="card-body">
                      <p className="card-title mb-2"></p>
                      <span className="card-text">
                        <img
                          src="images/Perfetti_Van_Melle_logo.png"
                          alt="logo"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Date</h5>
                      <span className="card-text">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Category</h5>
                      <span className="card-text">
                        <select
                          name="brand_category_name"
                          {...register("brand_category_name")}
                          className="brand_category_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                          {show &&
                            show.category.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Brand</h5>
                      <span className="card-text">
                        <select
                          name="brand_name"
                          {...register("brand_name")}
                          className="brand_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any</option>
                          {show &&
                            show.brand.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Platform</h5>
                      <span className="card-text">
                        <select
                          name="platform_name"
                          {...register("platform_name")}
                          className="platform_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                          {show &&
                            show.platform.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Location</h5>
                      <span className="card-text">
                        <select
                          name="location_name"
                          {...register("location_name")}
                          className="location_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                          {show &&
                            show.location.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {error ? (
              <div className="row mt-5">
                <div className="card text-center">
                  <div className="card-header">data not found</div>
                </div>
              </div>
            ) : (
              <>
                {!show ? (
                  <div className="row mt-5">
                    <div
                      className="col-12"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                      />
                    </div>
                  </div>
                ) : (
                  <div className="row ">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered table-hover mt-2 "
                        style={{
                          width: "100%",
                          height: "300px",
                          overflow: "scroll",
                        }}
                      >
                        <thead className="bg-info text-white all serviceEleven text-center">
                          <tr>
                            <th scope="col">Platfrom</th>
                            <th scope="col">Availability %</th>
                            <th scope="col">Share_of_Search</th>
                            <th scope="col">Ranking </th>
                            <th scope="col">Content_Score</th>
                            <th scope="col">Average selling price </th>
                            <th scope="col">Discount </th>
                            <th scope="col">Review </th>
                          </tr>
                        </thead>
                        {show1 && show1.summary_data.length === 0 ? (
                          <tbody id="table_body">
                            <tr key={"nodata"}>
                              <td colSpan="8" style={{ textAlign: "center" }}>
                                <h5> No Information available </h5>
                              </td>
                            </tr>
                          </tbody>
                        ) : null}
                        {show1 ? (
                          <tbody id="table_body">
                            {show1.summary_data.map((value, index) => (
                              <tr key={index}>
                                <td style={{ textAlign: "center" }}>
                                  {imgfunction(value.platform_name)}
                                </td>
                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.availability * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.availability * 100).toFixed(1) + "%"}
                                </td>
                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.share_of_search * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.share_of_search * 100).toFixed(1) +
                                    "%"}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: rankingcolor(
                                      value.ranking.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.ranking.toFixed(1)}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      value.content_score.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.content_score.toFixed(1) + "%"}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: avg(
                                      value.avg_selling_price.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.avg_selling_price.toFixed(1)}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.discount * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.discount * 100).toFixed(1) + "%"}
                                </td>

                                <td
                                  style={{
                                    background: "#9e9e9e",
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  0
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        ) : (
                          <tbody id="table_body">
                            {show.summary_data.map((value, index) => (
                              <tr key={index}>
                                <td style={{ textAlign: "center" }}>
                                  {imgfunction(value.platform_name)}
                                </td>
                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.availability * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.availability * 100).toFixed(1) + "%"}
                                </td>
                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.share_of_search * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.share_of_search * 100).toFixed(1) +
                                    "%"}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: rankingcolor(
                                      value.ranking.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.ranking.toFixed(1)}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      value.content_score.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.content_score.toFixed(1) + "%"}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: avg(
                                      value.avg_selling_price.toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {value.avg_selling_price.toFixed(1)}
                                </td>

                                <td
                                  style={{
                                    // backgroundColor: "red",
                                    backgroundColor: tdbgcolor(
                                      (value.discount * 100).toFixed(1)
                                    ),
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  {(value.discount * 100).toFixed(1) + "%"}
                                </td>

                                <td
                                  style={{
                                    background: "#9e9e9e",
                                    textAlign: "center",
                                    color: "#ffffff",
                                  }}
                                >
                                  0
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pbi_home;
