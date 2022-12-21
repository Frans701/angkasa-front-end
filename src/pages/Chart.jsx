import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormChart from "../components/FormChart";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <FormChart />
      </div>
      <Footer />
    </>
  );
}

export default Chart;
