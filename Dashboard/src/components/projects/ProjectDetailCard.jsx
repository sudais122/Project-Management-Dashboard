import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "../../pages/Projects";

const getLabelColor = (name) => {
  if (name === "Todo") {
    return "bg-gray-100 text-gray-700";
  }

  if (name === "In Progress") {
    return "bg-blue-100 text-blue-700";
  }

  if (name === "Review") {
    return "bg-purple-100 text-purple-700";
  }

  if (name === "Complete") {
    return "bg-green-100 text-green-700";
  }

  return "bg-gray-100 text-gray-700";
};

const ProjectDetailCard = ({ name, count }) => {
    const { projectID } = useParams();

  const selectedProject = projects.find(
    (item) => item.id === Number(projectID)
  );
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p
        className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${getLabelColor(
          name
        )}`}
      >
        {name}
      </p>

      <h1 className="text-3xl font-bold text-gray-900">
        {count}
      </h1>
    </div>
  );
};

export default ProjectDetailCard;