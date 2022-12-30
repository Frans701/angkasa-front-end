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

  const [notif, setNotif] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://angkasa-api-staging.km3ggwp.com/api/orders/${identifier}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNotif(response);
      };
      fetchData();
    } catch (error) {}
  }, []);

  console.log(notif);

  return (
    <>
      <Navbar />
      <div className="p-[24px] xl:px-[80px]">
        <div className="flex flex-row justify-center p-[24px]">
          <div className="px-[32px] py-[40px] text-sm shadow-xl bg-white border flex flex-col gap-[24px] rounded-lg w-[500px]">
            <div className="flex flex-col gap-[16px] text-center">
              <h3 className="text-4xl font-bold">Thanks for your order!</h3>
              <p>Invoice #72FC00B9</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>Hello, frans wahyu!</p>
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
                <p className="font-bold text-blue-500">Dec 29, 2022 8:32 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Invoice</p>
                <p className="font-bold text-blue-500">72FC00B9</p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Customer</p>
                <p className="font-bold text-blue-500 ">
                  franswahyu7@gmail.com
                </p>
              </div>
              <div className="flex justify-between">
                <p>Payment Method</p>
                <p className="font-bold text-blue-500">Bank Indonesia (BI)</p>
              </div>
              <div className="flex justify-between">
                <p>Status</p>
                <p className="font-bold text-green-500">COMPLETED</p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Contact</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Full Name</p>
                <p className="font-bold text-blue-500">frans wahyu</p>
              </div>
              <div className="flex justify-between">
                <p>Email</p>
                <p className="font-bold text-blue-500">franswahyu7@gmail.com</p>
              </div>
              <div className="flex justify-between">
                <p>Phone</p>
                <p className="font-bold text-blue-500">0812919212</p>
              </div>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Flights</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>GARUDA INDONESIA - GA 421 - 2022-12-30</p>
              <p>Soekarno-Hatta International Airport (CGK) [08:40]</p>
              <div className="flex justify-between">
                <p>Ngurah Rai (Bali) International Airport (DPS) [11:35]</p>
                <p className="font-bold text-orange-500">Rp 7.372.600</p>
              </div>
              <p>ECONOMY</p>
              <p>
                1 x{" "}
                <span className="font-bold text-orange-500">Rp 7.372.600</span>
              </p>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div>
              <p className="text-xl font-bold text-center">Passengers</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>joko anwar</p>
            </div>
            <div className="border-dashed border-b-2 "></div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <p>Total Paid</p>
                <p className="font-bold text-green-500">Rp 7.372.600</p>
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
