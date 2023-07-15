import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div>
      <div className="grid grid-cols-3 w-full justify-between items-center p-4 gap-3 bg-black  ">
        <h1 className="text-3xl static">Gawshan</h1>
        <div className="flex flex-row gap-2 place-content-center">
          <NavbarItem title={"Home"} />
          <NavbarItem title={"Projects"} />
          <NavbarItem title={"About"} />
        </div>
      </div>
    </div>
  );
}
