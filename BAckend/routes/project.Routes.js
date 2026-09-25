import express from "express";

import {
  createProject,
  getAllProjects,
  getProjectById,
  deleteProject,
} from "../Controller/project.Controller.js";

const router = express.Router();

router.post("/", createProject);

router.get("/", getAllProjects);

router.get("/:id", getProjectById);

router.delete("/:id", deleteProject);

export default router;
