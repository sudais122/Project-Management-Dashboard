import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import AddEvent from "./AddEvent";

const NewEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* New Event Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-blue-600 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
      >
        <FaPlus />
        <span>New Event</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-[560px] rounded-[14px] bg-white ">
            
            {/* Modal Header */}
<div className="flex items-center justify-between px-6 py-[22px]">
  <h2 className="text-[17px] font-extrabold text-gray-900">
    New Event
  </h2>

  <button
    type="button"
    onClick={() => setIsOpen(false)}
    aria-label="Close"
    className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
  >
    <FiX className="text-lg" />
  </button>
</div>

            {/* Form */}
            <AddEvent />

          </div>
        </div>
      )}
    </>
  );
};

export default NewEvent;