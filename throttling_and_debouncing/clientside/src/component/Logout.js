// eslint-disable-next-line
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, removeCookie] = useCookies("jwtoken");
  useEffect(() => {
    delete_cookies();
  }, []);

  const delete_cookies = () => {
    console.log("cookies delete");
    removeCookie("jwtoken");
    navigate("/");
  };

  return <></>;
}

export default Logout;
