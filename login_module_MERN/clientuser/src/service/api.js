import axios from "axios";
//register component
export const addUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/register", data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//login component
export const getUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/login", data);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("please Enter Valied Data");
  }
};
//About component
export const AboutUser = async () => {
  try {
    const result = await axios.get("http://localhost:8000/about", {
      withCredentials: true,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
//forgotdata
//login component
export const getUserdata = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/forgot", data);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("please Enter Valied Data");
  }
};
