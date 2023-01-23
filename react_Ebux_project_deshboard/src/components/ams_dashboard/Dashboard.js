import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Demo from "./Demo";
// import Setting from "./Setting";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  let token = cookies.access_token;
  console.log(token);

  return (
    <div className="container-scroller">
      <Header title="Dashboard" />

      <div className="container-fluid page-body-wrapper">
        {/* <Setting /> */}
        <Sidebar />
        <Demo />
      </div>
    </div>
  );
}

export default Dashboard;
