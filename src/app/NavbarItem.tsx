"use client";

type NavbarItemProps = {
  title: string;
  scrollToId: string; // Add the scrollToId prop to specify the target section ID
};

export default function NavbarItem({ title, scrollToId }: NavbarItemProps) {
  const handleClick = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className="cursor-pointer bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300  text-black p-4"
    >
      <p>{title}</p>
    </div>
  );
}
