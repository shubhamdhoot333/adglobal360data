import React from "react";

function Post(props) {
  const { postId, id, name, email } = props.data;
  return (
    <div className="post">
      <table className="table ">
        <tbody>
          <tr>
            <div className="row">
              <div className="col-lg-3">
                <th scope="row">{postId}</th>
              </div>
              <div className="col-lg-3">
                <td>{id} </td>
              </div>
              <div className="col-lg-3">
                <td>{name} </td>
              </div>
              <div className="col-lg-3">
                <td>{email} </td>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Post;
