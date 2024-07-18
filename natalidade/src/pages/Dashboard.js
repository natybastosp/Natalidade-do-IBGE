import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardHeader from "../components/cardHeader";
import CardMain from "../components/cardMain";
import ReactECharts from "echarts-for-react";
import { fetchDataFromAPITotal } from "../composable/taxaTotal";
import { fetchDataFromAPIBoy } from "../composable/taxaBoy";
import { fetchDataFromAPIGirl } from "../composable/taxaGirl";
import { fetchDataFromAPIFuture } from "../composable/taxaProjecao";

function Dashboard() {
  const [data, setData] = useState(null);
  const [taxaBrasil, setTaxaBrasil] = useState(null);
  const [taxaState, setTaxaState] = useState(null);
  const [taxaBoy, setTaxaBoy] = useState(null);
  const [taxaGirl, setTaxaGirl] = useState(null);
  const [dataByYear, setDataByYear] = useState(null);
  const location = useLocation();
  const { id, label, name } = location.state || {};

  useEffect(() => {
    fetchDataFromAPITotal(id, setData, setTaxaBrasil, setTaxaState);
    fetchDataFromAPIBoy(id, setData, setTaxaBoy);
    fetchDataFromAPIGirl(id, setData, setTaxaGirl);
    fetchDataFromAPIFuture(id, setData, setDataByYear);
  }, [id]);

  console.log("Dados:", taxaBoy);
  console.log("Dados:", taxaGirl);

  const col = {
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

  const line = {
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
    <div className="min-h-screen bg-gray-100">
      <main className="ml-60 p-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <CardHeader
            text={
              taxaBrasil
                ? `Total de crianças no Brasil de 0 a 4 anos: ${taxaBrasil}%`
                : "Taxa não disponível "
            }
          />
          <CardHeader
            text={
              taxaState
                ? `Total de crianças no estado de ${name} de 0 a 4 anos: ${taxaState}%`
                : `Taxa não disponível para o estado de ${name}`
            }
          />
          <CardHeader text="Total de nascimento" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
            <ReactECharts option={col} />
          </div>

          <div className="flex flex-col gap-6  ">
            <CardMain
              text={
                taxaGirl
                  ? `Meninas no estado de ${name} de 0 a 4 anos: ${taxaGirl}%`
                  : `Taxa de meninas não disponível para o estado de ${name}`
              }
            />
            <CardMain
              text={
                taxaBoy
                  ? `Meninos no estado de ${name} de 0 a 4 anos: ${taxaBoy}%`
                  : `Taxa de meninos não disponível para o estado de ${name}`
              }
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <ReactECharts option={line} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
