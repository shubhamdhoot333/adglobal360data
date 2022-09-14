import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//define schema
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
//use as a plugin

//model

customerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 2);
  }
  next();
});
//forgot password

customerSchema.pre("findOneAndUpdate", async function (next) {
  console.log("hii");
  //console.log(this);
  console.log(this._update.password);
  this._update.password = await bcrypt.hash(this._update.password, 2);

  next();
});

//we are generate token
customerSchema.methods.generateAuthToken = function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      "MYNAMEISSHUBHAMDHOOTFROMJODHPURS",
      { expiresIn: "1d" }
    );
    //this.tokens = this.tokens.concat({ token: token });
    //await this.save();

    return token;
  } catch (error) {
    console.log(error);
  }
};

const customer = mongoose.model("customer", customerSchema);

export default customer;
