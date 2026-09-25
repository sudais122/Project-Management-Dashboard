import express from "express";
import {
  createProject,
  getAllProjects,
} from "../Controller/project.Controller.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getAllProjects);

export default router;
