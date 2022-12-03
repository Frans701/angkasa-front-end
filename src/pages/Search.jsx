import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Search() {
  return (
    <>
      <Navbar />
      <div className="px-[24px] xl:px-[80px]">
        <p className="mt-[32px] mb-[16px]">
          Menampilkan 49 penerbangan terbaik dengan harga terbaik.
        </p>
        <div className="flex flex-col gap-[16px]">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
