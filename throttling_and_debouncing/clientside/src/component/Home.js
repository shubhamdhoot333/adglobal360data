import React, { useState, useEffect } from "react";
import { setProfile, getPhotoData } from "../service/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Nav from "./Nav";
function Home() {
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [img, setImg] = useState("");
  function onValueChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    // console.log(token_value);
    let res = await setProfile(formData, token_value);
    if (!res) {
      alert("User need to login");
      navigate("/login");
    } else {
      alert("images upload successfullt");
    }
    getphoto(token_value);
  };
  useEffect(() => {
    getphoto(token_value);
  }, []);

  const getphoto = async (token_value) => {
    let res1 = await getPhotoData(token_value);
    setImg(res1);
    console.log(res1);
  };
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row py-4 my-5">
          <div className="col-lg-12 text-center">
            <h4 style={{ fontFamily: "cursive" }}> Your Photo Collection </h4>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 ">
            <form onSubmit={handleSubmit}>
              <label className="form-label h5">Photo Upload Here</label>

              <input
                type="file"
                name="profilepic"
                onChange={(e) => onValueChange(e)}
                className="form-control my-1"
                id="customFile"
              />

              <button
                className="form-control my-2 btn btn-primary"
                type="Submit"
              >
                Submit Here
              </button>
            </form>
          </div>
          <div className="col-lg-4 text-center">
            <h4>Image Slider</h4>
            {!img ? (
              <div className="card text-center">
                <div className="card-header">data not found</div>
              </div>
            ) : (
              <div style={{ width: "auto", heigth: "auto" }}>
                <Carousel>
                  {img.data.map((value, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={`http://localhost:8000/images/${value.photo}`}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
