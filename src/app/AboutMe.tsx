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
          My passion for coding began in high school when I discovered the
          thrill of creating. As I explored game development and website design,
          my curiosity only deepened. I became eager to explore the limitless
          possibilities of coding and to see what I could achieve with more
          experience and collaboration. Driven by this curiosity, I sought
          opportunities to apply my skills in real-world projects, allowing me
          to learn from others and grow as a developer. I thrive in dynamic
          environments where creativity meets technology, and I am excited to
          contribute to impactful projects alongside a talented team. My journey
          is just beginning, and I am eager to push the boundaries of what I can
          accomplish in the tech world.
        </p>
      </div>

      <div className="flex flex-row justify-center overflow-hidden">
        <img
          className="sm:w-full object-contain sm:h-80 h-60 w-60 transform transition duration-300 ease-in-out hover:scale-110"
          alt="Pop-out effect on hover"
          src="https://designstripe-secure.imgix.net/scene-snapshots/c1023d5e-6e82-4de6-a40a-14c8d8fc78dc/1686948906901/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=99a8b90e34ee4deb3f4c9ef47af4b8e7"
        ></img>
      </div>
    </div>
  );
}
