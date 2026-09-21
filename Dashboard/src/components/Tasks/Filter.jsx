import React from "react";

const Filter = ({
  project,
  setProject,
  priority,
  setPriority,
  status,
  setStatus,
  clearFilters,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* Project Filter */}
      <select
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
      >
        <option value="">All Projects</option>
        <option value="Website Redesign">
          Website Redesign
        </option>
        <option value="Marketing Website">
          Marketing Website
        </option>
        <option value="Mobile App">
          Mobile App
        </option>
        <option value="CRM System">
          CRM System
        </option>
        <option value="Dashboard Analytics">
          Dashboard Analytics
        </option>
      </select>

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="h-10 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
      >
        <option value="">All Statuses</option>
        <option value="Todo">Todo</option>
        <option value="In progress">In progress</option>
        <option value="In review">In review</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Clear */}
      <button
        type="button"
        onClick={clearFilters}
        className="h-10 rounded-lg cursor-pointer border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;