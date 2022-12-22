import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import { Transition } from "@headlessui/react";
import "react-loading-skeleton/dist/skeleton.css";

const Cards = ({ fligts, loading }) => {
  const [test, setTest] = useState("");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ul>
        {fligts.map((post) => {
          const formattedDateFrom = new Date(post.date.raw).toLocaleDateString(
            {},
            { timeZone: "UTC", month: "short", day: "2-digit", year: "numeric" }
          );
          const fromDate = formattedDateFrom.split(" ");

          const formattedDateTo = new Date(post.date.raw).toLocaleDateString(
            {},
            { timeZone: "UTC", month: "short", day: "2-digit", year: "numeric" }
          );
          const toDate = formattedDateTo.split(" ");
          return (
            <li
              key={post.id}
              className="mb-[16px] flex flex-col items-start gap-[16px] px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white"
            >
              <div className="flex flex-col w-full gap-[24px]">
                <div>{post.airplane.airline.name}</div>
                <div className="flex xl:flex-row flex-col justify-between xl:items-center w-full items-start gap-[16px] xl:gap-0">
                  <div className="flex flex-row gap-[16px] xl:items-center">
                    <div className="">
                      <img
                        className="w-[80px] border p-[8px] rounded-lg"
                        src={post.airplane.airline.logo}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold text-xl">{post.std.hours}</h1>
                      <span className="text-lg">{post.fromAirport.iata}</span>
                    </div>
                    <div className="flex flex-row items-center w-[100px]">
                      <div className="flex flex-col items-center gap-[8px] w-full">
                        <span className="text-sm text-gray-300">
                          {post.estimated}
                        </span>
                        <span className="border-b-2 w-full"></span>
                        <span className="text-sm text-gray-300">Langsung</span>
                      </div>
                      <div>
                        <PaperAirplaneIcon className="h-6 w-6 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold text-xl">{post.sta.hours}</h1>
                      <span className="text-lg">{post.toAirport.iata}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-2xl font-bold text-blue-500">
                        {post.class.price.formatted}
                        <span className="text-base text-gray-300 font-medium">
                          /pax
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between xl:items-center xl:flex-row flex-col gap-[8px] xl:gap-0">
                  <div className="flex flex-row gap-[24px] items-center text-blue-500">
                    <button
                      onClick={() => {
                        if (test == post.id) {
                          setTest("");
                        } else {
                          setTest(post.id);
                        }
                      }}
                      type="button"
                      className="cursor-pointer"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      Detail Penerbangan
                    </button>
                  </div>
                  <Link to="/chart">
                    <Buttom color="yellow" width="w-full">
                      Pilih
                    </Buttom>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <Transition
                  show={post.id == test ? true : false}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {(ref) => (
                    <div className="w-full border-t-2 pt-[16px] flex-col flex">
                      <div className="flex flex-row gap-[40px]">
                        <div className="flex flex-col py-[16px]">
                          <span className="w-[80px] text-lg font-semibold">
                            <h1 className="font-bold text-xl">
                              {post.std.hours}
                            </h1>
                          </span>
                          <span className="text-gray-500">{`${fromDate[1]} ${fromDate[0]}`}</span>
                        </div>
                        <div className="border-l-2"></div>
                        <div className="flex flex-col py-[16px]">
                          <span className="font-semibold text-lg">
                            {" "}
                            {post.fromAirport.city} ({post.fromAirport.iata})
                          </span>
                          <span className="text-gray-500">
                            {post.fromAirport.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[40px]">
                        <span className="w-[80px] flex justify-center flex-col text-gray-500">
                          {post.estimated}
                        </span>
                        <div className="border-l-2"></div>
                        <div className="xl:border rounded-md xl:py-[16px] xl:px-[24px] flex-col flex gap-[16px] xl:bg-blue-500/5 xl:w-[50%]">
                          {" "}
                          <div className="flex xl:flex-row flex-col xl:items-center gap-[8px]">
                            <img
                              className="w-[40px] border p-[8px] rounded bg-white"
                              src={post.airplane.airline.logo}
                              alt=""
                            />
                            <span className="text-xs xl:text-base">
                              {post.airplane.airplaneCode} | {post.class.type}
                            </span>
                          </div>
                          {/* <div className="font-semibold xl:text-base text-xs">
                            Kabin: 7 kg, bagasi: 20 kg
                          </div> */}
                        </div>
                      </div>
                      <div className="flex flex-row gap-[40px]">
                        <div className="flex flex-col py-[16px]">
                          <span className="w-[80px] text-lg font-semibold">
                            {post.sta.hours}
                          </span>
                          <span className="text-gray-500">{`${toDate[1]} ${toDate[0]}`}</span>
                        </div>
                        <div className="border-l-2"></div>
                        <div className="flex flex-col py-[16px]">
                          <span className="font-semibold text-lg">
                            {" "}
                            {post.toAirport.city} ({post.toAirport.iata})
                          </span>
                          <span className="text-gray-500">
                            {post.toAirport.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cards;
