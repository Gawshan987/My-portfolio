import React from "react";

export default function Skills() {
  return (
    <div className=" items-center mt-12">
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-white text-6xl sm:p-10 ">Skills</h1>
      </div>
      <div className="w-full flex flex-row items-center ">
        <img className="w-48 h-44 p-4" src="/html.png"></img>
        <img className="w-48 h-44 p-4" src="/css.png"></img>
        <img className="w-48 h-44 p-4" src="/js_logo.png"></img>
        <img className="w-48 h-44 p-4" src="/react.png"></img>
        <img className="w-48 h-44 p-4" src="/type_script.png"></img>
      </div>
    </div>
  );
}
