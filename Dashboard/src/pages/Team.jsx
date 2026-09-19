import React from "react";

import Header from "../components/Team/Header";
import Topbar from "../components/Team/Topbar";
import Card from "../components/Team/Card";

const teamMembers = [
  {
    name: "Backend Team",
    email: "backend@example.com",
    role: "Backend Development",
    assignedTasks: 8,
    activeProjects: 3,
  },
  {
    name: "Frontend Team",
    email: "frontend@example.com",
    role: "Frontend Development",
    assignedTasks: 12,
    activeProjects: 4,
  },
  {
    name: "Design Team",
    email: "design@example.com",
    role: "UI/UX Design",
    assignedTasks: 6,
    activeProjects: 2,
  },
  {
    name: "Development Team",
    email: "development@example.com",
    role: "Software Development",
    assignedTasks: 10,
    activeProjects: 3,
  },
  {
    name: "Product Team",
    email: "product@example.com",
    role: "Product Development",
    assignedTasks: 15,
    activeProjects: 5,
  },
];

export const Team = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Header />

      {/* Search + Filters */}
      <Topbar />

      {/* Team Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((teamMember) => (
          <Card key={teamMember.name} {...teamMember} />
        ))}
      </div>
    </div>
  );
};