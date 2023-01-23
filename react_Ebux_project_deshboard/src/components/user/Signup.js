import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { registerUser } from "../../services/user/user_api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { MarginOutlined } from "@mui/icons-material";
import { Input } from "@mui/material";

function Signup() {
  const [visible, setVisible] = useState(false);

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
    const response = await registerUser(data);
    console.log(response);

    if (response.data.success === false) {
      if (response.data.status === (400 || 403 || 401)) {
        setFlag(false);
        // console.log(response.data.email_error);
        if (
          response.data.email_error ||
          response.data.phone_error ||
          response.data.username_error
        ) {
          toast.error(
            response.data.email_error ||
              response.data.phone_error ||
              response.data.username_error
          );
        } else {
          toast.error(response.data.message);
        }
      }
    } else if (response.data.success === true) {
      if (response.data.status === (200 || 201)) {
        toast("Register Successfully !");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className="container-fluid background">
        <div
          className="row main-content text-center"
          style={{ marginTop: "2rem auto" }}
        >
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span
                  className="fa fa-user-plus"
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
            {/* <div className="container-fluid"> */}
            <div className="row mt-1">
              <h2> Create Your Account</h2>
            </div>

            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="form-group"
            >
              <label htmlFor="id_email"></label>
              <input
                type="email"
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
              <label htmlFor="id_username"></label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={classNames("form_input", {
                  "is-invalid": errors.username,
                })}
                id="id_username"
                {...register("username", { required: true, maxLength: 40 })}
              />
              <span className="icon fa fa-user-secret fa-lg"></span>
              {errors.username && (
                <p className="text-danger">Please check the username</p>
              )}
              <label htmlFor="id_name"></label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={classNames("form_input", {
                  "is-invalid": errors.name,
                })}
                id="id_name"
                {...register("name", { required: true, maxLength: 40 })}
              />
              <span className="icon fa fa-user-plus"></span>
              {errors.name && (
                <p className="text-danger">Please check the name</p>
              )}
              <label htmlFor="id_phone"></label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className={classNames("form_input", {
                  "is-invalid": errors.phone,
                })}
                id="id_phone"
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              <span className="icon fa fa-phone fa-lg"></span>
              {errors.phone && (
                <p className="text-danger">Please check the phone</p>
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
                {...register("password", { required: true, min: 8 })}
              />
              <span className="icon fa fa-shield fa-lg"></span>

              {errors.password && (
                <p className="text-danger">Please check the password</p>
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
                {...register("confirm_password", { required: true, min: 8 })}
              />

              <span
                className="icon2 fa fa-eye-slash"
                onClick={() => setVisible(!visible)}
                style={{ cursor: "pointer" }}
              ></span>
              <span className="icon fa fa fa-shield fa-lg"></span>

              <select
                className="form_input"
                aria-label="Default select example"
              >
                <option selected>Select Client Type </option>
                <option>AGL</option>
                <option>Nestle</option>
                <option>Colgate</option>
                <option>Colpal</option>
              </select>
              <span className="icon fa fa-users"></span>

              {errors.confirm_password && (
                <p className="text-danger">Please check the confirm password</p>
              )}
              <span className="">
                <input
                  type="checkbox"
                  name="service"
                  className={classNames("login_agree_checkbox", {
                    "is-invalid": errors.service,
                  })}
                  {...register("service", { required: true })}
                />
              </span>
              <span className="login_agreeCheck mt-2 mx-2">
                I agree to the Lattoos
              </span>
              {errors.service && (
                <p className="text-danger">Please check the checkbox</p>
              )}
              <span>
                <a
                  href="#popup1"
                  style={{
                    textDecoration: "none",
                    color: "#7e4a89",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                  id="info"
                  className="terms"
                  title="info"
                >
                  Terms of Service
                </a>
              </span>
              <div className="container">
                <div className="row">
                  <div id="popup1" className="overlay">
                    <div className="popup">
                      <div className="row">
                        <h2>Welcome to Ebux</h2>
                      </div>
                      <div className="row mt-2">
                        <h3>Terms &amp; conditions</h3>
                      </div>
                      <a className="close" href="#">
                        ×
                      </a>
                      <div className="content">
                        Thank to pop me out of that button, but now i'm done so
                        you can close this window.
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cum recusandae nemo in, deserunt nihil aliquid
                          quibusdam ut natus nobis nesciunt similique aliquam.
                          Itaque optio laudantium ut iure nihil voluptatum illo
                          maiores error? Voluptas deleniti quae, autem est harum
                          cumque tenetur? Omnis ea facere quisquam voluptatum
                          sunt voluptates at illum? Esse deserunt a nostrum
                          sapiente harum quas reiciendis consectetur obcaecati
                          ab est suscipit, vitae eius repellendus cumque, quia
                          accusantium vel doloremque quos voluptates nemo
                          dolorum at perspiciatis reprehenderit. Eaque est quis
                          magni voluptates architecto ipsam, vitae reiciendis
                          porro. Assumenda atque sed aut, accusamus maiores
                          dolorum velit perferendis qui quas placeat itaque
                          repellendus odio illum. Nostrum molestiae rem facere
                          delectus eligendi eveniet deserunt vel voluptate,
                          inventore iste dolor velit et praesentium officia hic
                          eius iure neque. Laudantium dolores ducimus maiores
                          necessitatibus ipsum, quas nesciunt fugiat nemo qui,
                          voluptatibus in esse, provident fugit repellendus hic
                          quasi. Nihil nam error enim assumenda qui fugit!
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cum recusandae nemo in, deserunt nihil aliquid
                          quibusdam ut natus nobis nesciunt similique aliquam.
                          Itaque optio laudantium ut iure nihil voluptatum illo
                          maiores error? Voluptas deleniti quae, autem est harum
                          cumque tenetur? Omnis ea facere quisquam voluptatum
                          sunt voluptates at illum? Esse deserunt a nostrum
                          sapiente harum quas reiciendis consectetur obcaecati
                          ab est suscipit, vitae eius repellendus cumque, quia
                          accusantium vel doloremque quos voluptates nemo
                          dolorum at perspiciatis reprehenderit. Eaque est quis
                          magni voluptates architecto ipsam, vitae reiciendis
                          porro. Assumenda atque sed aut, accusamus maiores
                          dolorum velit perferendis qui quas placeat itaque
                          repellendus odio illum. Nostrum molestiae rem facere
                          delectus eligendi eveniet deserunt vel voluptate,
                          inventore iste dolor velit et praesentium officia hic
                          eius iure neque. Laudantium dolores ducimus maiores
                          necessitatibus ipsum, quas nesciunt fugiat nemo qui,
                          voluptatibus in esse, provident fugit repellendus hic
                          quasi. Nihil nam error enim assumenda qui fugit!
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cum recusandae nemo in, deserunt nihil aliquid
                          quibusdam ut natus nobis nesciunt similique aliquam.
                          Itaque optio laudantium ut iure nihil voluptatum illo
                          maiores error? Voluptas deleniti quae, autem est harum
                          cumque tenetur? Omnis ea facere quisquam voluptatum
                          sunt voluptates at illum? Esse deserunt a nostrum
                          sapiente harum quas reiciendis consectetur obcaecati
                          ab est suscipit, vitae eius repellendus cumque, quia
                          accusantium vel doloremque quos voluptates nemo
                          dolorum at perspiciatis reprehenderit. Eaque est quis
                          magni voluptates architecto ipsam, vitae reiciendis
                          porro. Assumenda atque sed aut, accusamus maiores
                          dolorum velit perferendis qui quas placeat itaque
                          repellendus odio illum. Nostrum molestiae rem facere
                          delectus eligendi eveniet deserunt vel voluptate,
                          inventore iste dolor velit et praesentium officia hic
                          eius iure neque. Laudantium dolores ducimus maiores
                          necessitatibus ipsum, quas nesciunt fugiat nemo qui,
                          voluptatibus in esse, provident fugit repellendus hic
                          quasi. Nihil nam error enim assumenda qui fugit!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                disabled={disable ? true : false}
                className="btn btn success"
                name="submit"
              >
                Register Here
              </button>
              {flag ? (
                <ToastContainer />
              ) : (
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
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
            </form>

            <div className="row">
              <p style={{ fontSize: "14px", fontWeight: "700" }}>
                Already have an account?
                <span>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "#7e4a89",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Login Here
                  </Link>
                </span>
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
