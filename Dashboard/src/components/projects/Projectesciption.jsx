import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "../../pages/Projects";

const getCompletionColor = (percentage) => {
  if (percentage >= 80) {
    return "bg-green-500";
  }

  if (percentage >= 50) {
    return "bg-yellow-500";
  }

  return "bg-red-500";
};

const Projectesciption = () => {
  const { projectID } = useParams();

  const selectedProject = projects.find(
    (item) => item.id === Number(projectID)
  );

  const progress = selectedProject?.progress ?? 0;

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm sm:flex-row">
      {/* Description + Progress */}
      <div className="flex-[2] p-5">
        <h2 className="font-semibold text-gray-900">
          Description
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {selectedProject?.description}
        </p>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-gray-400">
              Overall
            </span>

            <span className="font-medium text-gray-600">
              {progress}%
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-gray-100">
            <div
              className={`h-2 rounded-full ${getCompletionColor(
                progress
              )}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-200 sm:mx-0 sm:my-5 sm:border-l sm:border-t-0" />

      {/* Metadata */}
      <div className="flex-1 p-5">
        <div className="flex flex-col gap-4">
          {/* Start date */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Start date
            </p>

            <p className="text-sm font-medium text-gray-900">
              14 Sep 2024
            </p>
          </div>

          {/* End date */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              End date
            </p>

            <p className="text-sm font-medium text-gray-900">
              {selectedProject?.sortDate}
            </p>
          </div>

          {/* Project manager */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Project manager
            </p>

            <p className="text-sm font-medium text-gray-900">
              Ali Khan
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectesciption;