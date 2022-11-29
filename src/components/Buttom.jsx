import React from "react";

function Buttom({ type = "submit", color, children }) {
  const variant = {
    blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-[24px] py-2.5 focus:outline-none focus:ring-blue-800",
    yellow:
      "bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 focus:outline-none focus:ring-yellow-400 px-[48px] text-blue-500",
  };

  const buttonColor = variant[color || "blue"];

  return (
    <button type={type} className={buttonColor}>
      {children}
    </button>
  );
}

export default Buttom;
