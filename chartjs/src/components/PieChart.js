import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart() {
  const data = {
    labels: ["Go", "Python", "Kotlin", "JavaScript", "R", "Swift"],
    datasets: [
      {
        label: "# of Votes",
        data: [35, 25, 22, 20, 18, 15],
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width: 650, textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Most Popular Programming languages to learn in 2022
      </h1>
      <Pie data={data} width={50} height={50} />
    </div>
  );
}
