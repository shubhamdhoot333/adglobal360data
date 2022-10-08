import { ErrorMessage, Field } from "formik";
import React from "react";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  );
}

export default Input;
