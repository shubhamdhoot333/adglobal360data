import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log(data.name, data.email, data.password);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input
          name="name"
          {...register("name", { required: "name is required" })}
        />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: "Email is required" })}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="male"
          value="male"
          name="gender"
          {...register("gender", { required: "gender is required" })}
        />
        <label className="form-check-label" htmlFor="male">
          male
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="female"
          value="female"
          name="gender"
          {...register("gender", { required: "gender is required" })}
        />
        <label className="form-check-label" htmlFor="female">
          female
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="other"
          value="other"
          name="gender"
          {...register("gender", { required: "gender is required" })}
        />
        <label className="form-check-label" htmlFor="other">
          other
        </label>
        <small className="text-danger">
          {errors?.gender && errors.gender.message}
        </small>
      </div>
      <select
        className="custom-select"
        name="state"
        {...register("state", { required: "state is required" })}
      >
        <option default>Select your state</option>
        <option value="Delhi">Delhi</option>
        <option value="Punjab">Punjab</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Bihar">Bihar</option>
      </select>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          value="agree"
          name="term"
          {...register("term")}
        />
        <label className="form-check-label" htmlFor="terms">
          I agree all terms and conditons
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="updates"
          name="update"
          value="update"
          {...register("update")}
        />
        <label className="form-check-label" htmlFor="updates">
          send me latest Bootstrap updates
        </label>
      </div>
      <div>
        <label>state</label>
        <input
          name="state"
          {...register("address.state", {
            required: "address in state is required",
          })}
        />
      </div>
      <div>
        <label>city</label>
        <input
          type="text"
          name="city"
          {...register("address.city", {
            required: "address in state is required",
          })}
        />
      </div>

      <div>
        <label>array1</label>
        <input
          name="array[0]"
          {...register("array[0]", {
            required: "array in state is required",
          })}
        />
      </div>
      <div>
        <label>array2</label>
        <input
          type="text"
          name="array[1]"
          {...register("array[1]", {
            required: "address in state is required",
          })}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
