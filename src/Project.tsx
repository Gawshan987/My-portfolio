import React from "react";

export default function Project() {
  return (
    <div className="w-full border-4 ">
      <div className="flex flex-col items-center">
        <h1 className="text-white pt-10 pl-2 text-3xl">Projects</h1>
      </div>
      <div className=" flex flex-col justify-start bg-blue-300 w-full">
        <p className="text-white pt-20 pl-2 border-x-4">Space Invaders</p>
        <p className="text-white pt-20 pl-2 bg-green-300">Gravity Flip</p>
      </div>
    </div>
  );
}
