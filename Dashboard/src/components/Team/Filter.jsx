import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 pr-5">
      {/* Role Filter */}
      <select
        className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        defaultValue=""
      >
        <option value="">All Roles</option>
        <option value="backend-Developer">Backend Developer</option>
        <option value="frontend-Developer">Frontend Developer</option>
        <option value="ui-ux">UI/UX Designer</option>
        <option value="Product-Manager">Product-Manager</option>
        <option value="QA-Enginner">QA Enginner</option>
        <option value="other">other</option>
      </select>

      {/* Status Filter */}
      <select
        className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        defaultValue=""
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="away">Away</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
};

export default Filter;