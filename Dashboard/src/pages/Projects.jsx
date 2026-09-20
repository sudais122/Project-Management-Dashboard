import React, { useState } from "react";

import ProjectHeader from "../components/projects/ProjectHeader";
import { SearchProject } from "../components/projects/SearchProject";
import { ProjectCard } from "../components/projects/ProjectCard";

export const projects = [
  {
    id: 1,
    title: "Website Redesign",
    status: "In progress",
    description:
      "New marketing site and a shared component library for the design system.",
    progress: 68,
    totalTasks: 25,
    doneTasks: 17,
    dueDate: "Oct 1",
  },
  {
    id: 2,
    title: "Mobile App",
    status: "In review",
    description:
      "Building a responsive mobile application with authentication and user profiles.",
    progress: 45,
    totalTasks: 32,
    doneTasks: 14,
    dueDate: "Oct 15",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    status: "Completed",
    description:
      "Analytics dashboard with project metrics, team performance, and activity reports.",
    progress: 100,
    totalTasks: 20,
    doneTasks: 20,
    dueDate: "Sep 20",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    status: "In progress",
    description:
      "Developing an online shopping platform with product management, cart, and checkout.",
    progress: 72,
    totalTasks: 40,
    doneTasks: 29,
    dueDate: "Oct 22",
  },
  {
    id: 5,
    title: "CRM System",
    status: "In progress",
    description:
      "Customer relationship management system for tracking leads, customers, and sales activities.",
    progress: 55,
    totalTasks: 36,
    doneTasks: 20,
    dueDate: "Nov 5",
  },
  {
    id: 6,
    title: "Task Management App",
    status: "In review",
    description:
      "Team task management application with assignments, priorities, deadlines, and notifications.",
    progress: 82,
    totalTasks: 28,
    doneTasks: 23,
    dueDate: "Oct 10",
  },
];

export const Projects = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6 p-6">
      <ProjectHeader />

      <SearchProject search={search} setSearch={setSearch} />

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full py-10 text-center">
              <p className="text-lg font-semibold text-gray-700">
                No projects found
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Try searching with a different keyword.
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
      </div>
    </div>
  );
};
