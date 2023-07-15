import React from "react";

export default function AboutMe() {
  return (
    <div>
      <div className="grid grid-cols-1 pt-20 pl-2">
        <h1 className="text-white font-bold text-xl font-sans">
          Hi my name is Gawshan and I'm a Web Desginer
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center pl-2 bg-[#00000040]">
          <h1 className="text-white font-semibold text-xl font-sans">
            My Story
          </h1>
          <p className="text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            I first started taking interest in coding when I was in highschool
            and found it fun to learn. As I started to make games and desgin
            websites I had become more interested in coding, to see what else I
            would be able to make with more time, experience and with a team. I
            wanted to take it a step further into the real world to see what I
            can accomplish.
          </p>
        </div>
        <div className="bg-blue-300">Placeholder</div>
      </div>
    </div>
  );
}
