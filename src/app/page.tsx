import Image from "next/image";
import Navbar from "./Navbar";
import backgroundImage from "../images./white.png";
import NavbarItem from "./NavbarItem";
import AboutMe from "./AboutMe";
import Project from "@/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Project />
      <div className="w-full h-full bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbesthqwallpapers.com%2FUploads%2F6-4-2020%2F127542%2Fthumb2-gray-stylish-background-gray-abstract-background-black-lines-background-stylish-backgrounds.jpg&f=1&nofb=1&ipt=ecb86c0add84802cdb8dbafc9d1e8c5ace4fa8c477c6de0354a08bd40a282080&ipo=images)] bg-no-repeat bg-cover min-h-screen">
        {/* <div className="grid grid-cols-3 w-full justify-between p-11  ">
    </div> */}
      </div>

      {/* move the code from navbar.tsx into page.tsx because its supposed to be here
    and then make small compontent .tsx files for each component on the page that im
    creating such as: navbar( which exist alr), about me, projects, skills  */}

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </div>
  );
}
