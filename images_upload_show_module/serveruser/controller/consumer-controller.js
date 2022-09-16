import Customer from "../schema/customer-schema.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

//register api
export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  //check filed is empty or not

  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ error: "plz filled the fields properly", flag: false });
  }
  //find email not present already
  try {
    const userExist = await Customer.findOne({ email: email });

    if (userExist) {
      return res
        .status(422)
        .json({ error: "email already exist", flag: false });
    }

    const newUser = new Customer({ name, email, password });

    await newUser.save();
    const email_data = `
     <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
           <div>
              <h3>Welcome to our website</h3>
              <p className="h5 pt-3">We're happy to have you with us.</p>      
           </div>
         <div className="col-lg-3"></div>
     </div>
    `;

    if (newUser && email) {
      const msg = {
        from: "shubham.dhoot@adglobal360.com",
        to: email,
        subject: "Welcome to login Module",
        html: `${email_data}`,
      };
      nodemailer
        .createTransport({
          service: "gmail",
          secure: true,
          auth: {
            user: "shubham.dhoot@adglobal360.com",
            pass: "yijfhzddadgamprc",
          },
          port: 465,
          host: "smtp.gmail.com",
        })
        .sendMail(msg, (err) => {
          if (err) {
            return console.log("error occur", err);
          } else {
            return console.log(`email send ${email}`);
          }
        });
    }

    res.status(201).json({ message: "user register successfully", flag: true });
  } catch (error) {
    console.log(error);
  }
};

//login code
export const getUser = async (req, res) => {
  const { email, password } = req.body;
  //check filed is empty or not
  if (!email || !password) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  //find email not present already
  try {
    const userpresent = await Customer.findOne({ email: email });
    if (userpresent) {
      const isMatch = await bcrypt.compare(password, userpresent.password);
      const token = await userpresent.generateAuthToken();
      // console.log(token);

      /*    res.cookie('Name' ,'shubham ' ,
        {
           expires:new Date(Date.now() + 25892000000),
        
       } );
         
      // console.log(req.cookie.jwtoken);
          
      */

      if (!isMatch) {
        return res.status(422).json({ error: "invalied crenditial" });
      } else {
        return res
          .status(201)
          .json({ message: "user signin successfully", token });
      }
    } else {
      return res.status(422).json({ error: "invalied crenditial" });
    }
  } catch (error) {
    console.log(error);
  }
};
//forgot password
export const getUserdata = async (req, res) => {
  const { email } = req.body;
  //check filed is empty or not
  if (!email) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  //find email present or not
  try {
    const userpresent = await Customer.findOne({ email: email });
    if (userpresent) {
      //generate 8 character random string
      const generateRandomString = (myLength) => {
        const chars =
          "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
          { length: myLength },
          (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );
        const randomString = randomArray.join("");
        return randomString;
      };

      //here email to get id
      console.log(userpresent._id);
      const random_password = generateRandomString(8);
      console.log(random_password);
      //mail send to user
      const email_data = `
      <div className="row">
         <div className="col-lg-3"></div>
         <div className="col-lg-6">
            <div>
               <h3>Our new password</h3>
               <p className="h5 pt-3">${random_password}</p>      
            </div>
          <div className="col-lg-3"></div>
      </div>
     `;
      const msg = {
        from: "shubham.dhoot@adglobal360.com",
        to: email,
        subject: "Welcome to login Module",
        html: `${email_data}`,
      };
      nodemailer
        .createTransport({
          service: "gmail",
          secure: true,
          auth: {
            user: "shubham.dhoot@adglobal360.com",
            pass: "yijfhzddadgamprc",
          },
          port: 465,
          host: "smtp.gmail.com",
        })
        .sendMail(msg, (err) => {
          if (err) {
            return console.log("error occur", err);
          } else {
            return console.log(`email send ${email}`);
          }
        });
      const customerPassword = await Customer.findOneAndUpdate(
        { _id: userpresent._id },
        {
          password: random_password,
        }
      );
      return res
        .status(201)
        .json({ message: "password send to email", flag: true });
    } else {
      return res
        .status(201)
        .json({ message: "user not registered", flag: false });
    }
  } catch (error) {
    console.log(error);
  }
};
