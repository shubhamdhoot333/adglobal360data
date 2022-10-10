import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: " Enter your name ",
  email: " Enter your Email",
  channel: " Enter your Channel name",
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
// });
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   } else if (values.name.length > 15) {
//     errors.name = "Must be 15 characters or less";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   } else if (values.channel.length > 20) {
//     errors.channel = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate,
  });
  // console.log("form value",formik.values)
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
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
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
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
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
                onChange={formik.handleChange}
                value={formik.values.channel}
                onBlur={formik.handleBlur}
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

export default YoutubeForm;
