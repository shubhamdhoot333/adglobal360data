import React, { useState } from "react";
import { sentVideo } from "../services/api";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
function UploadForm() {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const hadleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }
    formdata.append("name", name);
    let res = await sentVideo(formdata);
    if (!res) {
      alert("video not uploaded");
    } else {
      alert("video upload successfully");
      navigate("/allvideo");
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <Nav />
      </div>
      <form onSubmit={hadleSubmit}>
        <div className="form-group my-5 py-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
}
export default UploadForm;
