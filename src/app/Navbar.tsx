import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full bg-black px-8 py-4 ">
      <h1 className="text-3xl static items-center">Gawshan</h1>
      <div className="flex flex-end gap-2 ">
        <NavbarItem title={"Home"} />
        <NavbarItem title={"About"} />
        <NavbarItem title={"Projects"} />
      </div>
    </div>
  );
}
