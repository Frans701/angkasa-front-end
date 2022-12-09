import React, { useState } from "react";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMsg, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col my-[8px]">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        className="px-[24px] py-[8px] border"
        focused={focused.toString()}
      />
      <span className="text-red-500 hidden">{errorMsg}</span>
    </div>
  );
}

export default FormInput;
