import React, { useState } from "react";
//this page api not created and user_api in forgotpassword api given which is not it
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { updateUserPassword } from "../../services/user/user_api";
function Forgot() {
  //visible password useState
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const [disable, setdisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = async (data) => {
    setdisable(true);
    const response = await updateUserPassword(data);
    if (response.data.success == false) {
      if (response.data.status == "400") {
        alert(response.data.message);
      }
    } else if (response.data.success == true) {
      if (response.data.status == ("200" || "201")) {
        alert(response.data.message);
        navigate("/login");
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
                className="fa fa-user-secret"
                style={{
                  fontSize: "6em",
                  color: "#fcf8e3",
                  marginLeft: ".2em",
                }}
              ></span>
            </h2>
          </span>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row mt-3">
              <h2> Forgot Password Here</h2>
            </div>
            <div className="row">
              <form
                onSubmit={handleSubmit(handleRegistration)}
                className="form-group"
              >
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

                <span className="icon fa fa-shield fa-lg"></span>
                {errors.password && (
                  <p className="text-danger">Please check the Password</p>
                )}

                <label htmlFor="id_confirm_password"></label>
                <input
                  type={visible ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  id="id_confirm_password"
                  className={classNames("form_input", {
                    "is-invalid": errors.confirm_password,
                  })}
                  {...register("confirm_password", {
                    required: true,
                  })}
                />
                <span
                  className="icon2 fa fa-eye-slash"
                  onClick={() => setVisible(!visible)}
                  style={{ cursor: "pointer" }}
                ></span>
                <span className="icon fa fa-shield fa-lg"></span>
                {errors.confirm_password && (
                  <p className="text-danger">
                    Please check your confirm Password
                  </p>
                )}

                <div className="row">
                  <div className="col-lg-12">
                    <span className="login_agreeCheck">
                      If you remember your password Back to{" "}
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "#7e4a89" }}
                      >
                        Login Form
                      </Link>
                    </span>
                  </div>
                </div>

                <button
                  disabled={disable ? true : false}
                  className="btn btn success"
                  name="submit"
                >
                  Send
                </button>

                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <span className="login_agreeCheck">
                      Don't have an account?&nbsp;
                      <Link
                        to="/sign-up"
                        style={{ color: "#7e4a89", textDecoration: "none" }}
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

export default Forgot;
