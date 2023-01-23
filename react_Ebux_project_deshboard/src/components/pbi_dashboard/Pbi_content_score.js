import React, { useEffect, useState } from "react";
import Header from "../ams_dashboard/Header";
import Sidebar from "./Pbi_sidebar";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { content_score } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { summary } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { content_score_filter } from "../../services/pbi_dashboard/pbi_dashboard_api";
import makeAnimated from "react-select/animated";
import "react-datepicker/dist/react-datepicker.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

function Pbi_content_score() {
  const [show, setShow] = useState();
  //it use for card data
  const [startDate, setStartDate] = useState(new Date());
  //api useState data
  const [carddatashow, setCarddatashow] = useState();
  const [cardresponse, setCardresponse] = useState();
  //array data store
  const [location, setLocation] = useState([]);
  const [locationdata, setLocationdata] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [keywordsdata, setKeywordsdata] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [created, setCreated] = useState([]);
  const [error, setError] = useState(false);
  const [createdData1, setCreateddata1] = useState([]);
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
  //form submit after api hit
  const handleRegistration = async (data) => {
    data["brand_category_name"] = "";
    data["keys"] = "";

    console.log(data);
    let resp = await content_score_filter(token, data);
    console.log(resp.data);
    if (resp.data.error) {
      setError(true);
      setKeywords([]);
      setKeywordsdata([]);
      setLocation([]);
      setLocationdata([]);
      setPlatform([]);
      setCreateddata1([]);
    } else {
      setError(false);
      setCardresponse(resp.data);
      loopFunction(resp);
    }
  };
  //first time api hit
  const getData = async () => {
    const res = await content_score(token);
    console.log(res.data);
    const summary_data = await summary(token);
    setShow(res.data);
    setCarddatashow(summary_data.data);
    const uniquedate = Array.from(
      new Set(res.data.platform_data.map((values) => values.created_on))
    );
    // console.log(uniquedate);
    setCreated(uniquedate);

    loopFunction(res);
  };

  const loopFunction = (resp) => {
    //location loop after api hit
    //here array into remove old array value and after add new value
    setLocation([]);
    setLocationdata([]);
    resp.data.location_data.map((locations) => {
      setLocation((location) => [...location, locations.location_name]);
      setLocationdata((locationdata) => [
        ...locationdata,
        locations.pdp_total_score,
      ]);
    });

    //keyword data loop
    setKeywords([]);
    setKeywordsdata([]);
    resp.data.brand_data.map((key_word) => {
      setKeywords((keywords) => [...keywords, key_word.brand_name]);
      setKeywordsdata((keywordsdata) => [
        ...keywordsdata,
        key_word.pdp_total_score,
      ]);
    });

    setPlatform([]);
    //plateform data loop
    const uniqueplateform = Array.from(
      new Set(resp.data.platform_data.map((values) => values.platform_name))
    );
    setPlatform(uniqueplateform);

    // plateform data get
    setCreateddata1([]);
    uniqueplateform.map((values) => {
      const data_value = resp.data.platform_data
        .filter((data) => data.platform_name === values)
        .map((value) => value.pdp_total_score.toFixed(0));
      console.log(data_value);
      setCreateddata1((createdData1) => [...createdData1, data_value]);
    });
  };

  //line chart
  const linedata = {
    labels: location,
    datasets: [
      {
        label: error ? "No Data Found" : "Location Wise Data ",
        backgroundColor: "rgb(0, 0, 255)",
        borderColor: "rgb(124,252,0)",
        data: locationdata,
        // height: "120px",
      },
    ],
  };
  //bar data
  const bardata = {
    labels: created,
    datasets: [],
  };

  platform.forEach((a, i) => {
    let color;
    switch (i) {
      case 0:
        color = "rgb(124,252,0)";
        break;
      case 1:
        color = "rgb(255, 234, 0)";
        break;
      case 2:
        color = "rgb(255, 93, 132)";
        break;
      case 3:
        color = "#023858";
        break;
      case 4:
        color = "#033858";
        break;
      case 5:
        color = "#036858";
        break;
      default:
        color = "#d6d6d6";
    }

    bardata.datasets.push({
      label: a,
      backgroundColor: color,
      borderColor: color,
      data: createdData1[i],
    });
  });
  // //horizontal chart
  const bar_hor_data = {
    labels: keywords,
    datasets: [
      {
        label: error ? "No Data Found " : "Content Score By Brand ",
        backgroundColor: "rgb(8, 143, 143)",
        borderColor: "rgb(124,252,0)",
        data: keywordsdata,
      },
    ],
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
              <Link to={"#"}>Content Score</Link>
            </div>
          </div>

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
          <div className="row" style={{ border: "1px solid gray" }}>
            {/* circular progress bar  */}
            <div
              className="col-lg-2 col-md-2 col-sm-12"
              style={{
                border: "1px solid gray",
                background: "linear-gradient(180deg,#911a6c,#d41459)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              {error ? (
                <div className="h4 text-white"> No data found</div>
              ) : (
                <div>
                  {cardresponse ? (
                    <div>
                      {cardresponse &&
                        cardresponse.category_data.map((values, index) => (
                          <div style={{ width: 100 }} key={index}>
                            <CircularProgressbar
                              value={values.pdp_total_score.toFixed(0)}
                              text={`${values.pdp_total_score.toFixed(0)}%`}
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
                              {values.brand_category_name}
                            </span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {show &&
                        show.category_data.map((values, index) => (
                          <div style={{ width: 100 }} key={index}>
                            <CircularProgressbar
                              value={values.pdp_total_score.toFixed(0)}
                              text={`${values.pdp_total_score.toFixed(0)}%`}
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
                              {values.brand_category_name}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="col-lg-10 col-md-10">
              <div
                className="row grid-margin stretch-card"
                style={{ padding: "0.3rem 0.78em" }}
              >
                <div
                  className="card p-0"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <h4 className="card-title text-center p-2 mb-1 bg-primary text-white">
                    Content Score Trend by Platform
                  </h4>
                  <div className="card-body lineBar">
                    {error ? (
                      <div className="text-center"> No Data Found </div>
                    ) : (
                      <Line
                        data={bardata}
                        options={{
                          interaction: {
                            intersect: false,
                            mode: "index",
                          },
                          scales: {
                            x: {
                              ticks: {
                                maxTicksLimit: 5,
                              },
                            },
                          },
                          maintainAspectRatio: false,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card p-0">
                    <h4 className="card-title text-center p-2 mb-1 bg-primary text-white">
                      Content Score By Brand
                    </h4>
                    <div className="card-body">
                      {/* //don't change this layout because of it use to set scrollbar   */}
                      <div
                        className="box"
                        style={{
                          height: "300px",
                          maxHeight: "200px",
                          overflowY: "scroll",
                        }}
                      >
                        <div className="subbox" style={{ height: "300px" }}>
                          <Bar
                            data={bar_hor_data}
                            options={{
                              indexAxis: "y",
                              maintainAspectRatio: false,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <h4 className="card-title text-center p-2 mb-1 bg-primary text-white">
                      Location Wise Content Score
                    </h4>
                    <div className="card-body">
                      <Bar data={linedata} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pbi_content_score;
