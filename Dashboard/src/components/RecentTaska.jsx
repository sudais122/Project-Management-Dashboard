import React from "react";

const getPriorityColor = (priority) => {
  if (priority === "High") return "bg-red-500";
  if (priority === "Medium") return "bg-yellow-500";
  if (priority === "Low") return "bg-green-500";
  return "bg-gray-400";
};

const getPriorityTextColor = (priority) => {
  if (priority === "High") return "text-red-600";
  if (priority === "Medium") return "text-yellow-700";
  if (priority === "Low") return "text-green-600";
  return "text-gray-600";
};

const getStatusDotColor = (status) => {
  if (status === "In progress") return "bg-blue-500";
  if (status === "In review") return "bg-yellow-500";
  if (status === "Completed") return "bg-green-500";
  return "bg-gray-400";
};

const getStatusBgColor = (status) => {
  if (status === "In progress") return "bg-blue-100";
  if (status === "In review") return "bg-yellow-100";
  if (status === "Completed") return "bg-green-100";
  return "bg-gray-100";
};

const getStatusTextColor = (status) => {
  if (status === "In progress") return "text-blue-700";
  if (status === "In review") return "text-yellow-700";
  if (status === "Completed") return "text-green-700";
  return "text-gray-600";
};

const RecentTaska = ({ task, project, assignee, priority, status, dueDate }) => {
  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50">
      <td className="px-5 py-4 text-sm font-medium text-gray-900">{task}</td>
      <td className="px-5 py-4 text-sm text-gray-600">{project}</td>
      <td className="px-5 py-4 text-sm text-gray-600">{assignee}</td>

      <td className="px-5 py-4">
        <span className={`inline-flex items-center gap-2 text-sm font-medium ${getPriorityTextColor(priority)}`}>
          <span className={`h-2 w-2 rounded-full ${getPriorityColor(priority)}`}></span>
          {priority}
        </span>
      </td>

      <td className="px-5 py-4">
        <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${getStatusBgColor(status)} ${getStatusTextColor(status)}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${getStatusDotColor(status)}`}></span>
          {status}
        </span>
      </td>

      <td className="px-5 py-4 text-sm text-gray-500">{dueDate}</td>
    </tr>
  );
};

export default RecentTaska;