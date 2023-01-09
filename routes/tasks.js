const express = require("express");
const router = express.Router();

const {
  getTasks,
  getSingleTask,
  addTask,
  updateTask,
  removeTask,
} = require("../controllers/tasks");

router.get("/", getTasks);

router.get("/:id", getSingleTask);

router.post("/", addTask);

router.put("/:id", updateTask);

router.delete("/:id", removeTask);

module.exports = router;
