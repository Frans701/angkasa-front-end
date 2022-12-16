import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Combobox, Transition, Menu } from "@headlessui/react";
import axios from "axios";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import TabsButtom from "./TabsButtom";

const cabinClass = [
  { id: 1, name: "Economy" },
  { id: 2, name: "Premium Economy" },
  { id: 3, name: "Business" },
  { id: 4, name: "First" },
];

function SearchCard() {
  const [selectedFrom, setSelectedFrom] = useState({});
  const [selectedTo, setSelectedTo] = useState({});
  const [selecteds, setSelecteds] = useState(cabinClass[0]);
  const [passenger, setPassenger] = useState(1);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState({ tab1: true, tab2: false });

  const [airports, setAirpots] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://angkasa-api-staging.km3ggwp.com/api/airports/popular"
      );
      setAirpots(res.data.data.airports);
      setSelectedFrom(res.data.data.airports[0]);
      setSelectedTo(res.data.data.airports[0]);
    };

    fetchPosts();
  }, []);

  const dec = () => {
    if (passenger <= 1) {
      setPassenger(1);
    } else {
      setPassenger(passenger - 1);
    }
  };

  const add = () => {
    if (passenger >= 5) {
      setPassenger(5);
    } else {
      setPassenger(passenger + 1);
    }
  };

  let [changeLFlight, setChangeLFlight] = useState("oneWay");
  const handleChange = (e) => {
    setChangeLFlight(e);
  };

  // console.log(changeLFlight);
  let filteredAirports =
    query === ""
      ? airports
      : airports.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredCabinClass =
    query === ""
      ? cabinClass
      : cabinClass.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    setActive({
      tab1: changeLFlight === "oneWay",
      tab2: changeLFlight === "return",
    });
  }, [changeLFlight]);

  const handleSubmit = (e) => {
    // console.log(usernameRef);
    e.preventDefault();
  };

  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const data = await (
        await fetch(
          `https://angkasa-api-staging.km3ggwp.com/api/airports/search?airport=${query}`
        )
      ).json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (query !== "") {
      setTimeout(() => {
        if (filteredAirports.length === 0) {
          handleClick();
        }
      }, 1000);
    }
  }, [query]);

  console.log(data);

  return (
    <>
      <div className=" bg-white p-[24px] xl:absolute bottom-0 gap-[16px] rounded-lg xl:w-[1000px] w-full shadow-lg">
        <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 xl:w-[40%] w-full">
          <TabsButtom
            select={active.tab1}
            onPress={() => handleChange("oneWay")}
          >
            One Way
          </TabsButtom>
          <TabsButtom
            select={active.tab2}
            onPress={() => handleChange("return")}
          >
            Return
          </TabsButtom>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[16px] items-end"
        >
          <div className="flex items-end xl:flex-row flex-col justify-between mt-[16px] w-full gap-[24px]">
            <div className="w-full relative Z-20">
              <h6>From</h6>
              <Combobox value={selectedFrom} onChange={setSelectedFrom}>
                <div className="relative mt-1 Z-20">
                  <div className="">
                    <Combobox.Input
                      className="px-2 form-select appearance-none block w-full py-1.5 xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                      displayValue={(person) => person.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute z-20 inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredAirports.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          {data === null ? (
                            <p>Nothing found.</p>
                          ) : (
                            <>
                              {data.data.airports.map((airport) => {
                                return (
                                  <Combobox.Option
                                    key={airport.id}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-blue-600 text-white"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={airport}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {airport.name}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active
                                                ? "text-white"
                                                : "text-blue-600"
                                            }`}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Combobox.Option>
                                );
                              })}
                            </>
                          )}
                        </div>
                      ) : (
                        filteredAirports.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-blue-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div className="w-full relative z-20">
              <h6>To</h6>
              <Combobox value={selectedTo} onChange={setSelectedTo}>
                <div className="relative mt-1 z-20">
                  <div className="">
                    <Combobox.Input
                      className="px-2 form-select appearance-none block w-full py-1.5 xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                      displayValue={(person) => person.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute z-20 inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredAirports.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredAirports.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-blue-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div className="w-full relative">
              <h6>Departure</h6>
              <div className="">
                <input
                  className="px-2 form-select appearance-none block w-full py-1.5 xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                  type="date"
                />
              </div>
            </div>
            {changeLFlight === "return" ? (
              <div className="w-full relative">
                <h6>Return</h6>
                <div className="">
                  <input
                    className="px-2 form-select appearance-none block w-full py-1.5 xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                    type="date"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex xl:flex-row flex-col items-end gap-[24px] w-full">
            <div className="w-full relative">
              <h6>Cabin Class</h6>
              <Combobox value={selecteds} onChange={setSelecteds}>
                <div className="relative mt-1">
                  <div className="">
                    <Combobox.Input
                      className="px-2 form-select appearance-none block w-full py-1.5 xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                      displayValue={(cabinClass) => cabinClass.name}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredCabinClass.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredCabinClass.map((cabinClass) => (
                          <Combobox.Option
                            key={cabinClass.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={cabinClass}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {cabinClass.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-blue-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div className="w-full relative">
              <h6>Passenger</h6>
              <div className="py-2 px-3 form-select appearance-none block w-full xl:text-sm text-xs font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b-[2px] border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none">
                <div className="w-full border-none text-sm leading-5 text-gray-900 focus:outline-none flex flex-row justify-between">
                  <MinusIcon
                    onClick={dec}
                    className=" h-5 w-5 cursor-pointer"
                  />

                  {passenger}
                  <PlusIcon className="h-5 w-5 cursor-pointer" onClick={add} />
                </div>
              </div>
            </div>
            <Link to="/search" className="w-full">
              <Buttom width="w-full">Search</Buttom>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchCard;
