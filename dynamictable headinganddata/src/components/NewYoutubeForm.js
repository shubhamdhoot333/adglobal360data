import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: {
    address1: "",
    address2: "",
  },
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
  address: Yup.object({
    address1: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    address2: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  }),
});

function NewYoutubeForm() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <label className="form-label">Your Name</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label className="form-label">Your Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label className="form-label">Channel</label>
                <Field type="text" name="channel" className="form-control" />
                <ErrorMessage
                  name="channel"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label className="form-label">address</label>
                <Field
                  type="text"
                  name="address.address1"
                  className="form-control"
                />
                <ErrorMessage
                  name="address.address1"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label className="form-label">address</label>
                <Field
                  type="text"
                  name="address.address2"
                  className="form-control"
                />
                <ErrorMessage
                  name="address.address2"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg mt-3">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default NewYoutubeForm;
