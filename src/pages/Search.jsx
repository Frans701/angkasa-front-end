import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Search() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-[24px]">
        <p className="mt-[32px] mb-[16px]">
          Menampilkan 49 penerbangan terbaik dengan harga terbaik.
        </p>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Search;
