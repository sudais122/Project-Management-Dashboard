import React from "react";
import { useNavigate } from "react-router-dom";

export const RecntTasksheading = () => {
      const navigate = useNavigate()

    const navigatetask = ()=>{
        navigate("/Tasks")
    }
  return (
    <>
      <div className="flex items-center justify-between py-5">
        <p className="text-black font-semibold text-xl">Recent Tasks</p>
        <button
          onClick={navigatetask}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm text-blue-600 transition-colors duration-200 hover:bg-blue-50"
        >
          {" "}
          View All Tasks{" "}
        </button>
      </div>
    </>
  );
};
