import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
function Login() {
  const { register, handleSubmit, control } = useForm();
  const basic = (
    <div className="card mb-3">
      <div className="card-header">Basic information</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            {...register("phone")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            {...register("password")}
          />
        </div>
      </div>
    </div>
  );
  const Userinformation = (prop) => {
    const { register, control } = prop;
    const { append, fields, remove } = useFieldArray({
      control,
      name: "users",
    });
    return (
      <div className="card mb-3">
        <div className="card-header">User information</div>
        <div className="card-body">
          {fields.map((item, index) => (
            <div className="form-row form-group" key={index}>
              <h5>add data</h5>
              <div className="col mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First name"
                  name={`users[${index}].fname`}
                  {...register(`users[${index}].fname`)}
                  defaultValue={item.fname}
                />
              </div>
              <div className="col mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last name"
                  name={`users[${index}].lname`}
                  {...register(`users[${index}].lname`)}
                  defaultValue={item.lname}
                />
              </div>
              <div className="col mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your E-mail Address"
                  name={`users[${index}].email`}
                  {...register(`users[${index}].email`)}
                  defaultValue={item.email}
                />
              </div>
              <div className="col mb-2">
                <select
                  className="form-control"
                  id="state"
                  name={`users[${index}].state`}
                  {...register(`users[${index}].state`)}
                  defaultValue={item.state}
                >
                  <option value="">Select Your State</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Assam">Assam</option>
                  <option value="Goa">Goa</option>
                  <option value="Manipur">Manipur</option>
                </select>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <button
            className=" btn btn-primary"
            onClick={() =>
              append({ fname: "", lname: "", email: "", state: "" })
            }
          >
            Add User
          </button>
        </div>
      </div>
    );
  };
  const handleRegistration = (data) => {
    // console.log(data.name, data.email, data.password);
    console.log(data);
  };
  return (
    <div className="container py-5">
      <div className="card border-0 shadow w-75 mx-auto">
        <form onSubmit={handleSubmit(handleRegistration)}>
          {basic}
          <Userinformation register={register} control={control} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
