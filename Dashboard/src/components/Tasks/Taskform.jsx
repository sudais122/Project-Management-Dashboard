
import React, { useEffect, useState } from "react";

import { createTask } from "../../services/tasks";
import { getAllProjects } from "../../services/projectapi";

const TaskForm = ({
  onClose = () => {},
  onTaskCreated = () => {},
}) => {
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("Todo");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [assign, setAssign] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // Fetch all projects
  // ==============================
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoadingProjects(true);
        setError("");

        const data = await getAllProjects();

        console.log("PROJECTS:", data);

        if (data.success) {
          setProjects(data.projects || []);
        } else {
          setError(data.message || "Failed to load projects");
        }
      } catch (error) {
        console.error("Projects fetch error:", error);
        setError("Failed to load projects");
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  // ==============================
  // Load members when project changes
  // ==============================
  useEffect(() => {
    if (!project) {
      setMembers([]);
      setAssign("");
      return;
    }

    const selectedProject = projects.find(
      (item) => item.id?.toString() === project.toString()
    );

    console.log("SELECTED PROJECT:", selectedProject);

    if (selectedProject?.members) {
      setMembers(
        Array.isArray(selectedProject.members)
          ? selectedProject.members
          : []
      );
    } else {
      setMembers([]);
    }

    setAssign("");
  }, [project, projects]);

  // ==============================
  // Submit task
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!name.trim()) {
      setError("Task name is required");
      return;
    }

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    if (!project) {
      setError("Please select a project");
      return;
    }

    if (!assign) {
      setError("Please select an assignee");
      return;
    }

    if (!dueDate) {
      setError("Please select a due date");
      return;
    }

    try {
      setSubmitting(true);

      const taskData = {
        taskName: name.trim(),
        description: description.trim(),

        // Project ID
        project,

        // Member/assignee
        assign,

        priority,
        status,
        dueDate,
      };

      console.log("CREATING TASK:", taskData);

      const data = await createTask(taskData);

      console.log("CREATE TASK RESPONSE:", data);

      // API failed
      if (!data?.success) {
        setError(
          data?.message || "Failed to create task"
        );
        return;
      }

      // ==============================
      // SUCCESS
      // ==============================

      console.log("TASK CREATED:", data.task);

      // Tell parent about newly created task
      onTaskCreated(data.task);

      // Close form
      onClose();

    } catch (error) {
      console.error("Create task error:", error);

      setError(
        error?.message || "Failed to create task"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-xl bg-white shadow-xl"
    >
      {/* Form content */}
      <div className="space-y-4.5 px-6 py-5">

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Task Name */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Task Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Create homepage design"
            disabled={submitting}
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50"
          />
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add more detail about this task..."
            disabled={submitting}
            className="min-h-16 w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50"
          />
        </div>

        {/* Project + Assignee */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Project */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-gray-700">
              Project
            </label>

            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              disabled={loadingProjects || submitting}
              className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50"
            >
              <option value="">
                {loadingProjects
                  ? "Loading projects..."
                  : "Select project"}
              </option>

              {projects.map((item) => (
                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.projectName}
                </option>
              ))}
            </select>
          </div>

          {/* Assignee */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-gray-700">
              Assignee
            </label>

            <select
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              disabled={!project || submitting}
              className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50"
            >
              <option value="">
                {!project
                  ? "Select project first"
                  : "Select member"}
              </option>

              {members.map((member, index) => {
                const memberName =
                  typeof member === "string"
                    ? member
                    : member?.name || member?.email || "Unknown member";

                return (
                  <option
                    key={`${memberName}-${index}`}
                    value={memberName}
                  >
                    {memberName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Priority */}
        <div className="space-y-2">
          <label className="block text-[13px] font-semibold text-gray-700">
            Priority
          </label>

          <div className="flex gap-2">
            {["Low", "Medium", "High"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPriority(item)}
                disabled={submitting}
                className={`flex-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                  priority === item
                    ? item === "High"
                      ? "border-[1.5px] border-red-600 bg-red-50 text-red-700"
                      : "border-[1.5px] border-blue-500 bg-blue-50 text-blue-700"
                    : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="block text-[13px] font-semibold text-gray-700">
            Status
          </label>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              "Todo",
              "In Progress",
              "Review",
              "Completed",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                disabled={submitting}
                className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                  status === item
                    ? "border-[1.5px] border-gray-400 bg-gray-100 text-gray-700"
                    : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Due Date */}
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            disabled={submitting}
            className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">

        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          className="rounded-lg border border-gray-200 px-4 py-2.5 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer rounded-lg bg-blue-600 px-4.5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Creating..." : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
