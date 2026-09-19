import React from "react";

const variants = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  amber: "bg-amber-50 text-amber-600",
  violet: "bg-violet-50 text-violet-600",
};

const Statecard = ({ title, count, icon, change, variant = "blue" }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-2 sm:gap-3">
        <p className="min-w-0 truncate text-xs font-medium text-gray-500 sm:text-sm" title={title}>
          {title}
        </p>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base sm:h-10 sm:w-10 sm:text-lg ${variants[variant]}`}
        >
          {icon}
        </div>
      </div>

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 tabular-nums sm:text-3xl">
        {count}
      </h2>

      {change && (
        <p className="mt-2 flex flex-wrap items-baseline gap-x-1 text-xs text-gray-500">
          <span className="font-semibold text-green-600">{change}</span>
          <span>vs. last month</span>
        </p>
      )}
    </div>
  );
};

export default Statecard;