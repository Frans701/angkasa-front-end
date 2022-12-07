import React from "react";
import { Fragment, useState } from "react";
import { Combobox, Transition, Menu } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import TabsButtom from "./TabsButtom";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const cabinClass = [
  { id: 1, name: "Economy" },
  { id: 2, name: "Premium Economy" },
  { id: 3, name: "Business" },
  { id: 4, name: "First" },
];

function SearchCard() {
  const [selected, setSelected] = useState(people[0]);
  const [selecteds, setSelecteds] = useState(cabinClass[0]);
  const [passenger, setPassenger] = useState(1);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState({ tab1: true, tab2: false });

  const dec = () => {
    if (passenger <= 1) {
      return 1;
    } else {
      setPassenger(passenger - 1);
    }
  };

  let [changeLFlight, setChangeLFlight] = useState("oneWay");
  const handleChange1 = (e) => {
    return (
      setChangeLFlight(e),
      setActive((prev) => {
        return {
          ...prev,
          tab1: true,
          tab2: false,
        };
      })
    );
  };

  console.log(active);

  const handleChange2 = (e) => {
    return (
      setChangeLFlight(e),
      setActive((prev) => {
        return {
          ...prev,
          tab2: true,
          tab1: false,
        };
      })
    );
  };

  console.log(changeLFlight);
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
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

  return (
    <>
<<<<<<< HEAD
      <div className=" bg-white p-[24px] xl:absolute bottom-[40px] gap-[16px] rounded-lg xl:w-[1000px] w-full">
        <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 xl:w-[40%] w-full">
          <TabsButtom
            select={active.tab1}
            onPress={() => handleChange1("oneWay")}
          >
=======
      <div className=" bg-white p-[24px] absolute bottom-[40px] gap-[16px] rounded-lg w-[1000px]">
        <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 w-[40%]">
          <TabsButtom select={active} onPress={() => handleChange("oneWay")}>
>>>>>>> fad889dc4fce30278e9de1ce55105d654245a0b4
            One Way
          </TabsButtom>
          <TabsButtom
            select={active.tab2}
            onPress={() => handleChange2("return")}
          >
            Return
          </TabsButtom>
        </div>
        <div className="flex flex-col gap-[16px] items-end">
          <div className="flex items-end xl:flex-row flex-col justify-between mt-[16px] w-full gap-[16px]">
            <div className="w-full relative Z-20">
              <h6>From</h6>
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 Z-20">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
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
                                      active ? "text-white" : "text-teal-600"
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
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1 z-20">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
                      {filteredPeople.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={person.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
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
                                      active ? "text-white" : "text-teal-600"
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
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <input
                  className="w-full border-none py-2 px-3 text-sm leading-5 text-gray-900 focus:outline-none"
                  type="date"
                />
              </div>
            </div>
            {changeLFlight === "return" ? (
              <div className="w-full relative">
                <h6>Return</h6>
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <input
                    className="w-full border-none py-2 px-3 text-sm leading-5 text-gray-900 focus:outline-none"
                    type="date"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex xl:flex-row flex-col items-end gap-[16px] w-full">
            <div className="w-full relative">
              <h6>Cabin Class</h6>
              <Combobox value={selecteds} onChange={setSelecteds}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
                                  ? "bg-teal-600 text-white"
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
                                      active ? "text-white" : "text-teal-600"
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
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <div className="w-full border-none py-2 px-3 text-sm leading-5 text-gray-900 focus:outline-none flex flex-row justify-between">
                  <div
                    onClick={() => setPassenger(dec)}
                    className="cursor-pointer"
                  >
                    -
                  </div>
                  {passenger}
                  <div
                    onClick={() => setPassenger(passenger + 1)}
                    className="cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <Link to="/search" className="w-full">
              <Buttom width="w-full">Search</Buttom>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
