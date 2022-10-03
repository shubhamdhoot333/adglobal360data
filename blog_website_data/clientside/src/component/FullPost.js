import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postdata, commentData, userComment } from "../service/api";
import { userLike, likeCounts, UnlikeCounts } from "../service/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
function FullPost() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);

  let token_value = cookies.jwtoken;
  const [datavalue, setData] = useState("");
  const [likevalue, setLikevalue] = useState("");
  const [unlikevalue, setUnLikevalue] = useState("");

  const [text, setText] = useState();
  const [comment, setComment] = useState();
  let { id } = useParams();
  //console.log(id);

  const getPostFull = async (id) => {
    let res = await postdata(id);
    if (!res) {
      alert("something wrong");
      navigate("/login");
    } else {
      setData(res);
      //console.log(res);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(text);
    //console.log(id);
    let res = await commentData(text, id, token_value);
    if (!res) {
      alert("something wrong");
      // navigate("/login");
    } else {
      alert("comment posted");
      // console.log(res);
      setText("");
      userComments(id);
    }
  };
  const userComments = async (id) => {
    let res = await userComment(id);
    if (!res) {
      alert("something wrong");
      navigate("/login");
    } else {
      setComment(res);
      // console.log(res);
    }
  };
  const like = async (data, id) => {
    let res = await userLike(data, id, token_value);
    if (!res) {
      alert("something wrong");
      navigate("/login");
    } else {
      alert("Posted liked by user");
      // console.log(res);
    }
  };

  const onValueChange = (e) => {
    like(e.target.value, id);
    //console.log(value);
    likeCount(id);
    UnlikeCount(id);
  };

  const likeCount = async (id) => {
    let like_counts_num = await likeCounts(id);
    // console.log(like_counts_num.data);
    setLikevalue(like_counts_num.data);
  };
  const UnlikeCount = async (id) => {
    let like_counts_num = await UnlikeCounts(id);
    // console.log(like_counts_num.data);
    setUnLikevalue(like_counts_num.data);
  };
  useState(() => {
    getPostFull(id);
    userComments(id);
    likeCount(id);
    UnlikeCount(id);
  }, [comment]);
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
                      <input
                        type="radio"
                        name="value"
                        value="like"
                        className="m-2"
                        onChange={(e) => onValueChange(e)}
                      />
                      Like <span className="m-3">{likevalue}</span>
                      <input
                        type="radio"
                        name="value"
                        value="unlike"
                        className="m-2"
                        onChange={(e) => onValueChange(e)}
                      />
                      UnLike<span className="m-3">{unlikevalue}</span>
                      <h5 className="card-title mt-3">{value.heading}</h5>
                      <p className="card-text mt-3">{value.data}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="container  mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-6">
              <label className="form-label h5">Comment Here </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="comment about blog and post..........."
                onChange={(e) => setText(e.target.value)}
                value={text}
                rows="3"
              ></textarea>
            </div>
            <div className="col-2 pt-5">
              <button type="submit" className="btn btn-primary mb-3">
                Post comment
              </button>
            </div>
            <div className="col-2"></div>
          </div>
        </form>
      </div>

      <div className="container  mt-5">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h5 className="card-header">User comments</h5>
            {comment &&
              comment.data.map((value, index) => (
                <div className="card mt-2" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">{value.comment}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default FullPost;
