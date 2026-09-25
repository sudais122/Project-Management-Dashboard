
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
