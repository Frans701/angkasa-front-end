import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Chart from "./pages/Chart";
import Profile from "./pages/Profile";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Protected from "./components/Protected";
import Admin from "./pages/admin/Admin";
import Checkourder from "./pages/CheckOrder";
import Orders from "./pages/admin/Orders";
import ProtectedAdmin from "./components/ProtectedAdmin";
import ProtectedUsers from "./components/ProtectedUsers";

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

          <Route path ="/" element={<ProtectedUsers setToken={setToken} token={token}/>}>
              <Route
                path="/search"
                element={<Search />}/>
              <Route
                path="/chart"
                element={<Chart />}/>
              <Route
                path="/check-order"
                element={<Checkourder />}/>
              <Route 
                path="/profile"
                element ={<Profile/>}/>
            </Route>

            <Route path ="/" element={<ProtectedAdmin setToken={setToken} token={token}/>}>
              <Route path="/admin/orders" element={<Orders />} />
              <Route
                path="/search"
                element={<Search />}/>
            </Route>
          </Routes>
        </SkeletonTheme>
      </Provider>
    </>
  );
}
