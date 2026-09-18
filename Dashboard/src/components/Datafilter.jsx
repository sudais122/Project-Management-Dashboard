
import React from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";

export const Datafilter = () => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-600 hover:bg-gray-50 transition duration-200 cursor-pointer"
    >
      <HiBars3CenterLeft className="text-lg" />
      <span>This Month</span>
    </button>
  );
};
