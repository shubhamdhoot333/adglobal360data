import React, { useState, useEffect } from "react";
import { getVideo } from "../services/api";
import Nav from "./Nav";
function UploadList() {
  useEffect(() => {
    getVideos();
  }, []);
  const [media, setMedia] = useState("");
  const getVideos = async () => {
    let res = await getVideo();
    if (res) {
      setMedia(res.data);
    } else {
      alert("no video found");
    }
    console.log(res.data);
  };

  return (
    <>
      <div className="col-lg-12">
        <Nav />
      </div>
      <div className="row">
        <div className="col-md-12">
          <table>
            <thead>
              <tr>
                <td>name</td>
                <td>videopath</td>
              </tr>
            </thead>
            <tbody>
              {media &&
                media.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    {value.videos.map((video) => (
                      <td key={video}>
                        <video preload="auto" width="240" height="120" controls>
                          <source
                            src={`http://localhost:8000/video/${video}`}
                          />
                          ;Your browser does not support the video tag.
                        </video>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UploadList;
