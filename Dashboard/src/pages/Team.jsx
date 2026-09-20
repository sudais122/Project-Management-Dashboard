import React, { useState } from "react";

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
  const [search, setsearch] = useState("");

  const searchedTeam = teamMembers.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Header />

      {/* Search + Filters */}
      <Topbar
        search={search}
        setSearch={setsearch}
      />

      {/* Team Cards */}
      {searchedTeam.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-lg font-semibold text-gray-700">
            No team members found
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Try searching with a different keyword.
          </p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {searchedTeam.map((team) => (
            <Card
              key={team.name}
              {...team}
            />
          ))}
        </div>
      )}
    </div>
  );
};