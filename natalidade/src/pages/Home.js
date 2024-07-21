import React, { useState, useEffect } from "react";
import BrazilMap from "../components/BrazilMap";
import { fetchDataFromAPITotal } from "../composable/taxaTotal";
import { fetchDataFromAPIBoy } from "../composable/taxaBoy";
import { fetchDataFromAPIGirl } from "../composable/taxaGirl";
import { fetchDataFromAPIFuture } from "../composable/taxaProjecao";
import ColumnChart from "../components/colunmGrafic";
import LineChart from "../components/lineGrafic";

const Home = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);
  const [estadoSelecionadoDetails, setEstadoSelecionadoDetails] = useState({});
  const [data, setData] = useState(null);
  const [taxaBrasil, setTaxaBrasil] = useState(null);
  const [taxaState, setTaxaState] = useState(null);
  const [taxaBoy, setTaxaBoy] = useState(null);
  const [taxaGirl, setTaxaGirl] = useState(null);
  const [dataByYear, setDataByYear] = useState(null);

  const states = [
    { id: 12, label: "AC", name: "Acre" },
    { id: 27, label: "AL", name: "Alagoas" },
    { id: 16, label: "AP", name: "Amapá" },
    { id: 13, label: "AM", name: "Amazonas" },
    { id: 29, label: "BA", name: "Bahia" },
    { id: 23, label: "CE", name: "Ceará" },
    { id: 32, label: "ES", name: "Espírito Santo" },
    { id: 52, label: "GO", name: "Goiás" },
    { id: 21, label: "MA", name: "Maranhão" },
    { id: 51, label: "MT", name: "Mato Grosso" },
    { id: 50, label: "MS", name: "Mato Grosso do Sul" },
    { id: 31, label: "MG", name: "Minas Gerais" },
    { id: 15, label: "PA", name: "Pará" },
    { id: 25, label: "PB", name: "Paraíba" },
    { id: 41, label: "PR", name: "Paraná" },
    { id: 26, label: "PE", name: "Pernambuco" },
    { id: 22, label: "PI", name: "Piauí" },
    { id: 33, label: "RJ", name: "Rio de Janeiro" },
    { id: 24, label: "RN", name: "Rio Grande do Norte" },
    { id: 43, label: "RS", name: "Rio Grande do Sul" },
    { id: 11, label: "RO", name: "Rondônia" },
    { id: 14, label: "RR", name: "Roraima" },
    { id: 42, label: "SC", name: "Santa Catarina" },
    { id: 35, label: "SP", name: "São Paulo" },
    { id: 28, label: "SE", name: "Sergipe" },
    { id: 17, label: "TO", name: "Tocantins" },
  ];

  const handleStateClick = (stateName) => {
    setEstadoSelecionado(stateName);
    const selectedState = states.find((state) => state.name === stateName);
    if (selectedState) {
      setEstadoSelecionadoDetails(selectedState);
    }
  };

  const handleSelectChange = (e) => {
    const selectedLabel = e.target.value;
    setEstadoSelecionado(selectedLabel);
    const selectedState = states.find((state) => state.label === selectedLabel);
    if (selectedState) {
      setEstadoSelecionadoDetails(selectedState);
      // Adiciona um console.log para mostrar o id do estado selecionado
    }
  };

  useEffect(() => {
    if (estadoSelecionadoDetails.id) {
      fetchDataFromAPITotal(
        estadoSelecionadoDetails.id,
        setData,
        setTaxaBrasil,
        setTaxaState
      );
      fetchDataFromAPIBoy(estadoSelecionadoDetails.id, setData, setTaxaBoy);
      fetchDataFromAPIGirl(estadoSelecionadoDetails.id, setData, setTaxaGirl);
      fetchDataFromAPIFuture(
        estadoSelecionadoDetails.id,
        setData,
        setDataByYear
      );
    }
  }, [estadoSelecionadoDetails]);

  return (
    <div className="pt-24 h-screen">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16 sm:grid-cols-1 h-2/3 px-16">
        <div className="bg-slate-100">
          <div className="p-4">
            <div className="w-full h-full">
              <BrazilMap onStateClick={handleStateClick} />
            </div>
          </div>
          <p>A fonte de dados desta página é o IBGE</p>
        </div>

        <div className=" p-4">
          <div>
            <div>
              <span className="flex flex-row gap-3">
                <select
                  className="p-2 rounded-full bg-[#1b4677] text-white"
                  onChange={handleSelectChange}
                  value={estadoSelecionado || ""}
                >
                  <option value="">UF</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.label}>
                      {state.name}
                    </option>
                  ))}
                </select>

                <select
                  className="p-2 rounded-full bg-[#1b4677] text-white"
                  onChange={handleSelectChange}
                  value={estadoSelecionado || ""}
                >
                  <option value="">UF</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.label}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 pt-8 gap-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
                {estadoSelecionadoDetails.name}
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">Taxa de natalidade:</span>{" "}
                {taxaState}% nascimentos
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">
                  Taxa de natalidade no Brasil:
                </span>{" "}
                {taxaBrasil}% nascimentos
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">
                  Taxa de natalidade de meninos:
                </span>{" "}
                {taxaBoy}% nascimentos
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">
                  Taxa de natalidade de meninas:
                </span>{" "}
                {taxaGirl}% nascimentos
              </p>
            </div>

            <div>
              <ColumnChart
                taxaBrasil={taxaBrasil}
                taxaState={taxaState}
                taxaBoy={taxaBoy}
                taxaGirl={taxaGirl}
              />
            </div>
            <div>
              <LineChart dataByYear={dataByYear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
