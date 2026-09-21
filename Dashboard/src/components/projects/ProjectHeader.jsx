import CreateProject from "../CreateProject";
import SortDate from "./SortDate";

const ProjectHeader = ({ onSortChange }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Left side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and track all your projects
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <SortDate onChange={onSortChange} />
        <CreateProject />
      </div>
    </div>
  );
};

export default ProjectHeader;