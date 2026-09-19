import React from "react";
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

const stats = [
  {
    title: "Total Projects",
    count: 24,
    change: "+12%",
    variant: "blue",
    icon: <CiFolderOn />,
  },
  {
    title: "Active Projects",
    count: 8,
    change: "+2",
    variant: "amber",
    icon: <IoMdTime />,
  },
  {
    title: "Completed Tasks",
    count: 156,
    change: "+18%",
    variant: "green",
    icon: <IoMdCheckboxOutline />,
  },
  {
    title: "Team Members",
    count: 12,
    change: "+1",
    variant: "violet",
    icon: <IoPeopleSharp />,
  },
];

const projects = [
  {
    title: "Website Redesign",
    status: "In progress",
    description:
      "New marketing site and a shared component library for the design system.",
    progress: 68,
    dueDate: "Oct 1",
  },
  {
    title: "Mobile App ",
    status: "In review",
    description:
      "Building a responsive mobile application with authentication and user profiles.",
    progress: 45,
    dueDate: "Oct 15",
  },
  {
    title: "Dashboard Analytics",
    status: "Completed",
    description:
      "Analytics dashboard with project metrics, team performance, and activity reports.",
    progress: 100,
    dueDate: "Sep 20",
  },
];

const recentTasks = [
  {
    task: "Fix checkout validation errors",
    project: "Website Redesign",
    assignee: "Ayesha Khan",
    priority: "High",
    status: "In progress",
    dueDate: "Sep 19",
  },
  {
    task: "Update landing page design",
    project: "Marketing Website",
    assignee: "Ali Ahmed",
    priority: "Medium",
    status: "In review",
    dueDate: "Sep 22",
  },
  {
    task: "Fix mobile navigation",
    project: "Mobile App",
    assignee: "Sara Malik",
    priority: "Low",
    status: "Completed",
    dueDate: "Sep 18",
  },
];

export const Dashboard = () => {
  return (
    <div className="px-7 py-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <WelcomeMessage />
        <div className="flex items-center gap-3">
          <Datafilter />
          <CreateProject />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Statecard key={stat.title} {...stat} />
        ))}
      </div>

      <RecentprojectsHeading />

      <div className="flex w-full items-stretch gap-8">
        {projects.map((project) => (
          <ProjectStateCard key={project.title} {...project} />
        ))}
      </div>

      <RecntTasksheading />

      <RecentTasksTable tasks={recentTasks} />
    </div>
  );
};