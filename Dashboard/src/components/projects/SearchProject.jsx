import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SortDate from "./SortDate";

export const SearchProject = ({search, setSearch}) => {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* Search */}
      <div className="relative w-full max-w-sm">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Sort */}
    </div>
  );
};