import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="w-full h-full object-cover bg-hero-pattern bg-center ">
      <div className="grid grid-cols-3 w-full justify-between items-center p-4 gap-3 bg-black  ">
        <h1 className="text-3xl static">Gawshan</h1>
        <div className="flex flex-row gap-2 place-content-center">
          <NavbarItem title={"Home"} />
          <NavbarItem title={"Projects"} />
          <NavbarItem title={"About"} />
        </div>
      </div>
      {/* <div className="grid grid-cols-3 w-full justify-between p-11  ">
        <h1 className="text-3xl text-blue-400 static">Gawshan's blog</h1>
        <div className="flex flex-row gap-4 place-content-center">
          <NavbarItem title={"Home"} />
          <NavbarItem title={"Projects"} />
          <NavbarItem title={"About"} />
        </div>
      </div> */}
      <div className="grid grid-cols-1 pt-20 pl-2">
        <h1 className="text-black font-bold text-xl font-sans">
          Hi my name is Gawshan and I'm a Web Desginer
        </h1>
      </div>
      <div>
        {/* here would be a picture and move the picture to the right side of the screen */}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center pl-2 bg-[#00000040]">
            <h1 className="text-black font-semibold text-xl font-sans">My Story</h1>
            <p className="text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            I first started taking interest in coding when I was in highschool and
            found it fun to learn. As I started to make games and desgin websites
            I had become more interested in coding, to see what else I would be
            able to make with more time, experience and with a team. I wanted to
            take it a step further into the real world to see what I can
            accomplish.
            </p>
        </div>
        <div className="bg-blue-300">Placeholder</div>
      </div>
      <div className="flex flex-col place-content-center">
        <h1 className="text-black pt-10 pl-2 ">Projects</h1>
        <div className="grid grid-cols-2">
            <p className="text-black pt-20 pl-2 bg-red-300">Space Invaders </p>
            <p className="text-black pt-20 pl-2 bg-green-300">Gravity Flip</p>

        </div>
      </div>
    </div>
  );
}
