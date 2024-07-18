import React from "react";

function CardMain({ text, data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-44 flex items-center justify-between">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700">{text}</h2>
        <p className="text-2xl font-bold text-gray-900 mt-2">{data}</p>
      </div>
    </div>
  );
}

export default CardMain;
