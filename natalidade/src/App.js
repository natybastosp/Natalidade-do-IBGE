import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 h-screen w-56 fixed left-0 top-0">
        <h1 className="text-2xl">Nataliada Br</h1>
      </header>
      <main className="p-4 ml-56">
        <div className="grid grid-cols-3 gap-8 h-16 ">
          <div className="bg-black p-4 rounded-lg">
            <p> Taxa de nataliada</p>
          </div>
          <div className="bg-black p-4 rounded-lg ">box de dados</div>
          <div className="bg-black p-4 rounded-lg ">box de dados</div>
        </div>
      </main>
    </div>
  );
}

export default App;
