import React, { useEffect, useState } from "react";

import { WelcomeMessage } from "../components/welcomeMessage";
import { Datafilter } from "../components/Datafilter";
import CreateProject from "../components/CreateProject";
import Statecard from "../components/Statecard";
import { CiFolderOn } from "react-icons/ci";
import { IoMdTime, IoMdCheckboxOutline } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { RecentprojectsHeading } from "../components/RecentprojectsHeading";
import { ProjectStateCard } from "../components/ProjectStateCard";
import { RecntTasksheading } from "../components/RecntTasksheading";
import RecentTasksTable from "../components/RecentTasksTable";

import { getAllProjects } from "../services/projectapi";
import { getAllTasks } from "../services/tasks";


const getId = (obj) => obj?.id ?? obj?._id ?? "";

const getTaskProjectId = (task) => {
  const ref = task?.project ?? task?.projectId ?? task?.project_id;
  if (!ref) return "";
  return typeof ref === "object" ? getId(ref) : ref;
};

const formatDate = (value) => {
  if (!value) return "No due date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No due date";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const Main = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch projects and tasks
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError("");

        const [projectsResponse, tasksResponse] = await Promise.all([
          getAllProjects(),
          getAllTasks(),
        ]);

        if (projectsResponse?.success) {
          setProjects(projectsResponse.projects || []);
        } else {
          console.error(
            "Projects error:",
            projectsResponse?.message || "Failed to fetch projects"
          );
        }

        if (tasksResponse?.success) {
          setTasks(tasksResponse.tasks || []);
        } else {
          console.error(
            "Tasks error:",
            tasksResponse?.message || "Failed to fetch tasks"
          );
        }

        if (!projectsResponse?.success && !tasksResponse?.success) {
          setError("Failed to load dashboard data");
        }
      } catch (err) {
        console.error("Dashboard data error:", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Project statistics
  const totalProjects = projects.length;

  const activeProjects = projects.filter((project) => {
    const status = project.status?.toLowerCase();
    return status === "in progress" || status === "in review";
  }).length;

  // Task statistics
  const completedTasks = tasks.filter(
    (task) => task.status?.toLowerCase() === "completed"
  ).length;

  // Team members
  const teamMembers = new Set();

  projects.forEach((project) => {
    if (Array.isArray(project.members)) {
      project.members.forEach((member) => {
        const memberName =
          typeof member === "string" ? member : member?.name || member?.email;

        if (memberName) {
          teamMembers.add(memberName);
        }
      });
    }
  });

  tasks.forEach((task) => {
    if (task.assign) {
      teamMembers.add(task.assign);
    }

    if (task.assignee) {
      teamMembers.add(task.assignee);
    }
  });

  const totalTeamMembers = teamMembers.size;

  // Dashboard stats
  const stats = [
    {
      title: "Total Projects",
      count: totalProjects,
      change: "",
      variant: "blue",
      icon: <CiFolderOn />,
    },
    {
      title: "Active Projects",
      count: activeProjects,
      change: "",
      variant: "amber",
      icon: <IoMdTime />,
    },
    {
      title: "Completed Tasks",
      count: completedTasks,
      change: "",
      variant: "green",
      icon: <IoMdCheckboxOutline />,
    },
    {
      title: "Team Members",
      count: totalTeamMembers,
      change: "",
      variant: "violet",
      icon: <IoPeopleSharp />,
    },
  ];

  // Convert API projects to card data
  const projectCards = projects.slice(0, 3).map((project) => {
    const projectId = getId(project);

    const projectTasks = tasks.filter(
      (task) => getTaskProjectId(task) === projectId
    );

    const totalProjectTasks = projectTasks.length;

    const completedProjectTasks = projectTasks.filter(
      (task) => task.status?.toLowerCase() === "completed"
    ).length;

    return {
      id: projectId,
      title: project.projectName || project.title || "Untitled Project",
      status: project.status || "Todo",
      description: project.description || "",
      taskCount: `${completedProjectTasks}/${totalProjectTasks}`,
      dueDate: formatDate(project.dueDate || project.deadline || project.endDate),
    };
  });

  // Convert API tasks to table data
  const recentTasks = tasks.slice(0, 5).map((task) => {
    const taskProjectId = getTaskProjectId(task);
    const project = projects.find((item) => getId(item) === taskProjectId);

    return {
      id: getId(task),
      task: task.taskName || task.task || "Untitled Task",
      project:
        project?.projectName || project?.title || taskProjectId || "Unknown Project",
      assignee: task.assign || task.assignee || "Unassigned",
      priority: task.priority || "Low",
      status: task.status || "Todo",
      dueDate: formatDate(task.dueDate || task.deadline || task.endDate),
    };
  });

  const showContent = !loading && !error;

  return (
    <div className="px-7 py-6">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <WelcomeMessage />

        <div className="flex items-center gap-3">
          <Datafilter />
          <CreateProject />
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500">
          Loading dashboard...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Statistics */}
      {showContent && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Statecard key={stat.title} {...stat} />
          ))}
        </div>
      )}

      {/* Recent Projects */}
      {showContent && (
        <>
          <RecentprojectsHeading />

          {projectCards.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-gray-700">
                No projects found
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Create a project to see it here.
              </p>
            </div>
          ) : (
            <div className="flex w-full flex-wrap items-stretch gap-8">
              {projectCards.map((project) => (
                <ProjectStateCard key={project.id} {...project} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Recent Tasks */}
      {showContent && (
        <>
          <RecntTasksheading />

          <div className="mt-4">
            {recentTasks.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-lg font-semibold text-gray-700">
                  No tasks found
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Create a task to see it here.
                </p>
              </div>
            ) : (
              <RecentTasksTable tasks={recentTasks} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;