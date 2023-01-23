import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import classNames from "classnames";
import { contactApi } from "../../services/user/user_api";
function Contact() {
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
    const response = await contactApi(data);
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
        toast(response.data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <>
      <div className="container-fluid background2">
        <div
          className="row main-content"
          style={{
            borderRadius: "14px",
            background: "rgb(255 254 254 / 25%)",
            boxShadow: "0 12px 56px 0 rgb(31 38 135 / 37%)",
            backdropFilter: "blur( 4px )",
            width: "60%",
            margin: "3rem auto",
          }}
        >
          <div className="col-md-6 col-xs-12 col-sm-12">
            <h1 style={{ fontSize: "2.5rem", marginTop: "1rem" }}>
              Contact Us
            </h1>

            <h3 className="text-center mt-2">
              Want to Know More?? Drop Us a Mail
            </h3>
            <p className="mt-5">
              <img
                src="images/undraw-contact.svg"
                alt="Image"
                className="img-fluid"
              />
            </p>
            <div className="row mt-4" style={{ margin: "0 auto" }}>
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">City, State</span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:1-212-555-5555" title="Give me a call">
                        (+91)-9876543210
                      </a>
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span
                      className="contact-text gmail"
                      style={{ overflowWrap: "anywhere" }}
                    >
                      <a href="mailto:#" title="Send me an email">
                        Adglobal360@gmail.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12">
            <form
              className="form-group mb-2 mt-3"
              onSubmit={handleSubmit(handleRegistration)}
            >
              <label htmlFor="the-name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                {...register("first_name", { required: true, maxLength: 40 })}
              />
              {errors.first_name && (
                <p className="text-danger">Please check the firstname</p>
              )}

              <label htmlFor="the-name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                {...register("last_name", { required: true, maxLength: 40 })}
              />
              {errors.last_name && (
                <p className="text-danger">Please check the lastname</p>
              )}
              <label htmlFor="the-email">Email Address</label>
              <input
                type="email"
                name="email"
                id="the-email"
                {...register("email", {
                  required: true,
                  maxlength: "80",
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <p className="text-danger">Please check the Email</p>
              )}
              <label htmlFor="the-phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="the-phone"
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              {errors.phone && (
                <p className="text-danger">Please check the phone</p>
              )}

              <label htmlFor="the-message">Message</label>
              <textarea
                name="message"
                id="the-message"
                defaultValue={""}
                {...register("message", {
                  required: true,
                })}
              />

              {errors.message && (
                <p className="text-danger">Please check the message</p>
              )}

              <button
                className="btn btn-info"
                disabled={disable ? true : false}
                style={{
                  display: "block",
                  margin: "1rem auto",
                  padding: "0.6rem 2.7rem",
                }}
              >
                Send Message
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
