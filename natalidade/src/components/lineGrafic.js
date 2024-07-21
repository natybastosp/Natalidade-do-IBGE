import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = ({ dataByYear }) => {
  const lineOption = {
    title: {
      text: "Projeção de nascimentos",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    xAxis: {
      type: "category",
      data: ["2025", "2026", "2027", "2028", "2029", "2030"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          dataByYear?.[2025]?.[2018],
          dataByYear?.[2026]?.[2018],
          dataByYear?.[2027]?.[2018],
          dataByYear?.[2028]?.[2018],
          dataByYear?.[2029]?.[2018],
          dataByYear?.[2030]?.[2018],
        ],
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md"
      role="region"
      aria-labelledby="line-chart-title"
    >
      <h2 id="line-chart-title" className="sr-only">
        Projeção de Nascimentos
      </h2>
      <ReactECharts
        option={lineOption}
        aria-label="Gráfico de linha mostrando projeção de nascimentos"
      />
    </div>
  );
};

export default LineChart;
