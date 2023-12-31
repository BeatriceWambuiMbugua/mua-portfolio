import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-black/20 w-full z-50 sticky top-0 py-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap   pl-4 lg:pl-0 text-white ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Link href="/">
        <p className="text-white text-[45px] font-normal leading-snug tracking-[7.50px] font-oswald">
                KIITHYA
              </p>
        </Link>
             
          
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block  lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow font-didact lg:text-base tracking-wider ">
            <Link
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200  hover:text-light-salmon-pink lg:pr-16"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200  lg:pr-16 hover:text-light-salmon-pink"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200  lg:pr-16 hover:text-light-salmon-pink"
            >
              Services
            </Link>
            <Link
              href="/#pricing"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:pr-16 hover:text-light-salmon-pink"
            >
              Pricing
            </Link>
            <Link
              href="/#portfolio"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 lg:pr-16 hover:text-light-salmon-pink"
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200   hover:text-light-salmon-pink"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
