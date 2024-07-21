import React, { useState } from "react";
import BrazilMap from "../components/BrazilMap";

const Home = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);

  const handleClick = (event) => {
    if (event.target.tagName === "path") {
      console.log(event.target.id);
      const estadoId = event.target.id;
      setEstadoSelecionado(estadoId);
    }
  };

  return (
    <div className="pt-24 h-screen">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-16 sm:grid-cols-1 h-2/3 px-16">
        <div className="bg-slate-100">
          <div className="p-4">
            <div>
              <h1>Mapa Interativo do Brasil</h1>
              <BrazilMap />
            </div>
          </div>
          <p>A fonte de dados desta página é o IBGE</p>
          {estadoSelecionado && <p>Estado selecionado: {estadoSelecionado}</p>}
        </div>
        <div className="bg-slate-100 p-4">
          <span className="flex flex-row gap-3">
            <select className="p-2 rounded-md" />
            <select className="p-2 rounded-md" />
            <select className="p-2 rounded-md" />
          </span>
          <span className="flex flex-col pt-8 gap-3">
            <p>dados</p>
            <div>grafico de colunas</div>
            <div>grafico de linha</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
