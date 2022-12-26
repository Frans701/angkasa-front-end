import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import angkasaLogo from "../assets/angkasaLogo.svg";
import Buttom from "./Buttom";

function Footer() {

  return (
    <>
      <footer class="lg:text-left bg-white ">
        <div class="xl:px-[80px] py-[40px] md:text-left px-[24px]">
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
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
            <div class="xl:justify-self-center">
              <h6 class="uppercase font-semibold mb-4 xl:flex justify-center md:justify-start">
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
            <div class="xl:justify-self-center">
              <h6 class="uppercase font-semibold mb-4 xl:flex justify-center md:justify-start">
                Any Question
              </h6>
              <Link to="/">
                <Buttom>Contact Us</Buttom>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
