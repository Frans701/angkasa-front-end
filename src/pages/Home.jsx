import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authAction";
import { setToken } from "../redux/reducers/authReducer";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const URL =
    process.env.REACT_APP_SERVER_URL || "https://angkasa-api.km3ggwp.com/api";
  const ID =
    process.env.REACT_APP_GOOGLE_CLIENT_ID ||
    "401014098201-p74gpb0cm6ho8ofm1hcf5gmde79fqo45.apps.googleusercontent.com";

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      if (window.google) {
        /* global google */
        google?.accounts.id.initialize({
          client_id: ID,
          callback: googleHandler,
          cancel_on_tap_outside: false,
          prompt_parent_id: "g_id_onload",
        });

        google?.accounts.id.renderButton(
          document.getElementById("google-signin"),
          {
            theme: "outline",
            size: "large",
            width: 200,
          }
        );

        // document.cookie = `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        google?.accounts.id.prompt();
      }
    }
  }, []);

  const googleHandler = async (response) => {
    try {
      await axios
        .post(`${URL}/login/google/callback`, {
          credential: response.credential,
        })
        .then((result) => {
          if (result.data.data.token) {
            localStorage.setItem("token", result.data.data.token);
            localStorage.setItem("role", result.data.data.user.role);
            dispatch(setToken(result.data.data.token));
            dispatch(getMe());
          }
        });
    } catch (error) {
      // setErrors(error.response.data.errors);
    }
  };

  return (
    <>
      <Navbar />
      <section className="w-full xl:relative xl:h-[550px]">
        <div
          id="g_id_onload"
          data-prompt_parent_id="g_id_onload"
          data-cancel_on_tap_outside="false"
          className="absolute lg:right-[72px]"
        />
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
