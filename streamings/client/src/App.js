import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import UploadForm from "./component/UploadForm";
import UploadList from "./component/UploadList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<UploadForm />}></Route>
          <Route path="/allvideo" element={<UploadList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
