import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-row justify-center items-center space-x-96">
      <div className="flex flex-col space-y-2 items-center">
        <h1 className="text-white font-semibold text-2xl font-sans">
          My Story
        </h1>
        <p className="text-white max-w-xl">
          I first started taking interest in coding when I was in highschool and
          found it fun to learn. As I started to make games and desgin websites
          I had become more interested in coding, to see what else I would be
          able to make with more time, experience and with a team. I wanted to
          take it a step further into the real world to see what I can
          accomplish.
        </p>
      </div>
      {/* <div className="bg-[url(https://designstripe-secure.imgix.net/scene-snapshots/c1023d5e-6e82-4de6-a40a-14c8d8fc78dc/1686948906901/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=99a8b90e34ee4deb3f4c9ef47af4b8e7)] bg-no-repeat bg-cover bg-center max-h-96"></div> */}
      <img
        className="sm:w-full object-contain sm:h-64 h-16"
        src="https://designstripe-secure.imgix.net/scene-snapshots/c1023d5e-6e82-4de6-a40a-14c8d8fc78dc/1686948906901/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=99a8b90e34ee4deb3f4c9ef47af4b8e7"
      ></img>
    </div>
  );
}