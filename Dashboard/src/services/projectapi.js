export const getAllProjects = async () => {
  const response = await fetch("/api/projects");

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch projects");
  }

  return data;
};

export const createProject = async (projectData) => {
  const response = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create project");
  }

  return data;
};

export const deleteProject = async (id) => {
  const response = await fetch(`/api/projects/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete project");
  }

  return data;
};