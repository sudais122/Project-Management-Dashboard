import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const SortDate = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
      >
        Sort by Date
        <FiChevronDown
          className={`text-lg transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
          <button className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
            Newest First
          </button>

          <button className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
            Oldest First
          </button>
        </div>
      )}
    </div>
  );
};

export default SortDate;