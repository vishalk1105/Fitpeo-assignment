import React from "react";
import Chart from "./Chart";

const ExpenseChart = () => {
  const ChartDataPonits = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 5 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nev", value: 0 },
    { label: "Dec", value: 0 },
  ];
  return <Chart dataPoints={ChartDataPonits} />;
};

export default ExpenseChart;
