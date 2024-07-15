import React from "react";

function Card({ text }) {
  return (
    <div>
      <div className="bg-zinc-400 p-4 rounded-lg h-20 ">{text}</div>
    </div>
  );
}

export default Card;
