import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/login" element ={<Login/>}/>
        <Route path ="/register" element ={<Register/>}/>
      </Routes>
    </>
  )
}
