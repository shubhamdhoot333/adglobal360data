import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { updateUserPassword } from "../../services/user/user_api";

function Reset() {
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
    console.log(data);
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
                className="fa fa-user"
                style={{ fontSize: "6em", color: "#fcf8e3" }}
              ></span>
            </h2>
          </span>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div className="container-fluid">
            <div className="row">
              <h2 className="mt-4">Reset Password</h2>
            </div>
            <div className="row">
              <form
                onSubmit={handleSubmit(handleRegistration)}
                className="form-group"
              >
                <label htmlFor="id_email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="id_email"
                  className={classNames("form_input", {
                    "is-invalid": errors.email,
                  })}
                  {...register("email", {
                    required: true,
                    maxlength: "80",
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                <span className="icon fa fa-envelope fa-lg"></span>
                {errors.email && (
                  <p className="text-danger">Please check the Password</p>
                )}

                <div className="col-lg-12 ">
                  <span className="login_agreeCheck mt-2">
                    If you remember your password Back to
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#7e4a89" }}
                    >
                      Login Form
                    </Link>
                  </span>
                </div>

                {/* <input
                  type="submit"
                  value="Send"
                  name="send"
                  id="send"
                  className="btn btn-primary mt-3"
                /> */}
                <button
                  disabled={disable ? true : false}
                  type="submit"
                  id="send"
                  className="btn btn success"
                  name="send"
                >
                  Submit Here
                </button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
