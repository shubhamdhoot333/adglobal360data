import React, { useState } from "react";
import Nav from "./Nav";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { setPost } from "../service/api";
function Post() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  const navigate = useNavigate();

  const [heading, setHeading] = useState("");
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const hadleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("heading", heading);
    formData.append("data", data);
    let res = await setPost(formData, token_value);
    if (!res) {
      alert("something wrong");
      navigate("/login");
    } else {
      alert("Post upload successfullt");
      setData("");
      setFile("");
      setHeading("");
      navigate("/");
    }
  };
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-lg-12">
            <Nav />
          </div>
        </div>
        <form onSubmit={hadleSubmit}>
          <div className="row mt-5">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <label className="form-label h5">Photo Upload Here</label>
              <input
                type="file"
                name="postpic"
                className="form-control my-1"
                id="customFile"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <label className="form-label h5">Post Heading</label>
              <input
                type="text"
                name="heading"
                className="form-control my-1"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <label className="form-label h5">Post Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setData(e.target.value)}
              ></textarea>
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <button
                className="form-control my-2 btn btn-primary"
                type="Submit"
              >
                Submit Here
              </button>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Post;
