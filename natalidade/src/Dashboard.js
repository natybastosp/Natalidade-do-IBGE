import React from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import Card from "./components/card";
import GraphicLines from "./components/graphicLines";
import GraphicBars from "./components/graphicBars";

function App() {
  return (
    <div className="m-3 bg-[##f9f9e7]">
      <header>
        <Sidebar />
      </header>
      <main className="ml-60 ">
        <div className=" grid grid-cols-3 gap-6">
          <Card text="Taxa de natalidade" />
          <Card text="Total de nascimento" />
          <Card text="????????" />
        </div>
        <div className="py-5 grid grid-cols-2 gap-3">
          <GraphicLines />
          <div className="flex flex-col gap-3">
            <Card text="Natalidade de meninos" />
            <Card text="Nataliadade de meninas" />
          </div>
          <div className="flex flex-col gap-3">
            <Card text="Cidade com maior nascimento" />
            <Card text="Cidade com menos nascimento" />
          </div>
          <GraphicBars />
        </div>
      </main>
    </div>
  );
}

export default App;
