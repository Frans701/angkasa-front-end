import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import angkasaLogo from "../assets/angkasaLogo.svg";
import Buttom from "./Buttom";
import { logout } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    redirect("/login")
  };

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
              <button
                className="border w-full my-2 py-2 bg-yellow-300 text-blue-600 font-bold"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
