import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProjectDetailHeader from "../components/projects/ProjectDetailsHeader";
import ProjectDescription from "../components/projects/Projectesciption";
import ProjectDetailCard from "../components/projects/ProjectDetailCard";
import { RecentActivity } from "../components/projects/RecentActivity";

import { getProjectById } from "../services/projectapi";

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
  const { projectID } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProjectById(projectID);

      console.log("PROJECT DETAILS:", data);

      if (data.success) {
        setProject(data.project);
      } else {
        setError(data.message);
      }

      setLoading(false);
    };

    fetchProject();
  }, [projectID]);

  if (loading) {
    return (
      <div className="p-6 text-sm text-gray-500">
        Loading project...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-sm text-red-500">
        {error}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-6 text-sm text-gray-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Project Header */}
      <ProjectDetailHeader project={project} />

      {/* Project Description */}
      <ProjectDescription project={project} />

      {/* Task Statistics */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Task Overview
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {taskStats.map((taskStat) => (
            <ProjectDetailCard
              key={taskStat.name}
              {...taskStat}
            />
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
            <RecentActivity
              key={`${activity.user}-${index}`}
              {...activity}
            />
          ))}
        </div>
      </section>
    </div>
  );
};