import React from "react";
const variants = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  amber: "bg-amber-50 text-amber-600",
  violet: "bg-violet-50 text-violet-600",
};

const Statecard = ({ title, count, icon, change, variant = "blue" }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg ${variants[variant]}`}
        >
          {icon}
        </div>
      </div>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 tabular-nums">
        {count}
      </h2>

      {change && (
        <p className="mt-2 text-xs text-gray-500">
          <span className="font-semibold text-green-600">{change}</span>{" "}
          vs. last month
        </p>
      )}
    </div>
  );
};

export default Statecard;