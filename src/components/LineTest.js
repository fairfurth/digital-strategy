// ./components/LineChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
labels: labels,
datasets: [
{
label: "My First dataset",
backgroundColor: "rgb(255, 99, 132)",
borderColor: "rgb(255, 99, 132)",
data: [1, 10, 5, 2, 20, 30, 45],
    },
    {
label: "My Second dataset",
backgroundColor: "rgb(150, 45, 80)",
borderColor: "rgb(123, 50, 100)",
data: [10, 5, 15, 20, 2, 15, 30],
},
],
};
return (
<div>
<Bar data={data} />
</div>
);
};
export default BarChart