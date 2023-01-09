const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/tasks", (req, res) => {
  res.status(200).send({ tasks: [] });
});

app.get("/tasks/:id", (req, res) => {
  res.status(200).send({ task: "single task" });
});

app.post("/tasks", (req, res) => {
  res.status(200).send({ msg: "task added successfully" });
});

app.put("/tasks/:id", (req, res) => {
  res.status(200).send({ msg: "task updated successfully" });
});

app.delete("/tasks/:id", (req, res) => {
  res.status(200).send({ msg: "task deleted successfully" });
});

app.listen(port, () => console.log(`server is listening on ${port}`));
