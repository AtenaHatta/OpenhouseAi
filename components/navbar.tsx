import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 h-20 w-full bg-green">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" alt="OpenHouse.ai" width={150} height={150} />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
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
