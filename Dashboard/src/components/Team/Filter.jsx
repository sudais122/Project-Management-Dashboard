import React from "react";

const Filter = ({ role, setRole }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 pr-5">
      {/* Role Filter */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        <option value="">All Roles</option>

        <option value="Backend Development">
          Backend Developer
        </option>

        <option value="Frontend Development">
          Frontend Developer
        </option>

        <option value="UI/UX Design">
          UI/UX Designer
        </option>

        <option value="Software Development">
          Software Developer
        </option>

        <option value="Product Development">
          Product Manager
        </option>
      </select>
    </div>
  );
};

export default Filter;