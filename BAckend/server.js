
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});

import express from "express";
import cors from "cors";

// ── IMPORT ROUTES ──
import projectRoutes from "./routes/project.Routes.js";

const app = express();

const PORT = process.env.PORT || 5001;

// ── CORS ──
app.use(
  cors({
origin: [
  "http://localhost:5173",
  "http://127.0.0.1:5173",

  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "http://localhost:5501",
  "http://127.0.0.1:5501",
  "http://localhost:5001",
  "http://127.0.0.1:5001",
],

    credentials: true,

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ── BODY PARSER ──
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ── ROUTES ──

app.get("/", (req, res) => {
  res.json({
    message: " API is running",
  });
});

// Project routes
app.use("/api/projects", projectRoutes);

// ── ERROR HANDLER ──
app.use((err, req, res, next) => {
  console.error("\n── SERVER ERROR ──");

  console.error("URL    :", req.method, req.url);
  console.error("Message:", err.message);
  console.error("Stack  :", err.stack);

  console.error("──────────────────\n");

  res.status(err.status || 500).json({
    message: err.message || "Server Error",
    name: err.name,
    code: err.code,
  });
});

// ── START SERVER ──
// Only when run directly, not when imported by tests
if (process.argv[1] === __filename) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
