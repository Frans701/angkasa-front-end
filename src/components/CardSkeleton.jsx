import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Buttom from "./Buttom";
import { Transition } from "@headlessui/react";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="mb-[16px] flex flex-col items-start gap-[16px] px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white">
        <div className="flex flex-col w-full gap-[24px]">
          <div className="w-[120px]">
            <Skeleton />
          </div>
          <div className="flex xl:flex-row flex-col justify-between xl:items-center w-full items-start gap-[16px] xl:gap-0">
            <div className="flex flex-row gap-[16px] xl:items-center">
              <div className="w-[80px]">
                <Skeleton />
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h1 className="w-[48px] h-[28px]">
                  <Skeleton />
                </h1>
                <span className="w-[48px] h-[28px]">
                  <Skeleton />
                </span>
              </div>
              <div className="flex flex-row items-center w-[100px]">
                <div className="flex flex-col items-center gap-[8px] w-full">
                  <span className="w-[48px] h-[28px]">
                    <Skeleton />
                  </span>
                  <span className="w-[48px] h-[28px]">
                    <Skeleton />
                  </span>
                </div>
                <div>
                  <div className="h-6 w-6 ">
                    <Skeleton />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h1 className="w-[48px] h-[28px]">
                  <Skeleton />
                </h1>
                <span className="w-[48px] h-[28px]">
                  <Skeleton />
                </span>
              </div>
            </div>
            <div>
              <div>
                <h1 className="w-[120px] h-[28px]">
                  <Skeleton />
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between xl:items-center xl:flex-row flex-col gap-[8px] xl:gap-0">
            <div className="flex flex-row gap-[24px] items-center text-blue-500">
              <button
                //   onClick={() => {
                //     if (test == post.id) {
                //       setTest("");
                //     } else {
                //       setTest(post.id);
                //     }
                //   }}
                type="button"
                className="w-[48px] h-[28px]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <Skeleton />
              </button>
            </div>
            <Link to="/chart" className="w-[80px] h-[28px]">
              <Skeleton />
            </Link>
          </div>
        </div>
        <div className="w-full">
          {/* <Transition
        //   show={post.id == test ? true : false}
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
                  {" "}
                  11:15
                </span>
                <span className="text-gray-500">05 Dec </span>
              </div>
              <div className="border-l-2"></div>
              <div className="flex flex-col py-[16px]">
                <span className="font-semibold text-lg">
                  {" "}
                  Jakarta (CGK)
                </span>
                <span className="text-gray-500">
                  Soekarno Hatta International Airport
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-[40px]">
              <span className="w-[80px] flex justify-center flex-col text-gray-500">
                1h 50m
              </span>
              <div className="border-l-2"></div>
              <div className="xl:border rounded-md xl:py-[16px] xl:px-[24px] flex-col flex gap-[16px] xl:bg-blue-500/5 xl:w-[50%]">
                {" "}
                <div className="flex xl:flex-row flex-col xl:items-center gap-[8px] border-b pb-[16px]">
                  <img
                    className="w-[40px] border p-[8px] rounded bg-white"
                    src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2021/07/02/082df819-8a50-4c9d-a178-181258372b74-1625237794501-7572e19a7cdb12996c96b225c3a7efa9.png"
                    alt=""
                  />
                  <span className="text-xs xl:text-base">
                    IU-330 | ECONOMY
                  </span>
                </div>
                <div className="font-semibold xl:text-base text-xs">
                  Kabin: 7 kg, bagasi: 20 kg
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[40px]">
              <div className="flex flex-col py-[16px]">
                <span className="w-[80px] text-lg font-semibold">
                  {" "}
                  14:05
                </span>
                <span className="text-gray-500">05 Dec</span>
              </div>
              <div className="border-l-2"></div>
              <div className="flex flex-col py-[16px]">
                <span className="font-semibold text-lg">
                  {" "}
                  Singapore (SIN)
                </span>
                <span className="text-gray-500">Changi Intl</span>
              </div>
            </div>
          </div>
        )}
      </Transition> */}
          {/* <Transition
      show={isOpens}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="w-full border-t-2 pt-[16px] flex-col flex gap-[16px]">
          <div>
            <span className="text-lg font-medium">Tarif</span>
            <ul>
              <li className="flex flex-row justify-between text-gray-400">
                <span>Dewasa (x1)</span>
                <span>IDR 1.314.550</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-between pt-[16px] border-t-2">
            <h5 className="font-medium xl:text-xl">
              Total Pembayaran
            </h5>
            <h5 className="font-medium xl:text-xl text-blue-500">
              IDR 1.303.550
            </h5>
          </div>
        </div>
      )}
    </Transition> */}
        </div>
      </div>
    ));
}

export default CardSkeleton;
