import React, { useState } from "react";
import { FiX, FiChevronDown, FiSend } from "react-icons/fi";

const Invite = ({ onClose }) => {
  const [emails, setEmails] = useState(["nina@projecthub.io"]);
  const [emailInput, setEmailInput] = useState("");
  const [role, setRole] = useState("Frontend Developer");
  const [permission, setPermission] = useState("Member");

  const [projects, setProjects] = useState({
    "Website Redesign": true,
    "Mobile Application": true,
    "Marketing Campaign": false,
    "Customer Portal": false,
  });

  const addEmail = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const email = emailInput.trim().replace(",", "");

      if (email && !emails.includes(email)) {
        setEmails([...emails, email]);
        setEmailInput("");
      }
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  const toggleProject = (project) => {
    setProjects({
      ...projects,
      [project]: !projects[project],
    });
  };

  return (
    <div className="w-full max-w-140 rounded-[14px] bg-white shadow-xl">

      {/* Form */}
      <div className="space-y-4.5 p-6">
        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Email Address
          </label>

          <div className="flex min-h-11 flex-wrap items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:border-blue-500">
            {emails.map((email) => (
              <span
                key={email}
                className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700"
              >
                {email}

                <button
                  type="button"
                  onClick={() => removeEmail(email)}
                  className="cursor-pointer text-gray-400 hover:text-gray-700"
                >
                  <FiX className="text-[11px]" />
                </button>
              </span>
            ))}

            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={addEmail}
              placeholder="Add another email & press Enter"
              className="min-w-[160px] flex-1 border-none px-0 py-1 text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          <p className="text-xs text-gray-400">
            Separate multiple addresses with a comma or Enter.
          </p>
        </div>

        {/* Role */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Role
          </label>

          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>UI/UX Designer</option>
              <option>Project Manager</option>
              <option>QA Engineer</option>
            </select>

            <FiChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
          </div>
        </div>

        {/* Project Access */}
        <div className="space-y-2.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Project Access
          </label>

          <div className="space-y-2.5 rounded-lg border border-gray-200 px-3.5 py-3">
            {Object.keys(projects).map((project) => (
              <label
                key={project}
                className="flex cursor-pointer items-center gap-2.5 text-[13px] text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={projects[project]}
                  onChange={() => toggleProject(project)}
                  className="size-[15px] accent-blue-600"
                />

                {project}
              </label>
            ))}
          </div>
        </div>

        {/* Permission Level */}
        <div className="space-y-2">
          <label className="block text-[13px] font-semibold text-gray-700">
            Permission Level
          </label>

          <div className="flex gap-4">
            {["Member", "Admin"].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 text-[13px] text-gray-700"
              >
                <input
                  type="radio"
                  name="permission"
                  value={item}
                  checked={permission === item}
                  onChange={(e) => setPermission(e.target.value)}
                  className="size-[15px] accent-blue-600"
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Personal Message */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Personal Message{" "}
            <span className="font-medium text-gray-400">(optional)</span>
          </label>

          <textarea
            placeholder="Add a note to include in the invite email..."
            className="min-h-14 w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-[18px]">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-[18px] py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700"
        >
          <FiSend className="text-[13px]" />
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default Invite;