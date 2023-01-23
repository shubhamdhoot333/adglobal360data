// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/user/user_api";
function Logout() {
  const navigate = useNavigate();
  let uid = "";
  let utime = "";

  // eslint-disable-next-line
  const [cookies, removeCookie] = useCookies("access_token");
  const [id, removeId] = useCookies("user_id");
  // console.log(id.user_id);
  uid = id.user_id;
  // 1 data
  useEffect(() => {
    getdate();

    delete_cookies();
  }, []);
  //get current time
  const getdate = () => {
    const current = new Date();
    const date = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()},${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    // console.log(date);
    utime = date;
  };

  //3ed datab
  const delete_cookies = async () => {
    let res = await logout(uid, utime);
    console.log(res);
    console.log("cookies delete");
    removeCookie("access_token");
    removeId("user_id");

    navigate("/login");
  };

  return <></>;
}

export default Logout;
