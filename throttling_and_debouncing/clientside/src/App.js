import Login from "./component/Login";
import Registration from "./component/Registration";
import Logout from "./component/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Forgot from "./component/Forgot";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/forgot" element={<Forgot />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
