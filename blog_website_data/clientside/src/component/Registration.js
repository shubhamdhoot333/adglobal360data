import React, { useState } from "react";
import Nav from "./Nav";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
function Registration() {
  const initial = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initial);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log("user add", user);
    let res = await addUser(user);
    //console.log(res.data.flag);

    navigate("/login");
  };
  return (
    <>
      <Nav />
      <div className=" my-4 py-5">
        <h4 className="text-center py-2">Registration User</h4>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <i className="fas fa-user-alt"></i>
                <label className="px-2" style={{ fontFamily: "cursive" }}>
                  Username
                </label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="name"
                  className="form-control"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mt-5">
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
            <div className="row mt-5">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <i className="fa fa-eye px-2"></i>
                <label style={{ fontFamily: "cursive" }}>Password</label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="password"
                  className="form-control"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-4">
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
