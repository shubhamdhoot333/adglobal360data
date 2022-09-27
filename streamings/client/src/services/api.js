import axios from "axios";
//profile upload
//config data
const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
export const sentVideo = async (formdata) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/create",
      formdata,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
    alert("please Enter Valied Data");
  }
};
export const getVideo = async () => {
  try {
    const result = await axios.get("http://localhost:8000/all");

    return result;
  } catch (error) {
    console.log(error.message);
    alert("someting happen wrong");
  }
};
