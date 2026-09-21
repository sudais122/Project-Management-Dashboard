import React, { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const OPTIONS = ["Newest First", "Oldest First"];

const SortDate = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(OPTIONS[0]);
  const containerRef = useRef(null);



  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
      >
        {selected}
        <FiChevronDown
          className={`text-lg transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
          {OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                option === selected
                  ? "font-medium text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDate;