const express = require("express");
const router = express.Router();

const {
  getTasks,
  getSingleTask,
  addTask,
  updateTask,
  removeTask,
} = require("../controllers/tasks");

router.get("/tasks", getTasks);

router.get("/tasks/:id", getSingleTask);

router.post("/tasks", addTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", removeTask);
