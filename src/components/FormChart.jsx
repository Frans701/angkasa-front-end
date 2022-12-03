import React from "react";
import { Link } from "react-router-dom";
import Buttom from "./Buttom";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

function FormChart() {
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-[16px] mt-[32px] items-start">
        <div className="w-full flex flex-col gap-[16px] items-end">
          <div className="flex flex-col items-start gap-[16px] px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white w-full">
            <h2 className="text-xl font-semibold">Detail Pemesan</h2>
            <div className="w-full">
              <label for="name" class="">
                Nama Lengkap
              </label>
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm mt-1">
                <input
                  type="text"
                  id="name"
                  class="w-full border-none py-2 px-3 text-sm leading-5 text-gray-900 focus:outline-none"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label for="address" class="">
                Address
              </label>
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm mt-1">
                <input
                  type="text"
                  id="address"
                  class="w-full border-none py-2 px-3 text-sm leading-5 text-gray-900 focus:outline-none"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
          </div>
          <Link to="/chart">
            <Buttom color="yellow">Lanjutkan Ke Pembayaran</Buttom>
          </Link>
        </div>
        <div className="flex flex-col items-start gap-[16px] xl:px-[40px] px-[24px] py-[24px] rounded-lg drop-shadow-lg bg-white xl:w-[800px] ">
          <h1 className="text-2xl font-semibold">Penerbangan</h1>

          <div>Super Air Jet</div>
          <div className="flex xl:flex-row flex-col justify-between xl:items-center w-full items-start gap-[16px] xl:gap-0 border-b-2 pb-[16px]">
            <div className="flex flex-row gap-[16px] xl:items-center">
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
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <h5 className="font-semibold xl:text-xl">Total Pembayaran</h5>
            <h5 className="font-semibold xl:text-2xl text-blue-500">
              IDR 1.303.550
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormChart;
