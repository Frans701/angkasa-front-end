import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import angkasaLogo from "../assets/angkasaLogo.svg";
import Buttom from "./Buttom";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const redirect = useNavigate();

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
              <p className="text-sm font-medium md:w-[50%] xl:w-[90%]">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="xl:justify-self-center">
              <h6 class="uppercase font-semibold mb-4 xl:flex justify-center md:justify-start">
                Navigation
              </h6>
              <div className="flex flex-col items-start gap-[14px]">
                <Link to="/" className="text-sm font-medium">
                  Home
                </Link>
                {user?.role === "USER" && (
                  <Link to="/check-order" className="text-sm font-medium">
                    History
                  </Link>
                )}
                {/* {token&&( */}
                {user?.role === "USER" && (
                  <Link to="/profile" className="text-sm font-medium">
                    Profile
                  </Link>
                )}
                {user?.role === "ADMIN" && (
                  <>
                    <Link to="/admin/orders" className="text-sm font-medium">
                      Transactions
                    </Link>
                  </>
                )}
                {!token && (
                  <>
                    <Link to="/login" className="text-sm font-medium">
                      Login
                    </Link>
                    <Link to="/register" className="text-sm font-medium">
                      Register
                    </Link>
                  </>
                )}
              </div>
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
