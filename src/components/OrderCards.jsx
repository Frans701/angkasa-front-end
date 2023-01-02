import React, { useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import Buttom from "./Buttom";
import "react-loading-skeleton/dist/skeleton.css";

const OrderCards = ({ ordersHistory }) => {
  const redirect = useNavigate();
  return (
    <>
      <ul>
        {ordersHistory.map((orderHistory) => {
          return (
            <li
              key={orderHistory.id}
              className="mb-[16px] flex flex-col items-start gap-[16px] md:px-[40px] px-[16px] py-[24px] rounded-lg drop-shadow-lg bg-white"
            >
              <div className="flex flex-col w-full gap-[24px]">
                <div className="flex md:flex-row flex-col-reverse justify-between md:items-center items-start gap-[8px]">
                  <div className="flex flex-col md:gap-[8px] gap-[16px]">
                    <div className="font-semibold md:text-lg text-sm text-blue-500">
                      Order ID: {orderHistory.code}
                    </div>
                    <div className="flex-row flex gap-[8px] items-center">
                      <img
                        className="w-[64px] border p-[8px] rounded-lg md:hidden"
                        src={orderHistory.orderDetails[0].airline.logo}
                        alt=""
                      />
                      <p className="font-semibold md:text-base text-sm">
                        {orderHistory.orderDetails[0].airline.name}
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      orderHistory.status === "PENDING"
                        ? `text-gray-700 font-semibold bg-gray-200 focus:ring-4 flex flex-col justify-center  rounded-lg text-sm px-[24px] py-2.5 focus:outline-none`
                        : `text-green-700 font-semibold bg-green-200 focus:ring-4 flex flex-col justify-center  rounded-lg text-sm px-[24px] py-2.5 focus:outline-none`
                    }
                  >
                    {orderHistory.status}
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col justify-between xl:items-center w-full items-start gap-[16px] xl:gap-0">
                  <div className="flex flex-row gap-[16px] md:items-center w-full">
                    <div className="hidden md:block">
                      <img
                        className="w-[80px] border p-[8px] rounded-lg"
                        src={orderHistory.orderDetails[0].airline.logo}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold md:text-xl text-base">
                        {orderHistory.orderDetails[0].std}
                      </h1>
                      <span className="md:text-lg text-sm">
                        {orderHistory.orderDetails[0].fromAirportIata}
                      </span>
                    </div>
                    <div className="flex flex-row items-center w-[100px]">
                      <div className="flex flex-col items-center gap-[8px] w-full">
                        <span className="text-sm text-gray-300">
                          {orderHistory.orderDetails[0].estimated}
                        </span>
                        <span className="border-b-2 w-full"></span>
                        <span className="text-sm text-gray-300">Directly</span>
                      </div>
                      <div>
                        <PaperAirplaneIcon className="h-6 w-6 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start">
                      <h1 className="font-bold md:text-xl text-base">
                        {orderHistory.orderDetails[0].sta}
                      </h1>
                      <span className="md:text-lg text-sm">
                        {orderHistory.orderDetails[0].toAirportIata}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-2xl font-bold text-blue-500">
                        {orderHistory.total.formatted}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full flex xl:items-center xl:flex-row flex-col gap-[8px] xl:gap-0 justify-end">
                  <Link to="/check-order/detail">
                    <Buttom
                      onPress={(e) => {
                        e.preventDefault();
                        redirect(
                          `/check-order/detail?identifier=${orderHistory.identifier}`
                        );
                      }}
                      color="yellow"
                      width="w-full"
                    >
                      Details
                    </Buttom>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default OrderCards;
