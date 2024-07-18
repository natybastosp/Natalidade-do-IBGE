import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardHeader from "../components/cardHeader";
import CardMain from "../components/cardMain";
import ReactECharts from "echarts-for-react";
import { fetchDataFromAPITotal } from "../composable/taxaTotal";
import { fetchDataFromAPIBoyGirl } from "../composable/taxaBoyGirl";

function Dashboard() {
  const [data, setData] = useState(null);
  const [taxaBrasil, setTaxaBrasil] = useState(null);
  const [taxaState, setTaxaState] = useState(null);
  const [taxaBoy, setTaxaBoy] = useState(null);
  const [taxaGirl, setTaxaGirl] = useState(null);
  const location = useLocation();
  const { id, label, name } = location.state || {};

  useEffect(() => {
    fetchDataFromAPITotal(id, setData, setTaxaBrasil, setTaxaState);
    fetchDataFromAPIBoyGirl(id, setData, setTaxaBoy, setTaxaGirl);
  }, [id]);

  const datas = [2, 230, 224, 300, 135, 147, 260];
  const line = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: datas,
        type: "line",
      },
    ],
  };

  const col = {
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
    <div className="min-h-screen bg-gray-100">
      <aside className="fixed inset-y-0 left-0 bg-blue-900 text-white w-60 p-5">
        <h1 className="text-3xl font-bold mb-10">Natalida Br</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="ml-60 p-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <CardHeader
            text={
              taxaBrasil
                ? `Total de crianças no Brasil de 0 a 4 anos: ${taxaBrasil}%`
                : "Taxa não disponível"
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ReactECharts option={line} />
          </div>
          <div className="flex flex-col gap-6">
            <CardMain
              text={
                taxaState
                  ? `Meninas no estado de ${name} de 0 a 4 anos: ${taxaGirl}%`
                  : `Taxa não disponível para o estado de ${name}`
              }
            />
            <CardMain
              text={
                taxaState
                  ? `Meninos no estado de ${name} de 0 a 4 anos: ${taxaBoy}%`
                  : `Taxa não disponível para o estado de ${name}`
              }
            />
          </div>
          <div className="flex flex-col gap-6">
            <CardMain text="Cidade com maior nascimento" data="20" />
            <CardMain text="Cidade com menos nascimento" data="20" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ReactECharts option={col} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
