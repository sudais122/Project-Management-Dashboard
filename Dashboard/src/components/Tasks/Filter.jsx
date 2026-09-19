import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Role Filter */}
      <select className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
        <option value="">All Roles</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
        <option value="qa">QA</option>
      </select>

      {/* Project Type Filter */}
      <select className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
        <option value="">All Project Types</option>
        <option value="web-development">Web Development</option>
        <option value="app-development">App Development</option>
        <option value="ui-ux">UI/UX Design</option>
        <option value="software">Software Development</option>
      </select>

      {/* Priority Filter */}
      <select className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {/* Clear Filters */}
      <button
        type="button"
        className="h-10 cursor-pointer rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;