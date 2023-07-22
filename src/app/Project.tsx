import React from "react";

export default function Project() {
  return (
    <div className="w-full border-4 ">
      <div className="flex flex-col items-center">
        <h1 className="text-white pt-10 pl-2 text-3xl">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full bg-green-700 place-items-center">
        <div className="bg-red-400 w-full">
          <p className="text-white pt-20 border-x-4">Space Invaders Title</p>
        </div>
        <div className="bg-blue-400">
          <img className="w-full h-full" src="/spaceinvaders.png"></img>
        </div>
        <div className="w-full flex flex-col bg-blue-300">
          {" "}
          <p className="text-white pt-20 bg-indigo-300 border-4">
            Gravity Flip Title
          </p>{" "}
          <p className="text-white pt-20 bg-indigo-300 border-4">
            Gravity Flip Title
          </p>{" "}
          <p className="text-white pt-20 bg-indigo-300 border-4">
            Gravity Flip Title
          </p>{" "}
          <p className="text-white pt-20 bg-indigo-300 border-4">
            Gravity Flip Title
          </p>
        </div>
        <div>Image for Gravity Flip</div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row justify-start bg-blue-300 w-full"></div>

        <div className="flex flex-col sm:flex-row pl-40 w-full"></div>
      </div>
    </div>
  );
}
