import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import CreateProjectform from "./CreateProjectform";

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  const handleProjectCreated = () => {
    setIsOpen(false);
    setToast("Project created successfully");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };
  return (
    <>
      {/* Create Project Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        <FiPlus className="text-lg" />
        Create Project
      </button>

      {/* Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-5 flex h-9 w-9 cursor-pointer items-center justify-center bg-white text-gray-500 transition-colors"
            >
              <FiX className="text-xl" />
            </button>

            <CreateProjectform onClose={handleProjectCreated} />
          </div>
        </div>
      )}
      {toast && (
        <div className="fixed right-5 top-5 z-[100] flex items-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg">
          <IoCheckmarkCircleSharp className="text-xl" />
          <span>{toast}</span>
        </div>
      )}
    </>
  );
};

export default CreateProject;
