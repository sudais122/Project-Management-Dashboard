import React from "react";

export const RecentActivity = ({ user, action, time }) => {
  return (
    <div className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
      {/* Activity dot */}
      <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />

      {/* Activity content */}
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-700">
          <span className="font-medium text-gray-900">{user}</span> {action}
        </p>

        <p className="mt-1 text-xs text-gray-400">{time}</p>
      </div>
    </div>
  );
};