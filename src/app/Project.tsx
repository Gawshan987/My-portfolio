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
            This game is a simplified take on Space Invaders, featuring blocks
            with an added gravity mechanic. When the "Z" key is pressed, the
            controls are inverted, causing the invaders to move upward in
            reverse, and pressing the key again makes them descend. Through the
            development of this game, I gained valuable experience with
            functions, arrays, and loops, while also tackling the challenges of
            implementing gravity and tracking movement direction.
          </p>
        </div>
        <div>
          <img className="w-full h-full " src="/spaceinvaders.png"></img>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-white pt-20 text-3xl">Memory Game</p>
          <p className="text-white pt-4 text-justify sm:p10">
            This is a simple yet engaging memory game where players click on
            squares to find matching pairs until all squares are paired. Through
            the development of this game, I honed my skills in creating
            functions and effectively utilizing arrays, deepening my
            understanding of game logic and interactive design.
          </p>
        </div>
        <div>
          <img className="mt-20 w-full h-full" src="/memorygame.png"></img>
        </div>
      </div>
    </div>
  );
}
