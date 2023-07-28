import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-black px-8 py-4">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl items-center hover:text-violet-500 transition-colours sm:py-4 py-4">
          Gawshan
        </h1>
        <a target="_blank" href="https://github.com/Gawshan987">
          <img
            src="/github.png"
            className="w-6 h-6 text-white hover:text-violet-500"
          ></img>
        </a>
      </div>
      <div className="flex gap-2 justify-center">
        <NavbarItem title={"About"} scrollToId="about" />
        <NavbarItem title={"Projects"} scrollToId="projects" />
        <NavbarItem title={"Skills"} scrollToId="skills" />
      </div>
    </div>
  );
}
