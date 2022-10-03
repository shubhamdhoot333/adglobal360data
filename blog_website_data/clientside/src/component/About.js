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
      <div className="container-fluid mt-4 pt-4">
        <div className="row mt-4 pt-4">
          <div className="col-lg-6 mt-4">
            <img
              src="https://media.istockphoto.com/vectors/about-us-flat-design-style-colorful-illustration-vector-id1086341762?k=20&m=1086341762&s=612x612&w=0&h=0IC9wexJFHfX_pPBFCgnrVC0--aSDg3XKlJjNJmY9E0="
              width="100%"
              height="60%"
              className="mr-4"
            />
          </div>
          <div className="col-lg-4 mt-5">
            <h4>Software Engineer</h4>
            <h6 className=" mt-3">
              I am Software Engineer in india.I have built website, desktop
              Application,and computer software .If you interested you can we
              some of these favorite projects here .
            </h6>
            <a href="https://github.com/shubhamdhoot333" className="h5">
              Github Link
            </a>
          </div>
          <div className="col-lg-2 mt-4"></div>
        </div>
      </div>
    </>
  );
}

export default About;
