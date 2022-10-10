import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  } );
  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Basic information</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.fullname,
              })}
              id="fullname"
              name="fullname"
              {...register("fullname", { required: true, maxLength: 10 })}
            />
            {errors.fullname && (
              <p className="text-danger">Please check the Last Name</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className={classNames("form-control", {
                "is-invalid": errors.email,
              })}
              id="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
          {errors.email && (
            <p className="text-danger">Please check the Email</p>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.password,
              })}
              id="password"
              name="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-danger">Please check the Password</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
