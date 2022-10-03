import axios from "axios";
//register component
export const addUser = async (data) => {
  try {
    const result = await axios.post("http://localhost:8000/register", data);
    // console.log(result);
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
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
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

//config data
const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
//post upload
export const setPost = async (formData) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/upload",
      formData,
      {
        withCredentials: true,
      },
      config
    );

    return result;
  } catch (error) {
    console.log(error.message);
    alert("please Enter Valied Data");
  }
};
//post data component
export const getPost = async () => {
  try {
    const result = await axios.get("http://localhost:8000/getpost");
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//single postdata component
export const postdata = async (id) => {
  try {
    // console.log(id);
    const result = await axios.post("http://localhost:8000/postdata", { id });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//single postdata delete
export const deletePost = async (id) => {
  try {
    console.log(id);
    const result = await axios.delete(`http://localhost:8000/deletepost/${id}`);
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//get post user data component
export const getPostUser = async (data) => {
  try {
    const result = await axios.get("http://localhost:8000/getpostUser", {
      withCredentials: true,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};
//comment component api data
export const commentData = async (data, id) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/comment",
      { data, id },
      {
        withCredentials: true,
      }
    );
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//comment component api data
export const userComment = async (id) => {
  try {
    const result = await axios.post("http://localhost:8000/usercomment", {
      id,
    });
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//userlike component api data
export const userLike = async (data, id) => {
  try {
    console.log(data, id);
    const result = await axios.put(
      "http://localhost:8000/userLike",
      { data, id },
      {
        withCredentials: true,
      }
    );
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//likeCount component api data
export const likeCounts = async (id) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/countlike",
      { id },
      {
        withCredentials: true,
      }
    );
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};

//unlikeCount component api data
export const UnlikeCounts = async (id) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/countunlike",
      { id },
      {
        withCredentials: true,
      }
    );
    // console.log(result)
    return result;
  } catch (error) {
    console.log(error.message);
    alert("currently no data available ");
  }
};
