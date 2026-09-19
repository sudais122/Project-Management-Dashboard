import React from "react";

import Header from "../components/Tasks/Header";
import Table from "../components/Tasks/Table"
import { TasksSearch } from "../components/Tasks/Search";
import Filter from "../components/Tasks/Filter";

const tasks = [
  {
    task: "Fix checkout validation errors",
    project: "Website Redesign",
    assignee: "Ayesha Khan",
    priority: "High",
    status: "In progress",
    dueDate: "Sep 25",
  },
  {
    task: "Update landing page design",
    project: "Marketing Website",
    assignee: "Ali Ahmed",
    priority: "Medium",
    status: "In review",
    dueDate: "Sep 28",
  },
  {
    task: "Fix mobile navigation",
    project: "Mobile App",
    assignee: "Sara Malik",
    priority: "Low",
    status: "Completed",
    dueDate: "Sep 22",
  },
  {
    task: "Implement user authentication",
    project: "CRM System",
    assignee: "Hamza Khan",
    priority: "High",
    status: "In progress",
    dueDate: "Oct 2",
  },
  {
    task: "Create analytics dashboard",
    project: "Dashboard Analytics",
    assignee: "Fatima Noor",
    priority: "Medium",
    status: "Todo",
    dueDate: "Oct 5",
  },
];

export const Tasks = () => {
  return (
    <div className="space-y-6">
      <Header />

      {/* Search + Filters */}
      <div className="flex w-full flex-wrap items-center gap-3">
        <div className="min-w-60 flex-1">
          <TasksSearch />
        </div>

        <Filter />
      </div>

      {/* Tasks Table */}
      <div className="w-full">
        <Table tasks={tasks} />
      </div>
    </div>
  );
};