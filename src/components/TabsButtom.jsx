import React from "react";

function Buttom({ type = "submit", children, onPress, select }) {
  return (
    <button
      type={type}
      className={select ? "text-blue-500" : "text-pink-500"}
      onClick={onPress}
    >
      {children}
    </button>
  );
}

export default Buttom;
