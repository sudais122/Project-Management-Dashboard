import React, { useState } from "react";
import { FiX, FiChevronDown, FiFolder } from "react-icons/fi";

const TaskForm = ({ onClose }) => {
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("Todo");

  return (
    <div className="w-full max-w-xl rounded-xl bg-white shadow-xl">

      {/* Form */}
      <div className="space-y-4.5 px-6 py-5">
        {/* Task Name */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Task Name
          </label>

          <input
            type="text"
            defaultValue="Create homepage design"
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Description
          </label>

          <textarea
            placeholder="Add more detail about this task..."
            className="min-h-16 w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Project + Assignee */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Project */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-gray-700">
              Project
            </label>

            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 transition-colors hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <span className="flex size-4.5 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <FiFolder className="text-[11px]" />
                </span>

                <span className="text-[13px] text-gray-900">
                  Website Redesign
                </span>
              </span>

              <FiChevronDown className="text-sm text-gray-400" />
            </button>
          </div>

          {/* Assignee */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-gray-700">
              Assignee
            </label>

            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 transition-colors hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
                  A
                </span>

                <span className="text-[13px] text-gray-900">
                  Alex Morgan
                </span>
              </span>

              <FiChevronDown className="text-sm text-gray-400" />
            </button>
          </div>
        </div>

        {/* Priority */}
        <div className="space-y-2">
          <label className="block text-[13px] font-semibold text-gray-700">
            Priority
          </label>

          <div className="flex gap-2">
            {["Low", "Medium", "High"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPriority(item)}
                className={`flex-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                  priority === item
                    ? item === "High"
                      ? "border-[1.5px] border-red-600 bg-red-50 text-red-700"
                      : "border-[1.5px] border-blue-500 bg-blue-50 text-blue-700"
                    : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="block text-[13px] font-semibold text-gray-700">
            Status
          </label>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["Todo", "In Progress", "Review", "Completed"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                  status === item
                    ? "border-[1.5px] border-gray-400 bg-gray-100 text-gray-700"
                    : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Due Date */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Due Date
          </label>

          <input
            type="date"
            defaultValue="2026-09-24"
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-blue-600 px-4.5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;