const getTasks = (req, res) => {
  res.status(200).send({ tasks: [] });
};

const getSingleTask = (req, res) => {
  res.status(200).send({ task: "single task" });
};

const addTask = (req, res) => {
  res.status(200).send({ msg: "task added successfully" });
};

const updateTask = (req, res) => {
  res.status(200).send({ msg: "task updated successfully" });
};

const removeTask = (req, res) => {
  res.status(200).send({ msg: "task removed successfully" });
};

module.exports = {
  getTasks,
  getSingleTask,
  addTask,
  updateTask,
  removeTask,
};
