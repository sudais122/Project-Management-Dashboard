import { SlCalender } from "react-icons/sl";
import { PiCheckSquareBold } from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { deleteProject } from "../../services/projectapi";

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

const getCompletionColor = (percentage) => {
  if (percentage >= 80) {
    return "bg-green-500";
  }

  if (percentage >= 50) {
    return "bg-yellow-500";
  }

  return "bg-red-500";
};

export const ProjectCard = ({
  id,
  projectName,
  status,
  description,
  progress,
  endDate,
  totalTasks,
  doneTasks,
  onDelete,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress ?? 0));

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = await deleteProject(id);

    if (data.success) {
      console.log("Project deleted successfully");

      onDelete(id);
    } else {
      console.log("Delete failed:", data.message);
    }
  };

  return (
    <NavLink to={`/Projects/${id}`}>
      <div className="flex-1 cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md">
        {/* Title + Status + Delete */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-gray-900">{projectName}</h3>

          <div className="flex items-center gap-2">
            {/* Delete Button */}
            <button
              type="button"
              onClick={handleDelete}
              title="Delete project"
              className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            >
              <FiTrash2 className="text-sm" />
            </button>
            {/* Status */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${getStatusBadgeColor(
                status,
              )}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${getStatusDotColor(
                  status,
                )}`}
              ></span>

              {status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 text-[12px] text-gray-500">{description}</p>

        {/* Progress */}
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-gray-400">Progress</span>

            <span className="font-medium text-gray-600">
              {clampedProgress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full rounded-full bg-gray-100">
            <div
              className={`h-2 rounded-full ${getCompletionColor(
                clampedProgress,
              )}`}
              style={{ width: `${clampedProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Tasks + Due Date */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <PiCheckSquareBold />
            {doneTasks ?? 0}/{totalTasks ?? 0} tasks
          </span>

          <span className="flex items-center gap-1.5">
            <SlCalender />
            Due {endDate}
          </span>
        </div>
      </div>
    </NavLink>
  );
};
