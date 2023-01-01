import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../components/axios";
import { useSelector } from "react-redux";

function DetailHistory() {
  let [searchParams, setSearchParams] = useSearchParams();
  let identifier = searchParams.get("identifier");
  const { token, user } = useSelector((state) => state.auth);

  const [history, setHistory] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://angkasa-api-staging.km3ggwp.com/api/orders/${identifier}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setHistory(response.data.data.order);
      };
      fetchData();
    } catch (error) {}
  }, []);

  console.log(history);

  return (
    <>
      <Navbar />
      <div className="p-[24px] xl:px-[80px]">
        <div className="flex flex-row justify-center p-[24px]">
          <div className="px-[32px] py-[40px] text-sm shadow-xl bg-white border flex flex-col gap-[24px] rounded-lg w-[500px]">
            <div className="flex flex-col gap-[16px] text-center">
              <h3 className="text-4xl font-bold">Thanks for your order!</h3>
              <p>Invoice # {history?.code}</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>Hello, {history?.orderContact.fullName}!</p>
              <p>
                You recently ordered flights from our website. Thank you for
                your order!.
              </p>
              <p>
                Here is summary of recently the order you have been made up. You
                can also view this invoice in our
                <span className="font-bold text-blue-500"> Email.</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold text-center">Order Summary</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Transaction Date</p>
                <p className="font-bold text-blue-500">
                  {history?.transactionDate.formatted}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Invoice</p>
                <p className="font-bold text-blue-500">{history?.code}</p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Customer</p>
                <p className="font-bold text-blue-500 ">
                  {history?.orderContact.email}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Payment Method</p>
                <p className="font-bold text-blue-500">
                  {history?.paymentMethod}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Status</p>
                <p className="font-bold text-green-500">{history?.status}</p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Contact</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Full Name</p>
                <p className="font-bold text-blue-500">
                  {history?.orderContact.fullName}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Email</p>
                <p className="font-bold text-blue-500">
                  {history?.orderContact.email}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Phone</p>
                <p className="font-bold text-blue-500">
                  {history?.orderContact.phone}
                </p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Flights</p>
            </div>
            {history?.orderDetails.map((detail) => {
              return (
                <>
                  {" "}
                  <div className="flex flex-col gap-[8px]">
                    <p>
                      {detail.airplane.airline.name} -{" "}
                      {detail.flight.flightNumber} -{" "}
                      {detail.flight.date.formatted}
                    </p>
                    <p>
                      {detail.flight.fromAirport.name} (
                      {detail.flight.fromAirport.iata}) [
                      {detail.flight.std.hours}]
                    </p>
                    <div className="flex justify-between">
                      <p>
                        {detail.flight.toAirport.name} (
                        {detail.flight.toAirport.iata}) [
                        {detail.flight.sta.hours}]
                      </p>
                    </div>
                    <p>ECONOMY</p>
                  </div>
                </>
              );
            })}

            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Passengers</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              {history?.passengers.map((passenger) => {
                return (
                  <>
                    {" "}
                    <p>- {passenger.fullName}</p>
                  </>
                );
              })}
            </div>

            <div className="border-dashed border-b-2 "></div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Total Paid</p>
                <p className="font-bold text-green-500">
                  {history?.total.formatted}
                </p>
              </div>
            </div>
            <p>
              If you any further question, just contact our customer service,
              we're always happy to help you out.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailHistory;
