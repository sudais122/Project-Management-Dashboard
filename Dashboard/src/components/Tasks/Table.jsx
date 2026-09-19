import React from "react";

const PRIORITY_STYLES = {
  High: { dot: "bg-red-500", bg: "bg-red-100", text: "text-red-600" },
  Medium: { dot: "bg-yellow-500", bg: "bg-yellow-100", text: "text-yellow-700" },
  Low: { dot: "bg-green-500", bg: "bg-green-100", text: "text-green-600" },
};

const STATUS_STYLES = {
  "In progress": { dot: "bg-blue-500", bg: "bg-blue-100", text: "text-blue-700" },
  "In review": { dot: "bg-yellow-500", bg: "bg-yellow-100", text: "text-yellow-700" },
  Completed: { dot: "bg-green-500", bg: "bg-green-100", text: "text-green-700" },
};

const DEFAULT_STYLE = { dot: "bg-gray-400", bg: "bg-gray-100", text: "text-gray-600" };

const getPriorityStyle = (priority) => PRIORITY_STYLES[priority] || DEFAULT_STYLE;
const getStatusStyle = (status) => STATUS_STYLES[status] || DEFAULT_STYLE;

const RecentTasksTable = ({ tasks }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-left">
            <th className="w-12 px-4 py-3"></th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Task
            </th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Project
            </th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Assignee
            </th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Priority
            </th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-3 py-3 text-sm font-semibold text-gray-600">
              Due Date
            </th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => {
            const priorityStyle = getPriorityStyle(task.priority);
            const statusStyle = getStatusStyle(task.status);

            return (
              <tr
                key={task.task}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                {/* Checkbox */}
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>

                {/* Task */}
                <td className="px-3 py-4 text-sm font-medium text-gray-900">
                  {task.task}
                </td>

                {/* Project */}
                <td className="px-3 py-4 text-sm text-gray-600">
                  {task.project}
                </td>

                {/* Assignee */}
                <td className="px-3 py-4 text-sm text-gray-600">
                  {task.assignee}
                </td>

                {/* Priority */}
                <td className="px-3 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyle.bg}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${priorityStyle.dot}`}></span>
                    <span className={priorityStyle.text}>{task.priority}</span>
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle.bg}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot}`}></span>
                    <span className={statusStyle.text}>{task.status}</span>
                  </span>
                </td>

                {/* Due Date */}
                <td className="px-3 py-4 text-sm text-gray-600">
                  {task.dueDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTasksTable;