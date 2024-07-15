import React from "react";
import ReactECharts from "echarts-for-react";

function GraphicBars() {
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
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
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

export default GraphicBars;
