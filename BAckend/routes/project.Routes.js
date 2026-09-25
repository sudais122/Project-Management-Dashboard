import express from "express";
import { createProject } from "../Controller/project.Controller.js";

const router = express.Router();

router.post("/", createProject);

export default router;
