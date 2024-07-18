import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import CardHeader from "./components/cardHeader";
import CardMain from "./components/cardMain";
import GraphicLines from "./components/graphicLines";
import GraphicBars from "./components/graphicBars";

function Dashboard() {
  // função para chamar a api do ibge
  const [data, setData] = useState(null);

  useEffect(() => {
    // Função para chamar a API do IBGE
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
        );
        const result = await response.json();
        console.log("Resultado da API:", result);
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-3 bg-[#f5f5f5]">
      <header>
        <Sidebar>
          {" "}
          <p className="text-stone-200">estado</p>{" "}
        </Sidebar>
      </header>
      <main className="ml-60 ">
        <div className=" grid grid-cols-3 gap-6">
          <CardHeader text="Taxa de natalidade" />
          <CardHeader text="Total de nascimento" />
          <CardHeader text="????????" />
        </div>
        <div className="py-5 grid grid-cols-2 gap-3">
          <GraphicLines />
          <div className="flex flex-col gap-3">
            <CardMain text="Natalidade de meninos" data="20" />
            <CardMain text="Nataliadade de meninas" data="20" />
          </div>
          <div className="flex flex-col gap-3">
            <CardMain text="Cidade com maior nascimento" data="20" />
            <CardMain text="Cidade com menos nascimento" data="20" />
          </div>
          <GraphicBars />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
