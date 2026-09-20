import React, { useState } from "react";

const CreateProjectform = ({ onClose }) => {
  const [status, setStatus] = useState("Planning");

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Form Header */}
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Create Project
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Create a new project and add the required details.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 p-5">
        {/* Project Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            placeholder="e.g. Website Redesign"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows="2"
            placeholder="What is this project about?"
            className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Project Manager */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Project Manager
          </label>
          <select
            defaultValue=""
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select project manager
            </option>
            <option value="ayesha">Ayesha Khan</option>
            <option value="ali">Ali Ahmed</option>
            <option value="sara">Sara Malik</option>
            <option value="hamza">Hamza Khan</option>
          </select>
        </div>

        {/* Project Members */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Project Members
          </label>

          <select
            multiple
            className="h-20 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="ayesha">Ayesha Khan</option>
            <option value="ali">Ali Ahmed</option>
            <option value="sara">Sara Malik</option>
            <option value="hamza">Hamza Khan</option>
            <option value="fatima">Fatima Noor</option>
          </select>

          <p className="mt-1 text-[11px] text-gray-400">
            Hold Ctrl/Cmd to select multiple members.
          </p>
        </div>

        {/* Project Status */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Project Status
          </label>

          <div className="flex gap-2">
            {["Planning", "In Progress", "On Hold"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  status === item
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-3">
        <button
          type="button"
          className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default CreateProjectform;