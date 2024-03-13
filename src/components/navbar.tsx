/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bC7fINJBNP1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { ModeToggle } from "./setThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center px-4 md:px-6">
      <Link className="flex mr-6" href="#"></Link>
      <nav className=" md:flex items-center space-x-4 flex-1">
        <Link className="font-medium text-sm leading-none" href="#">
          Home
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          Preço
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          Utilize
        </Link>
      </nav>
      <Link className="flex mr-6" href="#">
        {" "}
        <ModeToggle />
      </Link>
    </nav>
  );
}
