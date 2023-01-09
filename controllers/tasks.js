const { json } = require("express");
const Model = require("../models/Model");
const Task = require("../models/Model");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.find({ _id: taskID });

    if (task) return res.status(200).json(task);

    res.status(404).json({ msg: `no task with id ${taskID} was found` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (task) return res.status(200).json({ task });

    return res.status(404).json({ msg: `No task with id ${taskID}` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const removeTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });

    if (task) return res.status(200).json(task);

    req.status(404).json({ msg: "could not add a new task" });
  } catch (error) {
    req.status(500).json({ msg: error });
  }
};

module.exports = {
  getTasks,
  getSingleTask,
  addTask,
  updateTask,
  removeTask,
};
