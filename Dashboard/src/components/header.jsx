import React from "react";

import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const pageName = location.pathname
    .replace("/", "")
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <header className="bg-white border-b border-gray-200 pl-5 px-10 w-full h-20 flex items-center justify-between">
      {/* Page Title */}
      <div className="font-bold text-2xl text-gray-900">
        {pageName || "Dashboard"}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-64 focus-within:border-blue-500 transition duration-200">
          <IoSearch className="text-xl text-gray-500" />

          <input
            type="text"
            placeholder="Search project, task..."
            className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer">
          <IoMdNotificationsOutline className="text-2xl text-gray-600" />

          {/* Notification dot */}
          <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Create Button */}
        <button className="size-10 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">
          <FaPlus className="text-white text-sm" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Avatar */}
          <div className="size-10 rounded-full text-white flex justify-center items-center bg-blue-600 font-semibold">
            RM
          </div>

          {/* Name */}
          <h2 className="font-medium text-gray-800">Rahi Khan</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
