import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import angkasaLogo from "../assets/angkasaLogo.svg";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import Notif from "./Notif";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="flex items-center justify-between py-[14px] px-[24px] xl:px-[80px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link to="/">
                {" "}
                <img
                  className="h-[40px]"
                  src={angkasaLogo}
                  alt="Angkasa Logo"
                  />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-row items-center gap-[24px]">
                <Link
                  to="/"
                  className="px-2 py-2 rounded-md text-sm font-medium"
                >
                  Flight
                </Link>
                <Link
                  to="/check-order"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Check Order
                </a>
                <a
                  href="/profile"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                  Profile
                </a>
                <Notif/>
                <a
                  href="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </a>
                <Link to="/register">
                  <Buttom>Register</Buttom>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden bg-white py-[24px] px-[24px] "
              id="mobile-menu"
            >
              <div ref={ref} className="flex flex-col items-end gap-[16px]">
                <Link
                  to="/"
                  className="px-2 py-2 rounded-md text-sm font-medium"
                >
                  Flight
                </Link>
                <Link
                  to="/check-order"
                  className="px-2 py-2 rounded-md text-sm font-medium"
                >
                  Check Order
                </Link>
                {/* TESTING PROFILE */}
                <Link
                  to="/profile"
                  className="px-2 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                {/* END OF TESTING PROFILE */}
                <div className="flex flex-row gap-[8px] items-center">
                  <Link
                    to="/login"
                    className="hover:bg-blue-700 hover:text-white focus:ring-4 border-blue-700 border-2 border-solid font-medium rounded-lg text-sm px-[24px] py-2 focus:outline-none focus:ring-blue-800"
                  >
                    Login
                  </Link>
                  <Link to="/register">
                    <Buttom>Register</Buttom>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
