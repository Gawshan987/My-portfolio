type NavbarItemProps = {
  title: String;
};

export default function NavbarItem({ title }: NavbarItemProps) {
  return (
    <div className="cursor-pointer bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300  text-black p-4">
      <p>{title}</p>
    </div>
  );
}
