import React, { useState } from "react";

import Nav from "./Nav";
import { getUser } from "../service/api";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function Login() {
  const initial = {
    email: "",
    password: "",
  };
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies("");
  const [user, setUser] = useState(initial);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user add", user);
    let res = await getUser(user);
    // console.log(res.data.token);
    setCookie("jwtoken", res.data.token, { path: "/", maxAge: 86400 });
    navigate("/");
  };
  return (
    <>
      <Nav />
      <div className=" my-4 py-5">
        <h4 className="text-center py-4">Login User</h4>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <i className="fa fa-envelope px-2"></i>
                <label style={{ fontFamily: "cursive" }}> Email</label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  className="form-control"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <i className="fa fa-eye px-2"></i>
                <label style={{ fontFamily: "cursive" }}>Password</label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 text-end">
                <Link to="/forgot">Forgot Password </Link>
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 d-grid gap-2 mx-auto">
                <button
                  className="form-control my-2 btn btn-primary"
                  type="Submit"
                >
                  Submit Here
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4 text-center">
                <Link to="/register">Click here to Registration </Link>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </form>

          <div className="row my-3">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-grid gap-2 mx-auto">
              <button type="button" className="btn btn-primary ">
                <i className="fa fa-facebook-f px-3"></i>
                Facebook
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 d-grid gap-2 mx-auto">
              <button type="button" className="btn btn-danger my-2">
                <i className="fab fa-google-plus-g px-3"></i>
                Google
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
