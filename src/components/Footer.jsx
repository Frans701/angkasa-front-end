import React from "react";
import { Link } from "react-router-dom";
import angkasaLogo from "../assets/angkasaLogo.svg";

function Footer() {
  return (
    <>
      <footer class="text-center lg:text-left bg-white ">
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex flex-col gap-[16px] items-start">
              <Link to="/">
                {" "}
                <img
                  className="h-[40px]"
                  src={angkasaLogo}
                  alt="Angkasa Logo"
                />
              </Link>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="justify-self-center">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Navigation
              </h6>
              <p class="mb-4">
                <a href="#!" class="">
                  Flight
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="">
                  Check Order
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="">
                  FAQ
                </a>
              </p>
            </div>
            <div class="justify-self-center">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Any Question
              </h6>
              <Link to="/">
                <button className="text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 border-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none dark:focus:ring-blue-800">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
