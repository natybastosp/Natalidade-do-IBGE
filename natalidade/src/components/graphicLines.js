import React from "react";
import ReactECharts from "echarts-for-react";

function GraphicLines() {
  const data = [2, 230, 224, 300, 135, 147, 260];
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data,
        type: "line",
      },
    ],
  };

  return (
    <div>
      <div className="bg-zinc-400 p-4 rounded-lg h-96 ">
        <ReactECharts option={option} />
      </div>
    </div>
  );
}

export default GraphicLines;
