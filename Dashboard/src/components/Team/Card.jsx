import React from "react";

const Card = ({
  name,
  email,
  role,
  assignedTasks,
  activeProjects,
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Member Info */}
      <div className="flex items-start gap-4">
        {/* Profile Initials */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {initials}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {email}
          </p>

          {/* Role Badge */}
          <span className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {role}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
        <div>
          <p className="text-2xl font-bold text-gray-900">
            {assignedTasks}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Total Assigned
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-900">
            {activeProjects}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Active Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;