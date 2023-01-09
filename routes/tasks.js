const express = require("express");
const router = express.Router();

router.get("/tasks", (req, res) => {
  res.status(200).send({ tasks: [] });
});

router.get("/tasks/:id", (req, res) => {
  res.status(200).send({ task: "single task" });
});

router.post("/tasks", (req, res) => {
  res.status(200).send({ msg: "task added successfully" });
});

router.put("/tasks/:id", (req, res) => {
  res.status(200).send({ msg: "task updated successfully" });
});

router.delete("/tasks/:id", (req, res) => {
  res.status(200).send({ msg: "task deleted successfully" });
});
