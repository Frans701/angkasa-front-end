import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";

function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <img
          className="w-full object-cover h-[550px]"
          src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
        <div className="flex justify-center">
          <SearchCard />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;