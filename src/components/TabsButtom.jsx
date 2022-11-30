import React from "react";

function Buttom({ type = "submit", children, onPress, select }) {
  return (
    <button
      type={type}
      className={
        select
          ? "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 bg-white shadow"
          : "text-gray-500 hover:bg-white/[0.12] hover:text-white w-full"
      }
      onClick={onPress}
    >
      {children}
    </button>
  );
}

export default Buttom;
