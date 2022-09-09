//import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
