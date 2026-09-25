
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsFile = path.join(__dirname, "../data/projects.json");

export const createProject = (req, res) => {
      console.log("BODY:", req.body);

  try {
    const {
      projectName,
      description,
      startDate,
      endDate,
      projectManager,
      members,
      status,
    } = req.body;

    if (
      !projectName ||
      !description ||
      !startDate ||
      !endDate ||
      !projectManager ||
      !members ||
      !status
    ) {
      return res.status(400).json({
        success: false,
        message: "All project fields are required",
      });
    }

    const fileData = fs.readFileSync(projectsFile, "utf-8");
    const projects = JSON.parse(fileData);

    const newProject = {
      id: Date.now().toString(),
      projectName,
      description,
      startDate,
      endDate,
      projectManager,
      members,
      status,
      createdAt: new Date().toISOString(),
    };

    projects.push(newProject);

    fs.writeFileSync(
      projectsFile,
      JSON.stringify(projects, null, 2)
    );

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      project: newProject,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

//get all projects
export const getAllProjects = (req, res) => {
  try {
    const fileData = fs.readFileSync(projectsFile, "utf-8");

    const projects = JSON.parse(fileData);

    return res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};
// DELETE project
export const deleteProject = (req, res) => {
  try {
    const { id } = req.params;

    const fileData = fs.readFileSync(projectsFile, "utf-8");
    const projects = JSON.parse(fileData);

    const projectIndex = projects.findIndex(
      (project) => project.id.toString() === id.toString()
    );

    if (projectIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const deletedProject = projects.splice(projectIndex, 1)[0];

    fs.writeFileSync(
      projectsFile,
      JSON.stringify(projects, null, 2)
    );

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      project: deletedProject,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};

// GET single project
export const getProjectById = (req, res) => {
  try {
    const { id } = req.params;

    const fileData = fs.readFileSync(projectsFile, "utf-8");
    const projects = JSON.parse(fileData);

    const project = projects.find(
      (project) => project.id.toString() === id.toString()
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};