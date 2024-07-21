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
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
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
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Percentual",
        type: "bar",
        barWidth: "60%",
        data: [taxaBrasil, taxaState, taxaBoy, taxaGirl],
      },
    ],
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md"
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
