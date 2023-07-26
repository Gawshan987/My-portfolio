import React from "react";

export default function Project() {
  return (
    <div id="projects" className="mt-16 sm:mx-16">
      <div className="flex flex-col items-center">
        <h1 className="text-white pt-10 text-5xl">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full place-items-center mt-12 gap-16">
        <div className="flex flex-col items-center w-full">
          <p className="text-white pt-20 text-3xl ">Space Invaders</p>
          <p className="text-white pt-4 text-justify sm:p10">
            This game is a simple version of Space Invaders using blocks but
            gravity has been added. When the "z" key is been pressed the
            controls are flipped and the invaders move in a backwards sequence
            upwards, and when the key is pressed again it moves downwards. From
            creating this game I've learned functions, arrays, loops, and how to
            add gravity and track the movements direction which I had found
            challenging.
          </p>
        </div>
        <div>
          <img className="w-full h-full " src="/spaceinvaders.png"></img>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-white pt-20 text-3xl">Memory Game</p>
          <p className="text-white pt-4 text-justify sm:p10">
            This is a basic memory game where you click on a square and try to
            match it with another until all of the squares are matched. From
            making this I've practiced making functions and arrays more
            effectively.
          </p>
        </div>
        <div>
          <img className="mt-20 w-full h-full" src="/memorygame.png"></img>
        </div>
      </div>
    </div>
  );
}
