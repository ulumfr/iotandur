import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TextInputComponent = ({
  htmlFor,
  label,
  type,
  placeholder,
  name,
  id,
  passwordInput = false,
  value = "",
  onChange = () => {},
}) => {
  const [openEye, setOpenEye] = useState(false);
  const togglePassword = () => {
    setOpenEye(!openEye);
  };
  const inputType = passwordInput ? (openEye ? "text" : "password") : type;
  const eyeIcon = passwordInput ? (
    <div className="absolute top-11 right-5 text-xl cursor-pointer">
      {openEye ? (
        <AiOutlineEye onClick={togglePassword} />
      ) : (
        <AiOutlineEyeInvisible onClick={togglePassword} />
      )}
    </div>
  ) : null;

  return (
    <div
      className={`mb-[11px] relative ${passwordInput ? "password-input" : ""}`}
    >
      <label
        htmlFor={htmlFor}
        className="text-[14px] font-medium text-textLabel"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          rows={7}
          className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-ijoTua shadow-sm"
        />
      ) : (
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          autoComplete={passwordInput ? "current-password" : "off"}
          className={`w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-ijoTua shadow-sm`}
        />
      )}
      {eyeIcon}
    </div>
  );
};

export default TextInputComponent;
