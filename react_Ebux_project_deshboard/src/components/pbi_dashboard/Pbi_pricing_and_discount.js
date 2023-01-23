import React, { useEffect, useState } from "react";
import Header from "../ams_dashboard/Header";
import Sidebar from "./Pbi_sidebar";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { price_discount } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { summary } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { price_discount_filter } from "../../services/pbi_dashboard/pbi_dashboard_api";
import makeAnimated from "react-select/animated";
import "react-datepicker/dist/react-datepicker.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function Pbi_pricing_and_discount() {
  const [show, setShow] = useState();
  //it use for card data
  const [startDate, setStartDate] = useState(new Date());
  //api useState data
  const [carddatashow, setCarddatashow] = useState();
  const [cardresponse, setCardresponse] = useState();
  //array data store

  const [error, setError] = useState(false);

  //cookies data store
  const [cookies, setCookie] = useCookies();
  let token = cookies.access_token;

  useEffect(() => {
    getData();
  }, []);
  //form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const handleRegistration = async (data) => {
    data["brand_category_name"] = "";
    data["keys"] = "";
    let resp = await price_discount_filter(token, data);
    // console.log(resp.data);
    if (resp.data.error) {
      setError(true);
    } else {
      setError(false);
      setCardresponse(resp.data);
    }
  };
  const getData = async () => {
    const res = await price_discount(token);
    const summary_data = await summary(token);
    console.log(summary_data.data);
    console.log(res.data);
    setShow(res.data);
    setCarddatashow(summary_data.data);
  };
  return (
    <div className="container-scroller">
      <Header title="PowerBi Dashboard" />
      <div className="container-fluid page-body-wrapper">
        {/* <Pbi_sidebar /> */}
        <Sidebar />
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
              <Link to={"#"}>Pricing & Discount</Link>
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
                    <h2 style={{ padding: "1.2rem" }}>Pricing and Discount</h2>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-xl-6 text-center text-xl-right">
                    <img src="#" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row seven-cols mb-2">
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

                <div className="col-lg-1 col-md-2 col-sm-6 mt-3">
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
                          {carddatashow &&
                            carddatashow.brand.map((value, index) => (
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
                          {carddatashow &&
                            carddatashow.platform.map((value, index) => (
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
                          {carddatashow &&
                            carddatashow.location.map((value, index) => (
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
                      <h5 className="card-title">ASIN</h5>
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
                      <h5 className="card-title">Product Name</h5>
                      <span className="card-text">
                        <select
                          name="product_name"
                          {...register("product_name")}
                          className="product_name"
                          id="inputGroupSelect01"
                        >
                          <option value="">choose any </option>
                          {carddatashow &&
                            carddatashow.product_name.map((value, index) => (
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

          <div
            className="row"
            style={{ border: "1px solid gray", height: "27.5rem" }}
          >
            {/* circular progress bar  */}
            <div
              className="col-lg-2 col-md-2 col-sm-12"
              style={{
                border: "1px solid gray",
                background: "linear-gradient(180deg,#911a6c,#d41459)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                height: "27.5rem",
                overflowY: "scroll",
              }}
            >
              {error ? (
                <div className="h4 text-white"> No data found</div>
              ) : (
                <div>
                  {cardresponse ? (
                    <div>
                      {cardresponse &&
                        cardresponse.brand_data.map((value, index) => (
                          <div style={{ width: 100 }} key={index}>
                            <CircularProgressbar
                              value={(value.discount * 100).toFixed(0)}
                              text={`${(value.discount * 100).toFixed(0)}%`}
                              styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "rgb(255 255 255)",
                                pathColor: "#8dbd4d",
                                trailColor: "rgb(255 255 255 / 57%)",
                              })}
                            />
                            <span
                              style={{
                                position: "absolute",
                                margin: "40px auto",
                                paddingLeft: "10px",
                                fontweight: "700",
                                color: "#ffffff",
                              }}
                            >
                              {value.brand_name}
                            </span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {show &&
                        show.brand_data.map((value, index) => (
                          <div
                            style={{
                              width: "100px",
                              margin: "0 auto",
                              padding: "3px",
                              textAlign: "center",
                            }}
                            key={index}
                          >
                            <CircularProgressbar
                              value={(value.discount * 100).toFixed(0)}
                              text={`${(value.discount * 100).toFixed(0)}%`}
                              styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "rgb(255 255 255)",
                                pathColor: "#2c3adb",
                                trailColor: "rgb(255 255 255 / 57%)",
                              })}
                            />
                            <span
                              style={{
                                // position: "absolute",
                                margin: "40px auto",
                                paddingLeft: "10px",
                                fontweight: "700",
                                color: "#ffffff",
                              }}
                            >
                              {value.brand_name}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div
              className="col-lg-10 col-md-10"
              style={{ height: "27.5rem", overflowY: "scroll" }}
            >
              <table
                className="table table-scroll  table-native"
                style={{ zIndex: "3" }}
              >
                <thead
                  style={{
                    background: "#8086b5",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Platform</th>
                    <th scope="col">Product</th>
                    <th scope="col">Location</th>
                    <th scope="col">OSA</th>
                    <th scope="col">MRP</th>
                    <th scope="col">Selling Price</th>
                    <th scope="col">Discount</th>
                  </tr>
                </thead>
                <tbody id="table_body">
                  {error ? (
                    <tr key={"nodata"}>
                      <td colSpan="8" style={{ textAlign: "center" }}>
                        <h5> No Information available </h5>
                      </td>
                    </tr>
                  ) : cardresponse ? (
                    cardresponse &&
                    cardresponse.data.map((value, index) => (
                      <tr key={index}>
                        <th scope="row">{value.Date}</th>
                        <td>{value.Platform}</td>
                        <td>{value.Product}</td>
                        <td>{value.Location}</td>
                        <td>{value.OSA}</td>
                        <td>₹{value.MRP}</td>
                        <td>₹{value.selling_price}</td>
                        <td>{value.discount.toFixed(1)}%</td>
                      </tr>
                    ))
                  ) : show ? (
                    show.data.map((value, index) => (
                      <tr key={index}>
                        <th scope="row">{value.Date}</th>
                        <td>{value.Platform}</td>
                        <td>{value.Product}</td>
                        <td>{value.Location}</td>
                        <td>{value.OSA}</td>
                        <td>₹{value.MRP}</td>
                        <td>₹{value.selling_price}</td>
                        <td>{value.discount.toFixed(1)}%</td>
                      </tr>
                    ))
                  ) : (
                    <div
                      style={{
                        margin: "auto",
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
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
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pbi_pricing_and_discount;
