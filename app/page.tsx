import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1
        className="text-[50px] font-bold 
         bg-gradient-to-r from-gray-400 via-white to-gray-500 bg-clip-text text-transparent
      "
      >
        Welcome to Better auth
      </h1>
      <p className="text-gray-400">The future of authentication is here.</p>
    </div>
  );
};

export default page;
