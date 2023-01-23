import React, { useEffect, useState } from "react";
import Header from "../ams_dashboard/Header";
import Sidebar from "./Pbi_sidebar";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { organic_rank } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { summary } from "../../services/pbi_dashboard/pbi_dashboard_api";
import { organic_rank_filter } from "../../services/pbi_dashboard/pbi_dashboard_api";
import makeAnimated from "react-select/animated";
import "react-datepicker/dist/react-datepicker.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

function Pbi_organic_rank() {
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
    data["product_name"] = "";
    let resp = await organic_rank_filter(token, data);
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
    const res = await organic_rank(token);
    const summary_data = await summary(token);
    setShow(res.data);
    setCarddatashow(summary_data.data);
    const uniquedate = Array.from(
      new Set(res.data.platform_data.map((values) => values.created_on))
    );
    // console.log(uniquedate);
    setCreated(uniquedate);
    // for (let l = 0; l < res.data.platform_data.length; l++) {
    //   if (
    //     res.data.platform_data[l].platform_name ===
    //     ("Bigbasket" || "Blinkit" || "Flipkart Supermart")
    //   ) {
    //     setCreated((created) => [
    //       ...created,
    //       res.data.platform_data[l].created_on,
    //     ]);
    //   }
    // }

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
        locations.keyword_search_rank,
      ]);
    });

    //keyword data loop
    setKeywords([]);
    setKeywordsdata([]);
    resp.data.keyword_data.map((key_word) => {
      setKeywords((keywords) => [...keywords, key_word.keyword]);
      setKeywordsdata((keywordsdata) => [
        ...keywordsdata,
        key_word.keyword_search_rank,
      ]);
    });

    setPlatform([]);
    const uniqueplateform = Array.from(
      new Set(resp.data.platform_data.map((values) => values.platform_name))
    );
    setPlatform(uniqueplateform);

    // resp.data.platform_data
    //   .filter((value) => {
    //     return value.created_on === resp.data.platform_data[0].created_on;
    //   })
    //   .map((value) =>
    //     setPlatform((platform) => [...platform, value.platform_name])
    //   );

    // plateform data get
    setCreateddata1([]);
    uniqueplateform.map((values) => {
      const data_value = resp.data.platform_data
        .filter((data) => data.platform_name === values)
        .map((value) => value.keyword_search_rank.toFixed(0));
      console.log(data_value);
      setCreateddata1((createdData1) => [...createdData1, data_value]);
    });
    // for (var i = 0; i < resp.data.platform_data.length / 3; i++) {
    //   resp.data.platform_data
    //     .filter((value) => {
    //       return (
    //         value.platform_name === resp.data.platform_data[i].platform_name
    //       );
    //     })
    //     .map((value) =>
    //       setCreateddata((createdData) => [
    //         ...createdData,
    //         value.keyword_search_rank,
    //       ])
    //     );
    // }
  };

  //line chart
  const linedata = {
    labels: location,
    datasets: [
      {
        label: error ? "No Data Found" : "Location wise data ",
        backgroundColor: "rgb(0, 0, 255)",
        borderColor: "rgb(124,252,0)",
        data: locationdata,
        // height: "120px",
      },
    ],
  };

  //horizontal chart
  const bar_hor_data = {
    labels: keywords,
    datasets: [
      {
        label: error ? "No Data Found " : "Organic Rank top 10 keyword ",
        backgroundColor: "rgb(8, 143, 143)",
        borderColor: "rgb(124,252,0)",
        data: keywordsdata,
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
        color = "#f76858";
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

  return (
    <div className="container-scroller">
      <Header title="PowerBi Dashboard" />
      <div className="container-fluid page-body-wrapper">
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
              <Link to={"#"}>Organic Rank</Link>
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
              <div className="card-body p-3">
               
                    <h2>Organic Rank</h2>
                  
              </div>
            </div>
          </div> */}

          <div className="row seven-cols">
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
                          {carddatashow &&
                            carddatashow.keys.map((value, index) => (
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
              className="col-lg-2 col-md-2 col-sm-6"
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
                        cardresponse.category_data.map((value, index) => (
                          <div style={{ width: 100 }} key={index}>
                            <CircularProgressbar
                              value={value.keyword_search_rank.toFixed(0)}
                              text={`${value.keyword_search_rank.toFixed(0)}%`}
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
                              {value.brand_category_name}
                            </span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {show &&
                        show.category_data.map((value, index) => (
                          <div
                            style={{
                              width: "100px",
                              margin: "0px auto",
                              padding: "5px",
                              textAlign: "center",
                            }}
                            key={index}
                          >
                            <CircularProgressbar
                              value={value.keyword_search_rank.toFixed(0)}
                              text={`${value.keyword_search_rank.toFixed(0)}%`}
                              styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "rgb(255 255 255)",
                                pathColor: "#8dbd4d",
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
                              {value.brand_category_name}
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
                    Average Rank Trend by Platform
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
                      Keyword Wise Average Rank
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
                        <div className="subbox" style={{ height: "500px" }}>
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
                      Location Wise Average Rank
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

export default Pbi_organic_rank;
