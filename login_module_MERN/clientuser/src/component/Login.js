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
      <center>
        <h1>Login User</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <label>Password</label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-5"></div>
              <div className="col-lg-2">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                />
              </div>
              <div className="col-lg-5"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <Link to="/register">Click here to Registration </Link>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </form>
          <div className="row mt-3">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <Link to="/forgot">Forgot Password </Link>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <button type="button" className="btn btn-primary m-2">
                Facebook
              </button>
              <button type="button" className="btn btn-danger m-2">
                Gmail
              </button>
              <button type="button" className="btn btn-success m-2">
                Google
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Login;
