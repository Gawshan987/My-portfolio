import React from "react";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="grid sm:grid-cols-2 grid-cols-1 justify-center items-center mt-40"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-white font-semibold text-3xl font-sans sm:py-0 py-4">
          My Story
        </h1>
        <p className="text-white sm:p-10 text-justify">
          I first started taking interest in coding when I was in highschool and
          found it fun to learn. As I started to make games and desgin websites
          I had become more interested in coding, to see what else I would be
          able to make with more time, experience and with a team. I wanted to
          take it a step further into the real world to see what I can
          accomplish.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <img
          className="sm:w-full object-contain sm:h-80 h-60 w-60"
          src="https://designstripe-secure.imgix.net/scene-snapshots/c1023d5e-6e82-4de6-a40a-14c8d8fc78dc/1686948906901/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=99a8b90e34ee4deb3f4c9ef47af4b8e7"
        ></img>
      </div>
    </div>
  );
}
