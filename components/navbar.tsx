import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 h-20 w-full bg-green">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/logo.png" alt="OpenHouse.ai" width={150} height={150} />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 rounded-lg border border-gray-100 p-4 font-medium text-white md:mt-0 md:flex items-center md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link href="#" className="block px-3 py-2 " aria-current="page">
                Solution
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 ">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 ">
                Contact
              </Link>
            </li>
            <li>
              <Button text="Book a meeting" href="#" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
