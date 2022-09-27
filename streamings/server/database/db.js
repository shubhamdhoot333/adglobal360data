import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://localhost:27017`;
  try {
    const DB_OPTION = {
      dbName: "project",
    };
    await mongoose.connect(URL, DB_OPTION);
    console.log("connected successful");
  } catch (err) {
    console.log(err);
  }
};
export default Connection;
