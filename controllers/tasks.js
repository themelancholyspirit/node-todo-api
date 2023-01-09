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
    const { id: userID } = req.params;
    const task = await Task.find({ _id: userID });

    if (task) return res.status(200).json(task);

    res.status(404).json({ msg: `no user with id ${userID} was found` });
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
    const { id: userID } = req.params.id;
    const { name } = req.body;
    const user = Task.findOneAndUpdate({ _id: userID }, { name });

    if (user) return res.status(200).json(user);
    res.status(404).json({ msg: "could not update the user" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  res.status(200).send({ msg: "task updated successfully" });
};

const removeTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });

    if (task) return res.status(200).json(task);

    req.status(404).json({ msg: "could not add a new user" });
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
