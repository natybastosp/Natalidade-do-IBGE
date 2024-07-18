import React from "react";

function CardHeader({ text, data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-20 flex items-center justify-between">
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700">{text}</h2>
        {data && (
          <p className="text-md font-medium text-gray-900 mt-1">{data}</p>
        )}
      </div>
    </div>
  );
}

export default CardHeader;
