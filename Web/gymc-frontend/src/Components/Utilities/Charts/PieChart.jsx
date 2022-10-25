import React from "react";
import { Chart } from "react-google-charts";
export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];
export const options = {
    title: "My Daily Activities",
    colors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
    chartArea: { width: 350, height: 350 },
    legend: {
        alignment: "center",
    },
};

const PieChart = (props) => {
    return (
        <Chart
            chartType="PieChart"
            data={props.data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    )
}
export default PieChart