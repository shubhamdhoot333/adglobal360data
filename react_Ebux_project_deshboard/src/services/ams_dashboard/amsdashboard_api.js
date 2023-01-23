import axios from "axios";
import { URL } from "../Url";
//csv file upload  api
export const fileUpload = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const result = await axios.post(
      `${URL}/upload/campaign/data`,
      data,
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

//csv file data show   api
export const fileShow = async (token) => {
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const result = await axios.post(`${URL}/campaign/list`, null, config);

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
