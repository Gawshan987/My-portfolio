import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-black px-8 py-4 ">
      <h1 className="text-3xl items-center">Gawshan</h1>
      <div className="flex gap-2 justify-center">
        <NavbarItem title={"Home"} />
        <NavbarItem title={"About"} />
        <NavbarItem title={"Projects"} />
      </div>
    </div>
  );
}
