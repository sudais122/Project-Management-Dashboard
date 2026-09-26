
import React, { useEffect, useMemo, useState } from "react";

import Header from "../components/Tasks/Header";
import Table from "../components/Tasks/Table";
import { TasksSearch } from "../components/Tasks/Search";
import Filter from "../components/Tasks/Filter";

import { getAllTasks } from "../services/tasks";
import { getAllProjects } from "../services/projectapi";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks + projects
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [tasksData, projectsData] = await Promise.all([
          getAllTasks(),
          getAllProjects(),
        ]);

        console.log("TASKS FROM API:", tasksData);
        console.log("PROJECTS FROM API:", projectsData);

        if (!tasksData.success) {
          setError(tasksData.message || "Failed to fetch tasks");
          return;
        }

        if (!projectsData.success) {
          setError(projectsData.message || "Failed to fetch projects");
          return;
        }

        setTasks(tasksData.tasks || []);
        setProjects(projectsData.projects || []);
      } catch (error) {
        console.error("Fetch tasks/projects error:", error);
        setError("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Create project ID -> project name lookup
  const projectMap = useMemo(() => {
    const map = {};

    projects.forEach((item) => {
      map[item.id.toString()] = item.projectName;
    });

    return map;
  }, [projects]);

  // Add project name to every task
  const tasksWithProjectName = useMemo(() => {
    return tasks.map((task) => ({
      ...task,
      projectName:
        projectMap[task.project?.toString()] || "Unknown Project",
    }));
  }, [tasks, projectMap]);

  // Filtering
  const filteredTasks = tasksWithProjectName.filter((task) => {
    const taskName = task.taskName || "";

    const matchesSearch = taskName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesProject =
      project === "" ||
      task.project?.toString() === project.toString();

    const matchesPriority =
      priority === "" || task.priority === priority;

    const matchesStatus =
      status === "" || task.status === status;

    return (
      matchesSearch &&
      matchesProject &&
      matchesPriority &&
      matchesStatus
    );
  });

  const clearFilters = () => {
    setSearch("");
    setProject("");
    setPriority("");
    setStatus("");
  };

  return (
    <div className="space-y-6">
      <Header />

      {/* Search + Filters */}
      <div className="flex w-full flex-wrap items-center gap-3">
        <div className="min-w-60 flex-1">
          <TasksSearch
            search={search}
            setSearch={setSearch}
          />
        </div>

        <Filter
          project={project}
          setProject={setProject}
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
          clearFilters={clearFilters}
          projects={projects}
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="py-10 text-center">
          <p className="text-sm text-gray-500">
            Loading tasks...
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Tasks Table */}
      {!loading && !error && (
        <div className="w-full">
          {filteredTasks.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-gray-700">
                No tasks found
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <Table tasks={filteredTasks} />
          )}
        </div>
      )}
    </div>
  );
};
