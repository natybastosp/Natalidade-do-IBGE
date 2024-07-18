import React from "react";

function CardHeader({ text, data }) {
  return (
    <div>
      <div className="bg-zinc-400 p-4 rounded-lg h-20 ">
        <div className="flex flex-row gap-4 items-center">
          <h2>{text}</h2>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default CardHeader;
