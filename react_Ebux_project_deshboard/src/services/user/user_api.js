import axios from "axios";
// 1 login user Api  connection
import { URL } from "../Url";
export const loginUser = async (data) => {
  try {
    const result = await axios.post(`${URL}/user/login`, data);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
// 2 register user api connection
export const registerUser = async (data) => {
  try {
    const result = await axios.post(`${URL}/user/register`, data);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// 3 change or update password
export const updateUserPassword = async (data) => {
  try {
    const result = await axios.post(`${URL}/forgot/password`, data);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//logout  user api
export const logout = async (uid, utime) => {
  console.log("uid>>>", uid, "utime>>", utime);
  try {
    const result = await axios.post(`${URL}/user/logout`, {
      user_id: uid,
      // end_time: utime,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//contact api for contact form/page
export const contactApi = async (data) => {
  console.log(data);
  try {
    const result = await axios.post(`${URL}/contact/us`, data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//account activate link
export const accountOn = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const result = await axios.post(
      `${URL}/resend/verification/email`,
      null,
      config
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
