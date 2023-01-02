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
      <div className="mb-[16px] flex flex-col items-start gap-[16px] md:px-[40px] px-[16px] py-[24px] rounded-lg drop-shadow-lg bg-white">
        <div className="flex flex-col w-full gap-[24px]">
          <div className="w-[120px]">
            <Skeleton />
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-center w-full items-start gap-[16px] md:gap-0">
            <div className="flex flex-row gap-[16px] md:items-center">
              <div className="w-[80px] hidden md:block">
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
          <div className="w-full flex justify-between md:items-center md:flex-row flex-col gap-[8px] md:gap-0">
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
      </div>
    ));
}

export default CardSkeleton;
