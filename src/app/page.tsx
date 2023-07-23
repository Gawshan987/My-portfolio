import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Intro from "./Intro";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbesthqwallpapers.com%2FUploads%2F6-4-2020%2F127542%2Fthumb2-gray-stylish-background-gray-abstract-background-black-lines-background-stylish-backgrounds.jpg&f=1&nofb=1&ipt=ecb86c0add84802cdb8dbafc9d1e8c5ace4fa8c477c6de0354a08bd40a282080&ipo=images)] bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mx-4  mt-10">
        <Intro />
        <AboutMe />
        <Project />
        <Skills />
      </div>
    </div>
  );
}
