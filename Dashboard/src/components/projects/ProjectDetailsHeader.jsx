import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const getStatusBadgeColor = (status) => {
  if (status === "In review") {
    return "bg-yellow-50 text-yellow-700";
  }

  if (status === "Completed") {
    return "bg-green-50 text-green-700";
  }

  if (status === "In progress") {
    return "bg-blue-50 text-blue-700";
  }

  return "bg-gray-50 text-gray-700";
};

const getStatusDotColor = (status) => {
  if (status === "In review") {
    return "bg-yellow-500";
  }

  if (status === "Completed") {
    return "bg-green-500";
  }

  if (status === "In progress") {
    return "bg-blue-500";
  }

  return "bg-gray-500";
};

const ProjectDetailsHeader = ({ project }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-start gap-5">
      {/* Back button */}
      <button
        type="button"
        onClick={handleBack}
        className="mt-1 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
      >
        <IoArrowBack className="text-xl" />
      </button>

      {/* Project Header */}
      <div className="flex flex-1 items-center p-2">
        <div className="flex w-full items-center justify-between gap-6">
          {/* Project information */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {project?.projectName}
            </h1>
          </div>

          {/* Status */}
          <span
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${getStatusBadgeColor(
              project?.status
            )}`}
          >
            <span
              className={`h-2 w-2 rounded-full ${getStatusDotColor(
                project?.status
              )}`}
            />

            {project?.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;