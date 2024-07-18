import React from "react";

function Sidebar(props) {
  return (
    <div>
      <div className="bg-indigo-900 text-stone-200 p-4 h-screen w-56 fixed left-0 top-0 shadow-lg ">
        <header className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">Nataliada Br</h1>
        </header>
        <div className="grid grid-cols-1 gap-2 pt-6">
          <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded transition duration-300">
            Home
          </button>
          <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded transition duration-300">
            Dashboard
          </button>
        </div>
        <span> ____________________</span>
        <div className="text-stone-950 mt-6">{props.children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
