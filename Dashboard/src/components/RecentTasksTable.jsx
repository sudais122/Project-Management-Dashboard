import React from "react";
import { useNavigate } from "react-router-dom";
import RecentTaska from "./RecentTaska";

const RecentTasksTable = ({ tasks }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-left">
            <th className="px-3 py-3 text-sm font-semibold text-gray-600">Task</th>
            <th className="px-2 py-2 text-sm font-semibold text-gray-600">Project</th>
            <th className="px-2 py-2 text-sm font-semibold text-gray-600">Assignee</th>
            <th className="px-2 py-2 text-sm font-semibold text-gray-600">Priority</th>
            <th className="px-2 py-2 text-sm font-semibold text-gray-600">Status</th>
            <th className="px-2 py-2 text-sm font-semibold text-gray-600">Due Date</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <RecentTaska key={task.task} {...task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTasksTable;