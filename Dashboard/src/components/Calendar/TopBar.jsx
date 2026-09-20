import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];


const TopBar = ({ viewDate, onToday, onPrevMonth, onNextMonth }) => {
  return (
    <div className="flex items-center gap-2 px-5">
      {/* Today */}
      <button
        type="button"
        onClick={onToday}
        className="h-10 cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        Today
      </button>

      {/* Previous */}
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white">
        <button
          type="button"
          onClick={onPrevMonth}
          aria-label="Previous month"
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <IoIosArrowBack className="text-xl" />
        </button>
      </div>

      {/* Next */}
      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white">
        <button
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>

      <p className="text-xl font-bold tracking-tight text-gray-900">
        {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
      </p>
    </div>
  );
};

export default TopBar;