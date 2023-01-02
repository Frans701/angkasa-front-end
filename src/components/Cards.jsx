import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import { Transition } from "@headlessui/react";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ fligts, loading, passenger }) => {
  const [test, setTest] = useState("");

  const redirect = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ul>
        {fligts.map((flight) => {
          const formattedDateFrom = new Date(
            flight.date.raw
          ).toLocaleDateString(
            {},
            { timeZone: "UTC", month: "short", day: "2-digit", year: "numeric" }
          );
          const fromDate = formattedDateFrom.split(" ");

          const formattedDateTo = new Date(flight.date.raw).toLocaleDateString(
            {},
            { timeZone: "UTC", month: "short", day: "2-digit", year: "numeric" }
          );
          const toDate = formattedDateTo.split(" ");
          return (
            <li
              key={flight.id}
              className="mb-[16px] flex flex-col items-start gap-[16px] md:px-[40px] px-[16px] py-[24px] rounded-lg drop-shadow-lg bg-white"
            >
              <div className="flex flex-col w-full gap-[24px]">
                <div className="flex flex-row items-center gap-[8px]">
                  <div className="md:hidden">
                    <img
                      className="md:w-[80px] w-[64px] border p-[8px] rounded-lg"
                      src={flight.airplane.airline.logo}
                      alt=""
                    />
                  </div>
                  {flight.airplane.airline.name}
                </div>
                <div className="flex md:flex-row flex-col justify-between md:items-center w-full items-start gap-[32px] md:gap-0">
                  <div className="flex flex-row gap-[16px] md:items-center w-full">
                    <div className="hidden md:block">
                      <img
                        className="w-[80px] border p-[8px] rounded-lg"
                        src={flight.airplane.airline.logo}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold md:text-xl text-base">
                        {flight.std.hours}
                      </h1>
                      <span className="md:text-lg text-sm">
                        {flight.fromAirport.iata}
                      </span>
                    </div>
                    <div className="flex flex-row items-center w-[100px]">
                      <div className="flex flex-col items-center gap-[8px] w-full">
                        <span className="md:text-sm text-xs text-gray-300">
                          {flight.estimated}
                        </span>
                        <span className="border-b-2 w-full"></span>
                        <span className="md:text-sm text-xs text-gray-300">
                          Directly
                        </span>
                      </div>
                      <div>
                        <PaperAirplaneIcon className="h-6 w-6 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold md:text-xl text-base">
                        {flight.sta.hours}
                      </h1>
                      <span className="md:text-lg text-sm">
                        {flight.toAirport.iata}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="md:text-2xl text-xl font-bold text-blue-500">
                        {flight.class.price.formatted}
                        <span className="text-base text-gray-300 font-medium">
                          /pax
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between md:items-center md:flex-row flex-col gap-[8px] md:gap-0">
                  <div className="flex flex-row gap-[24px] items-center text-blue-500">
                    <button
                      onClick={() => {
                        if (test == flight.id) {
                          setTest("");
                        } else {
                          setTest(flight.id);
                        }
                      }}
                      type="button"
                      className="cursor-pointer md:text-base text-sm"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      Detail Penerbangan
                    </button>
                  </div>
                  <Link to="/chart">
                    <Buttom
                      onPress={(e) => {
                        e.preventDefault();
                        redirect(
                          `/chart?passenger=${passenger}&flightId=${flight.id}&class=${flight.class.type}`
                        );
                      }}
                      color="yellow"
                      width="w-full"
                    >
                      Pilih
                    </Buttom>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <Transition
                  show={flight.id == test ? true : false}
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
                            <h1 className="font-bold md:text-xl text-base">
                              {flight.std.hours}
                            </h1>
                          </span>
                          <span className="text-gray-500">{`${fromDate[1]} ${fromDate[0]}`}</span>
                        </div>
                        <div className="border-l-2"></div>
                        <div className="flex flex-col py-[16px]">
                          <span className="font-semibold md:text-lg text-base">
                            {" "}
                            {flight.fromAirport.city} ({flight.fromAirport.iata}
                            )
                          </span>
                          <span className="text-gray-500 text-sm md:text-base">
                            {flight.fromAirport.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[40px]">
                        <span className="w-[80px] flex justify-center flex-col text-gray-500">
                          {flight.estimated}
                        </span>
                        <div className="border-l-2"></div>
                        <div className="md:border rounded-md md:py-[16px] md:px-[24px] flex-col flex gap-[16px] md:bg-blue-500/5 md:w-[50%]">
                          {" "}
                          <div className="md:flex md:flex-row flex-col md:items-center gap-[8px] hidden">
                            <img
                              className="w-[40px] border p-[8px] rounded bg-white"
                              src={flight.airplane.airline.logo}
                              alt=""
                            />
                            <span className="text-xs md:text-base">
                              {flight.flightNumber} | {flight.class.type}
                            </span>
                          </div>
                          {/* <div className="font-semibold md:text-base text-xs">
                            Kabin: 7 kg, bagasi: 20 kg
                          </div> */}
                        </div>
                      </div>
                      <div className="flex flex-row gap-[40px]">
                        <div className="flex flex-col py-[16px]">
                          <span className="w-[80px] md:text-lg text-base font-semibold">
                            {flight.sta.hours}
                          </span>
                          <span className="text-gray-500">{`${toDate[1]} ${toDate[0]}`}</span>
                        </div>
                        <div className="border-l-2"></div>
                        <div className="flex flex-col py-[16px]">
                          <span className="font-semibold md:text-lg text-base">
                            {" "}
                            {flight.toAirport.city} ({flight.toAirport.iata})
                          </span>
                          <span className="text-gray-500 text-sm md:text-base">
                            {flight.toAirport.name}
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
