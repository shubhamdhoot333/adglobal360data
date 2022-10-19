import logo from "./logo.svg";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChar";
import VarticalChart from "./components/VarticalChart";
import PieChart from "./components/PieChart";
function App() {
  return (
    <div className="App">
      <h4>Line chart</h4>
      <LineChart />
      <h4>Bar chart</h4>
      <BarChart />
      <VarticalChart />
      <h4>Pie chart</h4>
      <PieChart />
    </div>
  );
}

export default App;
