import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tasksFile = path.join(__dirname, "../data/tasks.json");

export const createTask = (req, res) => {
  console.log("TASK BODY:", req.body);

  try {
    const {
      taskName,
      description,
      project,
      assign,
      priority,
      status,
      dueDate,
    } = req.body;

    if (
      !taskName ||
      !description ||
      !project ||
      !assign ||
      !priority ||
      !status ||
      !dueDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All task fields are required",
      });
    }

    const fileData = fs.readFileSync(tasksFile, "utf-8");
    const tasks = JSON.parse(fileData);

    const newTask = {
      id: Date.now().toString(),
      taskName,
      description,
      project,
      assign,
      priority,
      status,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    fs.writeFileSync(
      tasksFile,
      JSON.stringify(tasks, null, 2)
    );

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create task",
    });
  }
};