import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import CreateProjectform from "./CreateProjectform";
import { FiPlus, FiX } from "react-icons/fi";

const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const pageName =
    location.pathname.split("/")[1]?.replace(/^\w/, (c) => c.toUpperCase()) ||
    "Dashboard";

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-5 pl-5">
        {/* Page Title */}
        <div className="text-2xl font-bold text-gray-900">{pageName}</div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="flex w-64 items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 transition duration-200 focus-within:border-blue-500">
            <IoSearch className="text-xl text-gray-500" />

            <input
              type="text"
              placeholder="Search project, task..."
              className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Notification */}
          <button
            type="button"
            className="relative cursor-pointer rounded-lg p-2 transition duration-200 hover:bg-gray-100"
          >
            <IoMdNotificationsOutline className="text-2xl text-gray-600" />

            <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-red-500" />
          </button>

          {/* Create Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-blue-600 transition duration-200 hover:bg-blue-700"
          >
            <FaPlus className="text-sm text-white" />
          </button>

          {/* User Profile */}
          <div className="flex cursor-pointer items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              RM
            </div>

            <h2 className="font-medium text-gray-800">Rahi Khan</h2>
          </div>
        </div>
      </header>

      {/* Create Project Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-5 flex h-9 w-9 cursor-pointer items-center justify-center"
            >
              <FiX className="text-xl" />
            </button>
            <CreateProjectform />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
