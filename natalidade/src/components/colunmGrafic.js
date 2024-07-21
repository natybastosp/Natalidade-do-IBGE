import React from "react";
import ReactECharts from "echarts-for-react";

const ColumnChart = ({ taxaBrasil, taxaState, taxaBoy, taxaGirl }) => {
  const colOption = {
    title: {
      text: "Comparação de Taxas",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1E3A8A",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "#FFFFFF",
      borderColor: "#1E3A8A",
      borderWidth: 1,
      textStyle: {
        color: "#1E3A8A",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Taxa Brasileira",
          "Taxa Estadual",
          "Taxa Meninos",
          "Taxa Meninas",
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "#4B5563",
        },
        axisLine: {
          lineStyle: {
            color: "#E5E7EB",
          },
        },
      },
    ],
    yAxis: [
      {
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
    ],
    series: [
      {
        name: "Percentual",
        type: "bar",
        barWidth: "60%",
        data: [taxaBrasil, taxaState, taxaBoy, taxaGirl],
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
      aria-labelledby="col-chart-title"
    >
      <h2 id="col-chart-title" className="sr-only">
        Gráfico de Colunas
      </h2>
      <ReactECharts
        option={colOption}
        aria-label="Gráfico de colunas mostrando taxas de crianças no Brasil"
      />
    </div>
  );
};

export default ColumnChart;
