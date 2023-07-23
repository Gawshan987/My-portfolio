import React from "react";

export default function Intro() {
  return (
    <div className="grid grid-cols-1 justify-center items-center text-white font-bold text-3xl font-sans mt-16">
      <h1 className="flex flex-col-1 justify-center selection:bg-violet-400 selection:text-violet-700">
        Hi my name is Gawshan!
      </h1>
      <h1 className="flex flex-col-1 justify-center selection:bg-violet-400 selection:text-violet-700">
        I'm a Web Desginer and React Dev?
      </h1>
      <div className="flex flex-col-1 justify-center mt-10 border-4">
        <img className=" w-72 sm:w-full" src="/face.png"></img>
      </div>
    </div>
  );
}
