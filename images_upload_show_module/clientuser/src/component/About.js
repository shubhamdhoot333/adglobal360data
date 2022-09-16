import React, { useEffect } from "react";
import Nav from "./Nav";
import { AboutUser } from "../service/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function About() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  const navigate = useNavigate();
  const callAboutPage = async () => {
    let response = await AboutUser(token_value);
    //check login after user not enter in web page
    //console.log(response.data);
    if (!response) {
      alert("User need to login");
      navigate("/login");
      //console.log("go to login page ");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <Nav />
      <div>About</div>
    </>
  );
}

export default About;
