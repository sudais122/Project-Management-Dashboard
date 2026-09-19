import React from "react";

import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center gap-5">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="mt-1 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
      >
        <IoArrowBack className="text-xl" />
      </button>

      {/* Project Header */}
      <div className="flex flex-1 items-center">
        <div className="flex w-full items-start justify-between gap-6">
          {/* Project information */}
          <div>
            <h1 className="text-2xl font-bold items-center tracking-tight text-gray-900">
              Website Redesign
            </h1>
          </div>

          {/* Status */}
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            In progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;