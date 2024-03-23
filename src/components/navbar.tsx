import Link from "next/link";
import { ModeToggle } from "./setThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center px-4 md:px-6  backdrop-blur-[2px]">
      <Link className="flex mr-6" href="#"></Link>
      <nav className=" md:flex items-center space-x-4 flex-1">
        <Link className="font-medium text-sm leading-none" href="/">
          Home
        </Link>
        <Link className="font-medium text-sm leading-none" href="/convert">
          Convert
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          Price
        </Link>
      </nav>
      <Link className="flex mr-6" href="#">
        {" "}
        <ModeToggle />
      </Link>
    </nav>
  );
}
