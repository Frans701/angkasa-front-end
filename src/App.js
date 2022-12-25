import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Chart from "./pages/Chart";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Protected from "./components/Protected";
import AdminPage from "./pages/AdminPage";
import Checkourder from "./pages/CheckOrder";
import Orders from "./pages/admin/Orders";

export default function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);

  return (
    <>
      <Provider store={store}>
        <SkeletonTheme baseColor="#F5F5F5" highlightColor="#ffffff">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/search"
              element={
                <Protected setToken={setToken} token={token}>
                  <Search />
                </Protected>
              }
            />
            <Route
              path="/chart"
              element={
                <Protected token={token} setToken={setToken}>
                  <Chart />
                </Protected>
              }
            />
            <Route
              path="/check-order"
              element={
                <Protected token={token} setToken={setToken}>
                  <Checkourder />
                </Protected>
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Routes>
        </SkeletonTheme>
      </Provider>
    </>
  );
}
