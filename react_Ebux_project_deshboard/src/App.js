import "./App.css";
import Home from "./components/user/Home";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/user/Signup";
import Reset from "./components/user/Reset";
import Forgot from "./components/user/Forgot";
import Contact from "./components/user/Contact";
// import Profile from "./components/user/Profile";
import Dashboard from "./components/ams_dashboard/Dashboard";
import Campaign_dashboard from "./components/ams_dashboard/Campaign_dashboard";
import Upload from "./components/pages/Upload";
import Pbi_home from "./components/pbi_dashboard/Pbi_home";
import Pbi_share_of_search from "./components/pbi_dashboard/Pbi_share_of_search";
import Pbi_organic_rank from "./components/pbi_dashboard/Pbi_organic_rank";
import Pbi_keyword_trend from "./components/pbi_dashboard/Pbi_keyword_trend";
import Pbi_on_shell_availability from "./components/pbi_dashboard/Pbi_on_shell_availability";
import Pbi_pricing_and_discount from "./components/pbi_dashboard/Pbi_pricing_and_discount";
import Pbi_discount_trend from "./components/pbi_dashboard/Pbi_discount_trend";
import Pbi_content_score from "./components/pbi_dashboard/Pbi_content_score";
import { useCookies } from "react-cookie";

// import Pbi_share_of_search from "./components/pbi_dashboard/Pbi_share_of_search";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  let token = cookies.access_token;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* user module start */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact-us" element={<Contact />}></Route>
          {/* <Route path="/user-profile" element={<Profile />}></Route> */}
          {/* user module end */}
          {/* ams daeshboard  start */}
          <Route
            path="/Dashboard"
            element={token ? <Dashboard /> : <Login />}
          />
          <Route
            path="/campaign-dashboard"
            element={token ? <Campaign_dashboard /> : <Login />}
          />
          <Route path="/upload-file" element={token ? <Upload /> : <Login />} />
          {/* ams dashboard end */}
          {/* pbi dashboard routes start */}

          <Route
            path="/pbi-dashboard"
            element={token ? <Pbi_home /> : <Login />}
          />

          <Route
            path="/pbi-share-of-search"
            element={token ? <Pbi_share_of_search /> : <Login />}
          />
          <Route
            path="/pbi-organic-rank"
            element={token ? <Pbi_organic_rank /> : <Login />}
          />

          <Route
            path="/pbi-keyword-trend"
            element={token ? <Pbi_keyword_trend /> : <Login />}
          />
          <Route
            path="/pbi-on-shell-availability"
            element={token ? <Pbi_on_shell_availability /> : <Login />}
          />
          <Route
            path="/pbi-pricing-and-discount"
            element={token ? <Pbi_pricing_and_discount /> : <Login />}
          />
          <Route
            path="/pbi-discount-trend"
            element={token ? <Pbi_discount_trend /> : <Login />}
          />
          <Route
            path="/pbi-content-scroe"
            element={token ? <Pbi_content_score /> : <Login />}
          />
          {/* pbi dashboard routes end*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
