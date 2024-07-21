import React from "react";
import ReactECharts from "echarts-for-react";

const LineChart = ({ dataByYear }) => {
  const lineOption = {
    title: {
      text: "Projeção de Nascimentos",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1E3A8A",
      },
    },
    xAxis: {
      type: "category",
      data: ["2025", "2026", "2027", "2028", "2029", "2030"],
      axisLabel: {
        color: "#4B5563",
      },
      axisLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#4B5563",
      },
      axisLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#E5E7EB",
        },
      },
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
        lineStyle: {
          color: "#3B82F6",
          width: 2,
        },
        itemStyle: {
          color: "#3B82F6",
        },
      },
    ],
  };

  return (
    <div
      className="bg-gray-50 p-6 rounded-lg shadow-lg"
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
