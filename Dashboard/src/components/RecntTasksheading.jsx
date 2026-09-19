import React from "react";

export const RecntTasksheading = () => {
  return (
    <>
      <div className="flex items-center justify-between py-5">
        <p className="text-black font-semibold text-xl">Recent Tasks</p>
        <a
          href="#"
          className="rounded-lg px-3 py-2 text-sm text-blue-600 transition-colors duration-200 hover:bg-blue-50"
        >
          {" "}
          View All Tasks{" "}
        </a>
      </div>
    </>
  );
};
