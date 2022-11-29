import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";

function Cards() {
  return (
    <>
      <div className="flex flex-col items-start gap-[32px] px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white">
        <div>Super Air Jet</div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-[16px] items-center">
            <div className="">
              <img
                className="w-[80px] border p-[8px] rounded-lg"
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsmenlarge1/string/2021/07/02/082df819-8a50-4c9d-a178-181258372b74-1625237794501-7572e19a7cdb12996c96b225c3a7efa9.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[8px] items-start">
              <h1 className="font-bold text-xl">04:45</h1>
              <span className="text-lg">CGK</span>
            </div>
            <div className="flex flex-row items-center w-[100px]">
              <div className="flex flex-col items-center gap-[8px] w-full">
                <span className="text-sm text-gray-300">1j 30m</span>
                <span className="border-b-2 w-full"></span>
                <span className="text-sm text-gray-300">Langsung</span>
              </div>
              <div>
                <PaperAirplaneIcon className="h-6 w-6 text-gray-300" />
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start">
              <h1 className="font-bold text-xl">06:15</h1>
              <span className="text-lg">SUB</span>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-bold text-blue-500">
                IDR 924.550
                <span className="text-base text-gray-300 font-medium">
                  /pax
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center flex-row">
          <div className="flex flex-row gap-[24px] items-center text-blue-500">
            <span className="cursor-pointer">Detail Penerbangan</span>
            <span className="cursor-pointer">Detail Harga</span>
            <span className="cursor-pointer">Kebijakan</span>
          </div>
          <Link to="/">
            <Buttom color="yellow">Pilih</Buttom>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
