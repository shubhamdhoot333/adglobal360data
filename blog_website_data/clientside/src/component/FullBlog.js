import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postdata } from "../service/api";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
function FullBlog() {
  const navigate = useNavigate();
  const [datavalue, setData] = useState("");
  let { id } = useParams();
  //console.log(id);

  const getPostFull = async (id) => {
    let res = await postdata(id);
    if (!res) {
      alert("something wrong");
      //navigate("/login");
    } else {
      setData(res);
      console.log(res);
    }
  };
  useState(() => {
    getPostFull(id);
  });
  return (
    <>
      <Nav />
      <div className="container mt-5 pt-5">
        {datavalue &&
          datavalue.data.map((value, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <img
                      src={`http://localhost:8000/images/${value.photo}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title mt-3">{value.heading}</h5>
                      <p className="card-text mt-3">{value.data}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default FullBlog;
