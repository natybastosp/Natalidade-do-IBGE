import React from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import Card from "./components/card";
import Graphic from "./components/graficos";

function App() {
  return (
    <div className="m-3">
      <header>
        <Sidebar />
      </header>
      <main className="ml-60 ">
        <div className=" grid grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="py-5 grid grid-cols-2 gap-3">
          <Graphic />
          <div className="flex flex-col gap-3">
            <Card />
            <Card />
          </div>
          <div className="flex flex-col gap-3">
            <Card />
            <Card />
          </div>
          <Graphic />
        </div>
      </main>
    </div>
  );
}

export default App;
