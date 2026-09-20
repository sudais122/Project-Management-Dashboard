import React, { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

const NewEvent = ({ onClose }) => {
  const [eventType, setEventType] = useState("Task Deadline");
  const [allDay, setAllDay] = useState(false);

  const eventTypes = ["Task Deadline", "Milestone", "Meeting"];

  return (
    <div className="w-full max-w-140rounded-[14px] bg-white border-b border-gray-300">
      {/* Form */}
      <div className="flex flex-col gap-[18px] p-6">
        {/* Event Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">
            Event Title
          </label>

          <input
            type="text"
            placeholder="e.g. Design review with stakeholders"
            className="rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Event Type */}
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-semibold text-gray-700">
            Event Type
          </label>

          <div className="flex gap-2">
            {eventTypes.map((type) => {
              const isSelected = eventType === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEventType(type)}
                  className={`flex-1 rounded-lg px-2 py-[9px] text-[12.5px] transition-colors ${
                    isSelected
                      ? "border-[1.5px] border-blue-600 bg-blue-50 font-bold text-blue-700"
                      : "border border-gray-200 bg-white font-semibold text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">
            Project
          </label>

          <button
            type="button"
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 transition-colors hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-[3px] border border-blue-200 bg-blue-50" />

              <span className="text-[13px] text-gray-900">
                Website Redesign
              </span>
            </span>

            <FiChevronDown className="text-sm text-gray-400" />
          </button>
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-gray-700">
              Date
            </label>

            <input
              type="date"
              defaultValue="2026-09-28"
              className="rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-gray-700">
              Time
            </label>

            <input
              type="time"
              defaultValue="10:00"
              className="rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-gray-700">
            Notes{" "}
            <span className="font-medium text-gray-400">(optional)</span>
          </label>

          <textarea
            placeholder="Add details for this event..."
            className="min-h-14 resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-[18px]">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-blue-600 px-[18px] py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default NewEvent;