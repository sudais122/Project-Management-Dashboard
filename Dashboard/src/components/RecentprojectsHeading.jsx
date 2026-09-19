import React from "react";
import { useNavigate } from "react-router-dom";

export const RecentprojectsHeading = () => {
  const navigate = useNavigate();

  const handleAllProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="flex items-center justify-between py-5">
      <p className="text-xl font-semibold text-black">
        Recent Projects
      </p>

      <button
        onClick={handleAllProjects}
        className="cursor-pointer rounded-lg px-3 py-2 text-sm text-blue-600 transition-colors duration-200 hover:bg-blue-50"
      >
        View All Projects
      </button>
    </div>
  );
};