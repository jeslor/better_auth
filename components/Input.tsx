import React from "react";

type InputProps = {
  placeholder: string;
  type?: string;
};

const Input = ({ placeholder, type = "text" }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] capitalize">{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 border border-gray-300/20 rounded text-[13px] bg-transparent outline-none focus:border-blue-500 transition"
      />
    </div>
  );
};

export default Input;
