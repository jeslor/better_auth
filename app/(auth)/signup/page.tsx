import Input from "@/components/Input";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        action=""
        className="flex flex-col gap-4 w-full max-w-[400px] bg-white/5 px-10 rounded-xl shadow-lg py-20"
      >
        <h1 className="text-[30px] font-bold bg-gradient-to-r from-gray-400 via-white to-gray-500 bg-clip-text text-transparent text-center">
          Sign Up
        </h1>
        <div className="flex flex-col gap-4">
          <Input placeholder="username" type="text" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
