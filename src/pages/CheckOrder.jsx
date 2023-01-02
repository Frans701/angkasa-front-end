import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderCards from "../components/OrderCards";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Checkourder() {
  const { token } = useSelector((state) => state.auth);
  const [ordersHistory, setOrdersHistory] = useState([]);
  const URL =
    process.env.REACT_APP_SERVER_URL ||
    "https://angkasa-api-staging.km3ggwp.com/api";
  useEffect(() => {
    const fetchAirports = async () => {
      const res = await axios.get(`${URL}/orders/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrdersHistory(res.data.data.orders);
    };
    fetchAirports();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">Displays the history transaction.</p>
        <div className="flex flex-col gap-[16px]">
          <OrderCards ordersHistory={ordersHistory} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkourder;
