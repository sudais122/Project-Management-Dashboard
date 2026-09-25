const API_URL = "/api/projects";

export const createProject = async (projectData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  return data;
};

export const getAllProjects = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};