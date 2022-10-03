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
    // console.log("user add", user);
    let res = await getUser(user);
    // console.log(res.data.token);
    setCookie("jwtoken", res.data.token, { path: "/", maxAge: 86400 });
    navigate("/");
  };
  return (
    <>
      <Nav />
      <div className=" mt-2 py-5">
        <div className="container my-4">
          <form onSubmit={handleSubmit}>
            <div className="shadow-lg p-1 mb-5 bg-body rounded">
              <h4 className="text-center py-4">Login User</h4>

              <div className="row ">
                <div className="col-lg-4"></div>
              </div>
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
              <div className="row my-3 text-center">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 d-grid gap-2 mx-auto">
                  <h5>Or</h5>
                </div>
                <div className="col-lg-4"></div>
              </div>
              <div className="row mt-3 mb-4">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 d-grid gap-2 mx-auto">
                  <Link to="/register" className="h6">
                    <button
                      className="form-control  btn btn-primary"
                      type="Submit"
                    >
                      Register Here
                    </button>
                  </Link>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
