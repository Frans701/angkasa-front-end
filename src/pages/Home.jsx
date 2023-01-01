import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authAction";

function Home({ token }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <section className="w-full relative h-[550px]">
        <img
          className="w-full object-cover xl:h-[430px] h-[300px]"
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
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
