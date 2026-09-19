import React from "react";
import CreateProject from "../CreateProject";

const ProjectHeader = () => {
  return (
    <div className="flex items-center justify-between ">
      {/* Left side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and track all your projects
        </p>
      </div>

      {/* Right side */}
      <div>
        <CreateProject />
      </div>
    </div>
  );
};

export default ProjectHeader;
