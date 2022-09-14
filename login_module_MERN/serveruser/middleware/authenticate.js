import jwt from "jsonwebtoken";
import User from "../schema/customer-schema.js";

const Authenticate = async (req, res, next) => {
  try {
    const token =
      req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
    console.log(token);
    const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not FOund");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("unauthorised: no token proviesd  ");
    console.log(error);
  }
};
export default Authenticate;
