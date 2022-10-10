import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form value", values);
};
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  channel: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label className="form-label" htmlFor="form3Example1c">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label className="form-label" htmlFor="form3Example4c">
                Channel
              </label>
              <input
                type="text"
                name="channel"
                className="form-control"
                {...formik.getFieldProps("channel")}
              />
              {formik.touched.channel && formik.errors.channel ? (
                <div style={{ color: "red" }}>{formik.errors.channel}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary btn-lg mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default OldYoutubeForm;
