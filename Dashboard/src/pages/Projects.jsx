import React, { useEffect, useState } from "react";

import ProjectHeader from "../components/projects/ProjectHeader";
import { SearchProject } from "../components/projects/SearchProject";
import { ProjectCard } from "../components/projects/ProjectCard";
import { getAllProjects } from "../services/projectapi";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest First");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();

      if (data.success) {
        setProjects(data.projects);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectCreated = () => {
    setIsOpen(false);
    setToast("Project created successfully");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === "Newest First") {
      return new Date(b.sortDate) - new Date(a.sortDate);
    }

    if (sort === "Oldest First") {
      return new Date(a.sortDate) - new Date(b.sortDate);
    }

    return 0;
  });

  return (
    <div className="space-y-6 p-6">
      <ProjectHeader onSortChange={setSort} />

      <SearchProject search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.length === 0 ? (
          <div className="col-span-full py-10 text-center">
            <p className="text-lg font-semibold text-gray-700">
              No projects found
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Try searching with a different keyword.
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        )}
      </div>
    </div>
  );
};
