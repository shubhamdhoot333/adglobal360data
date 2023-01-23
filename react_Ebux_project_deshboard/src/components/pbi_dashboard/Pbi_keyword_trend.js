import React, { useEffect, useState } from "react";
import Header from "../ams_dashboard/Header";
import Pbi_sidebar from "./Pbi_sidebar";
// import Pbi_organic_rank_card from "./Pbi_organic_rank_card";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { keyword_trand } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { summary } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { keyword_trand_filter } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { useCookies } from "react-cookie";
import makeAnimated from "react-select/animated";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Pbi_keyword_trend() {
  //date picker state
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState("");
  const [summary1, setSummary1] = useState("");
  const [resultdata, setResultdata] = useState([]);
  const [resultdata1, setResultdata1] = useState([]);
  const [resultdata2, setResultdata2] = useState([]);
  const [error, setError] = useState(false);
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  let token = cookies.access_token;
  //console.log(token);
  useEffect(() => {
    getData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const handleRegistration = async (data) => {
    data["product_name"] = "";
    let resp = await keyword_trand_filter(token, data);
    const res1 = await summary(token);
    console.log(data);
    console.log(resp);
    if (resp.data.error) {
      setError(true);
      setResultdata([]);
      setResultdata1([]);
      setResultdata2([]);
    } else {
      setError(false);
      loopfun(res1, resp);
    }
  };

  const getData = async () => {
    const res = await keyword_trand(token);
    const res1 = await summary(token);
    setShow(res.data);
    setSummary1(res1.data);
    console.log(res.data);
    console.log(res1.data);
    loopfun(res1, res);
  };
  const loopfun = (res1, res) => {
    setResultdata([]);
    setResultdata1([]);
    setResultdata2([]);
    //day 1
    const result = res.data.data.filter((value) => {
      return value.created_on === "2022-10-15";
    });
    for (let i = 0; i < res1.data.platform.length; i++) {
      for (let j = 0; j < res1.data.location.length; j++) {
        for (let k = 0; k < res1.data.category.length; k++) {
          for (let l = 0; l < res1.data.brand.length; l++) {
            const result1 = result.filter((value) => {
              return (
                value.platform_name === res1.data.platform[i] &&
                value.location_name === res1.data.location[j] &&
                value.brand_category_name === res1.data.category[k] &&
                value.brand_name === res1.data.brand[l]
              );
            });
            if (result1.length > 0) {
              setResultdata((resultdata) => [...resultdata, result1]);
            }
          }
        }
      }
    }

    //day 2
    const result2 = res.data.data.filter((value) => {
      return value.created_on === "2022-10-16";
    });
    for (let i = 0; i < res1.data.platform.length; i++) {
      for (let j = 0; j < res1.data.location.length; j++) {
        for (let k = 0; k < res1.data.category.length; k++) {
          for (let l = 0; l < res1.data.brand.length; l++) {
            const result3 = result2.filter((value) => {
              return (
                value.platform_name === res1.data.platform[i] &&
                value.location_name === res1.data.location[j] &&
                value.brand_category_name === res1.data.category[k] &&
                value.brand_name === res1.data.brand[l]
              );
            });
            if (result3.length > 0) {
              setResultdata1((resultdata1) => [...resultdata1, result3]);
            }
          }
        }
      }
    }

    //day 3
    const result4 = res.data.data.filter((value) => {
      return value.created_on === "2022-10-17";
    });
    for (let i = 0; i < res1.data.platform.length; i++) {
      for (let j = 0; j < res1.data.location.length; j++) {
        for (let k = 0; k < res1.data.category.length; k++) {
          for (let l = 0; l < res1.data.brand.length; l++) {
            const result5 = result4.filter((value) => {
              return (
                value.platform_name === res1.data.platform[i] &&
                value.location_name === res1.data.location[j] &&
                value.brand_category_name === res1.data.category[k] &&
                value.brand_name === res1.data.brand[l]
              );
            });
            if (result5.length > 0) {
              setResultdata2((resultdata1) => [...resultdata1, result5]);
            }
          }
        }
      }
    }
  };
  // resultdata1.reverse();
  // resultdata2.reverse();
  // resultdata.reverse();

  return (
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
              <Link to={"#"}>Keyowrd Trend</Link>
            </div>
          </div>
          {/* <div className="row">
            <div
              className="card"
              style={{
                background: "#00000",
                borderRadius: "0px",
                boxShadow:
                  "rgb(0 0 0 / 40%) 0px 2px 4px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 20%) 0px -3px 0px inset",
              }}
            >
              <div className="card-body" style={{ padding: "0rem 1rem" }}>
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-xl-6 my-auto">
                    <h2 style={{ padding: "1rem" }}>Keyword Trend</h2>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-xl-6 text-center text-xl-right">
                    <img src="#" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row seven-cols mb-1">
            <form onChange={handleSubmit(handleRegistration)}>
              <div className="row mt-1 mb-3">
                <div className="col-lg-1 col-md-2 col-sm-12">
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

                {/* categories    */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Categories</h5>
                      <span className="card-text">
                        <select
                          name="brand_category_name"
                          {...register("brand_category_name")}
                          className="brand_category_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">Categories </option>
                          {summary1 &&
                            summary1.category.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Brand */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
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
                          {summary1 &&
                            summary1.brand.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                {/* platform */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
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
                          {summary1 &&
                            summary1.platform.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
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
                          {summary1 &&
                            summary1.location.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                {/* keyword type */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Keyword Type</h5>
                      <span className="card-text">
                        <select
                          name="keys"
                          className="keys"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                {/* keyword */}
                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
                  <div className="card filterCard">
                    <div className="card-body">
                      <h5 className="card-title">Keyword</h5>
                      <span className="card-text">
                        <select
                          name="keys"
                          {...register("keys")}
                          className="keys"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                          {summary1 &&
                            summary1.keys.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* <Pbi_organic_rank_card /> */}
          <div className="row p-2 mb-1 bg-danger text-white">
            <span>Date Available Till : </span>
          </div>
          <div className="row p-1 mb-2 bg-primary text-white text-center">
            <span>Daily Keyowrd Details</span>
          </div>

          <div>
            <div
              id="exTab2"
              className="container"
              style={{ height: "27rem", overflowY: "scroll" }}
            >
              <ul className="nav nav-tabs">
                <li className="active" style={{ textDecoration: "none" }}>
                  <Link to={"#1"} data-toggle="tab">
                    {" "}
                    Day 1 Data
                  </Link>
                </li>
                <li>
                  <Link to={"#2"} data-toggle="tab">
                    {" "}
                    Day 2 Data
                  </Link>
                </li>
                <li>
                  <Link to={"#3"} data-toggle="tab">
                    {" "}
                    Day 3 Data
                  </Link>
                </li>
              </ul>
              <div className="tab-content ">
                <div className="tab-pane active" id={1}>
                  {error ? (
                    "no data found"
                  ) : (
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">plateform</th>
                            <th scope="col">Location</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">keyword</th>
                            <th scope="col">15-10-22 </th>
                          </tr>
                        </thead>

                        {resultdata
                          ? resultdata.map((value, index) => (
                              <tbody key={index}>
                                {value.map((values, i) => (
                                  <tr key={i}>
                                    <td>{values.platform_name}</td>
                                    <td>{values.location_name}</td>
                                    <td>{values.brand_category_name}</td>
                                    <td>{values.brand_name}</td>
                                    <td>{values.keyword}</td>
                                    <td>
                                      {(
                                        values.keyword_is_rb_product * 100
                                      ).toFixed(1)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            ))
                          : ""}
                      </table>
                    </div>
                  )}
                </div>
                <div className="tab-pane" id={2}>
                  {error ? (
                    "no Data found"
                  ) : (
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">plateform</th>
                            <th scope="col">Location</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">keyword</th>
                            <th scope="col">16-10-22 </th>
                          </tr>
                        </thead>

                        {resultdata1
                          ? resultdata1.map((value, index) => (
                              <tbody key={index}>
                                {value.map((values, i) => (
                                  <tr key={i}>
                                    <td>{values.platform_name}</td>
                                    <td>{values.location_name}</td>
                                    <td>{values.brand_category_name}</td>
                                    <td>{values.brand_name}</td>
                                    <td>{values.keyword}</td>
                                    <td>
                                      {(
                                        values.keyword_is_rb_product * 100
                                      ).toFixed(1)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            ))
                          : ""}
                      </table>
                    </div>
                  )}
                </div>
                <div className="tab-pane" id={3}>
                  {error ? (
                    "no Data found"
                  ) : (
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">plateform</th>
                            <th scope="col">Location</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">keyword</th>
                            <th scope="col">17-10-22 </th>
                          </tr>
                        </thead>

                        {resultdata2
                          ? resultdata2.map((value, index) => (
                              <tbody key={index}>
                                {value.map((values, i) => (
                                  <tr key={i}>
                                    <td>{values.platform_name}</td>
                                    <td>{values.location_name}</td>
                                    <td>{values.brand_category_name}</td>
                                    <td>{values.brand_name}</td>
                                    <td>{values.keyword}</td>
                                    <td>
                                      {(
                                        values.keyword_is_rb_product * 100
                                      ).toFixed(1)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            ))
                          : ""}
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Day 1 Data
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Day 2 Data
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Day 3 Data
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane active "
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {error ? (
                "no data found"
              ) : (
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">plateform</th>
                        <th scope="col">Location</th>
                        <th scope="col">Category</th>
                        <th scope="col">Brand</th>
                        <th scope="col">keyword</th>
                        <th scope="col">15-10-22 </th>
                      </tr>
                    </thead>

                    {resultdata
                      ? resultdata.map((value, index) => (
                          <tbody key={index}>
                            {value.map((values, i) => (
                              <tr key={i}>
                                <td>{values.platform_name}</td>
                                <td>{values.location_name}</td>
                                <td>{values.brand_category_name}</td>
                                <td>{values.brand_name}</td>
                                <td>{values.keyword}</td>
                                <td>
                                  {(values.keyword_is_rb_product * 100).toFixed(
                                    1
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        ))
                      : ""}
                  </table>
                </div>
              )}
             
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              {error ? (
                "no Data found"
              ) : (
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">plateform</th>
                        <th scope="col">Location</th>
                        <th scope="col">Category</th>
                        <th scope="col">Brand</th>
                        <th scope="col">keyword</th>
                        <th scope="col">16-10-22 </th>
                      </tr>
                    </thead>

                    {resultdata1
                      ? resultdata1.map((value, index) => (
                          <tbody key={index}>
                            {value.map((values, i) => (
                              <tr key={i}>
                                <td>{values.platform_name}</td>
                                <td>{values.location_name}</td>
                                <td>{values.brand_category_name}</td>
                                <td>{values.brand_name}</td>
                                <td>{values.keyword}</td>
                                <td>
                                  {(values.keyword_is_rb_product * 100).toFixed(
                                    1
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        ))
                      : ""}
                  </table>
                </div>
              )}
              
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              {error ? (
                "no Data found"
              ) : (
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">plateform</th>
                        <th scope="col">Location</th>
                        <th scope="col">Category</th>
                        <th scope="col">Brand</th>
                        <th scope="col">keyword</th>
                        <th scope="col">17-10-22 </th>
                      </tr>
                    </thead>

                    {resultdata2
                      ? resultdata2.map((value, index) => (
                          <tbody key={index}>
                            {value.map((values, i) => (
                              <tr key={i}>
                                <td>{values.platform_name}</td>
                                <td>{values.location_name}</td>
                                <td>{values.brand_category_name}</td>
                                <td>{values.brand_name}</td>
                                <td>{values.keyword}</td>
                                <td>
                                  {(values.keyword_is_rb_product * 100).toFixed(
                                    1
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        ))
                      : ""}
                  </table>
                </div>
              )}
              
            </div>
          </div>

           */}
        </div>
      </div>
    </div>
  );
}

export default Pbi_keyword_trend;
