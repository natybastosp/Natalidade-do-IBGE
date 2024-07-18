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

  useEffect(
    () => {
      fetchDataFromAPITotal(id, setData, setTaxaBrasil, setTaxaState);
      fetchDataFromAPIBoyGirl(id, setData, setTaxaBoy, setTaxaGirl); // Utilizar a função de serviço
    },
    [id]
    // Utilizar a função de serviço
  );

  const datas = [2, 230, 224, 300, 135, 147, 260];
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
        data: datas,
        type: "line",
      },
    ],
  };

  return (
    <div className="m-3 bg-[#f5f5f5]">
      <header></header>
      <main className="ml-60">
        <div className="grid grid-cols-3 gap-6">
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
        <div className="py-5 grid grid-cols-2 gap-3">
          <div className="bg-zinc-400 p-4 rounded-lg h-96">
            <ReactECharts option={option} />
          </div>
          <div className="flex flex-col gap-3">
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
                  ? `Meninas no estado de ${name} de 0 a 4 anos: ${taxaBoy}%`
                  : `Taxa não disponível para o estado de ${name}`
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <CardMain text="Cidade com maior nascimento" data="20" />
            <CardMain text="Cidade com menos nascimento" data="20" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
