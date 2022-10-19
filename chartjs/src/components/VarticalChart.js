import React, { Component } from "react";

import { Bar } from "react-chartjs-2";
export default class Button extends Component {
  render() {
    const dataBar = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#EC932F",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My First dataset 2",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={dataBar}
          width={100}
          height={50}
          options={{ indexAxis: "y" }}
        />
        <h2>Horizontal Bar Example</h2>
      </div>
    );
  }
}
