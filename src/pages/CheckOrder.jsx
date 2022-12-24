import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import OrderCards from "../components/OrderCards";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Checkourder({ token, setToken }) {
  const [ordersHistory, setOrdersHistory] = useState([]);

  console.log(token);

  useEffect(() => {
    const fetchAirports = async () => {
      const res = await axios.get(
        "https://angkasa-api-staging.km3ggwp.com/api/orders/history",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrdersHistory(res.data.data.orders);
    };
    fetchAirports();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">
          Displays the best 5 flights at the best prices.
        </p>
        <div className="flex flex-col gap-[16px]">
          <OrderCards ordersHistory={ordersHistory} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkourder;
