import React from "react";

import ProjectDetailHeader from "../components/projects/ProjectDetailsHeader";
import ProjectDescription from "../components/projects/Projectesciption";
import ProjectDetailCard from "../components/projects/ProjectDetailCard";
import { RecentActivity } from "../components/projects/RecentActivity";

const taskStats = [
  {
    name: "Todo",
    count: 8,
  },
  {
    name: "In Progress",
    count: 5,
  },
  {
    name: "Review",
    count: 3,
  },
  {
    name: "Complete",
    count: 12,
  },
];

const activities = [
  {
    user: "Alex",
    action: 'completed "Homepage Design"',
    time: "5 hours ago",
  },
  {
    user: "Sarah",
    action: 'updated "Landing Page"',
    time: "8 hours ago",
  },
  {
    user: "John",
    action: 'created a new task "Fix Navbar"',
    time: "Yesterday",
  },
  {
    user: "Alex",
    action: "changed project status to In Progress",
    time: "2 days ago",
  },
];

export const ProjectDetails = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Project Header */}
      <ProjectDetailHeader />

      {/* Project Description */}
      <ProjectDescription />

      {/* Task Statistics */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Task Overview
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {taskStats.map((taskStat) => (
            <ProjectDetailCard key={taskStat.name} {...taskStat} />
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>

        <p className="mb-4 text-sm text-gray-500">
          Latest updates and actions from your team.
        </p>

        <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          {activities.map((activity, index) => (
            <RecentActivity key={`${activity.user}-${index}`} {...activity} />
          ))}
        </div>
      </section>
    </div>
  );
};
