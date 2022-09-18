import React, { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { getUserdata } from "../service/api";
function Forgot() {
  // eslint-disable-next-line
  const initial = {
    email: "",
  };
  // eslint-disable-next-line

  const [user, setUser] = useState(initial);
  const [otpflag, setOtpflag] = useState("");
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user add", user);
    let res = await getUserdata(user);
    setOtpflag(res.data.flag);
  };
  if (otpflag == true) {
    alert("password send to email");
  }

  return (
    <>
      <Nav />
      <h3 className="text-center py-4">Forgot password</h3>
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
        <div className="row mt-3">
          <div className="col-lg-5"></div>
          <div className="col-lg-2">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
          <div className="col-lg-5"></div>
        </div>
      </form>
    </>
  );
}

export default Forgot;
