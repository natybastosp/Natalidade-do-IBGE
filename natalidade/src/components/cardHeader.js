import React from "react";

function CardHeader({ text, data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md lg:h-24 md:h-32 sm:h-32 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-700 p-3">{text}</h2>
        {data && (
          <p className="text-md font-medium text-gray-900 p-3">{data}</p>
        )}
      </div>
    </div>
  );
}

export default CardHeader;
