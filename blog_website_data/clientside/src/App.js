import Login from "./component/Login";
import Registration from "./component/Registration";
import Logout from "./component/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Forgot from "./component/Forgot";
import Post from "./component/Post";
import FullPost from "./component/FullPost";
import Blog from "./component/Blog";
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
            <Route path="/post" element={<Post />}></Route>
            <Route path="/fullpost/:id" element={<FullPost />}></Route>
            <Route path="/forgot" element={<Forgot />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
