import React, { useState } from "react";

import Header from "../components/Tasks/Header";
import Table from "../components/Tasks/Table";
import { TasksSearch } from "../components/Tasks/Search";
import Filter from "../components/Tasks/Filter";

const tasks = [
  {
    id: 1,
    task: "Fix checkout validation errors",
    project: "Website Redesign",
    assignee: "Ayesha Khan",
    priority: "High",
    status: "In progress",
    dueDate: "Sep 25",
  },
  {
    id: 2,
    task: "Update landing page design",
    project: "Marketing Website",
    assignee: "Ali Ahmed",
    priority: "Medium",
    status: "In review",
    dueDate: "Sep 28",
  },
  {
    id: 3,
    task: "Fix mobile navigation",
    project: "Mobile App",
    assignee: "Sara Malik",
    priority: "Low",
    status: "Completed",
    dueDate: "Sep 22",
  },
  {
    id: 4,
    task: "Implement user authentication",
    project: "CRM System",
    assignee: "Hamza Khan",
    priority: "High",
    status: "In progress",
    dueDate: "Oct 2",
  },
  {
    id: 5,
    task: "Create analytics dashboard",
    project: "Dashboard Analytics",
    assignee: "Fatima Noor",
    priority: "Medium",
    status: "Todo",
    dueDate: "Oct 5",
  },
];

export const Tasks = () => {
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    `${task.task}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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

        <Filter />
      </div>

      {/* Tasks Table */}
      <div className="w-full">
        {filteredTasks.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-lg font-semibold text-gray-700">
              No tasks found
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          <Table tasks={filteredTasks} />
        )}
      </div>
    </div>
  );
};