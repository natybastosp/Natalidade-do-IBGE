import React from "react";

function CardMain({ text, data }) {
  return (
    <div>
      <div className="bg-zinc-400 p-4 rounded-lg h-44 mb-[17px] flex items-center justify-center">
        <div className="flex flex-row gap-4 items-center">
          <h2>{text}</h2>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
