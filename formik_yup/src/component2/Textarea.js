import React from "react";
import { ErrorMessage, Field } from "formik";
function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component="div" style={{ color: "red" }} />
    </div>
  );
}

export default Textarea;
