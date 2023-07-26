import React from "react";

export default function Skills() {
  return (
    <div id="skills" className=" items-center mt-12">
      <div className="w-full flex flex-col items-center ">
        <h1 className="text-white text-6xl sm:p-10 p-10 ">Skills</h1>
      </div>
      <div className="w-full sm:flex sm:flex-row grid grid-cols-3 items-center border-4">
        <img
          className="w-48 h-44 p-4 object-cover hover:scale-110 transform transition-all"
          src="/html.png"
        ></img>
        <img
          className="w-48 h-44 p-4 object-cover hover:scale-110 transform transition-all"
          src="/css.png"
        ></img>
        <img
          className="w-48 h-44 p-4 object-cover hover:scale-110 transform transition-all"
          src="/js_logo.png"
        ></img>
        <img
          className="w-48 h-44 p-4 object-cover hover:scale-110 transform transition-all"
          src="/react.png"
        ></img>
        <img
          className="w-48 h-44 p-4 object-cover"
          src="/type_script.png"
        ></img>
      </div>
    </div>
  );
}
