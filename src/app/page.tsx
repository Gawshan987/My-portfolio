import Image from "next/image";
import Navbar from "./Navbar";
import backgroundImage from "../images./white.png";
import NavbarItem from "./NavbarItem";
import AboutMe from "./AboutMe";
import Project from "@/Project";
import Intro from "./Intro";

export default function Home() {
  return (
    <div className="bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbesthqwallpapers.com%2FUploads%2F6-4-2020%2F127542%2Fthumb2-gray-stylish-background-gray-abstract-background-black-lines-background-stylish-backgrounds.jpg&f=1&nofb=1&ipt=ecb86c0add84802cdb8dbafc9d1e8c5ace4fa8c477c6de0354a08bd40a282080&ipo=images)] bg-no-repeat bg-cover min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Navbar />
        <Intro />
        <AboutMe />
        <Project />
      </div>
    </div>
  );
}
