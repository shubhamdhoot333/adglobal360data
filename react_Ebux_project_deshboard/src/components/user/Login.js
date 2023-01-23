import React, { useState } from "react";

import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user/user_api";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  //visible password useState
  const [visible, setVisible] = useState(false);

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies("");
  const [flag, setFlag] = useState(true);
  const [disable, setdisable] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = async (data) => {
    setdisable(true);
    const response = await loginUser(data);

    if (response.data.success === false) {
      if (response.data.status === (400 || 403 || 401)) {
        setFlag(false);
        // setdisable(false);
        toast.error(response.data.message);
      }
    } else if (response.data.success === true) {
      if (response.data.status === (200 || 201)) {
        toast("Login Successfully !");
        //cookies set here for 1 day
        setCookie("access_token", response.data.access_token, {
          path: "/",
          maxAge: 86400,
        });
        setCookie("user_id", response.data.data.user_id, {
          path: "/",
          maxAge: 86400,
        });
        setTimeout(() => {
          navigate("/Dashboard");
        }, 2000);
      }
    }
  };
  return (
    <div className="container-fluid background">
      <div
        className="row main-content bg-success text-center"
        style={{ margin: "7em auto" }}
      >
        <div className="col-md-4 text-center company__info">
          <span className="company__logo">
            <h2>
              <span
                className="fa fa-user-plus"
                style={{
                  fontSize: "5em",
                  color: "#fcf8e3",
                  marginLeft: "0.2em",
                }}
              ></span>
            </h2>
          </span>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row mt-3">
              <h2> Login Your Account</h2>
            </div>
            <div className="row mb-3">
              <form onSubmit={handleSubmit(handleRegistration)}>
                <label htmlFor="id_email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={classNames("form_input", {
                    "is-invalid": errors.email,
                  })}
                  id="id_email"
                  {...register("email", {
                    required: true,
                    maxlength: "80",
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                <span className="icon fa fa-envelope fa-lg"></span>
                {errors.email && (
                  <p className="text-danger">Please check the Email</p>
                )}

                <label htmlFor="id_password"></label>
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={classNames("form_input", {
                    "is-invalid": errors.password,
                  })}
                  id="id_password"
                  {...register("password", {
                    required: true,
                  })}
                />
                <span
                  className="icon2 fa fa-eye-slash"
                  onClick={() => setVisible(!visible)}
                  style={{ cursor: "pointer" }}
                ></span>
                <span className="icon fa fa-shield fa-lg"></span>
                {errors.password && (
                  <p className="text-danger">Please check the Password</p>
                )}

                <button
                  disabled={disable ? true : false}
                  type="submit"
                  className="btn btn success"
                >
                  Login
                </button>
                {flag ? (
                  <ToastContainer />
                ) : (
                  <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
                )}
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <span className="login_agree_text js-service">
                      <Link
                        to="/reset-password"
                        style={{
                          textDecoration: "none",
                          color: "#7e4a89",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Forgot Password here ?
                      </Link>
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <span className="login_agreeCheck">
                      Don't have an account?
                      <Link
                        to="/sign-up"
                        style={{
                          textDecoration: "none",
                          color: "#7e4a89",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Register Here
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
