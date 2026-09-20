import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import CreateProjectform from "./CreateProjectform";

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState(false);

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

            <CreateProjectform />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProject;