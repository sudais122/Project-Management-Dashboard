import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TaskForm from "./Taskform";
import { FiX } from "react-icons/fi";

const Create = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Add Task Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-blue-600 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
      >
        <FaPlus />
        <span>Add Task</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          {/* Modal Box */}
          <div className="w-full max-w-xl rounded-xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h2 className="text-[17px] font-extrabold text-gray-900">
                Create New Task
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex size-8 cursor-pointer items-center justify-center"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Task Form */}
            <TaskForm/>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;
