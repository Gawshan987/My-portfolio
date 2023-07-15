import React from "react";

export default function Project() {
  return (
    <div className="flex flex-col place-content-center">
      <h1 className="text-white pt-10 pl-2 ">Projects</h1>
      <div className="grid grid-cols-2">
        <p className="text-black pt-20 pl-2 bg-red-300">Space Invaders </p>
        <p className="text-black pt-20 pl-2 bg-green-300">Gravity Flip</p>
      </div>
    </div>
  );
}
