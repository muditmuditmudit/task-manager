const Task = require("../db/task");

async function addTask(taskModel) {
  let task = new Task({
    ...taskModel,
  });
  await task.save();
  return task.toObject();
}

async function getTasks() {
  const tasks = await Task.find();
  return tasks.map((x) => x.toObject());
}
async function getTaskid(id) {
  const task = await Task.findById(id);
  return task.toObject();
}

async function updateTask(id, taskData) {
  const filter = { _id: id };
  await Task.findOneAndUpdate(filter, taskData);
}

async function deleteTask(id) {
  await Task.findByIdAndDelete(id);
}

module.exports = { addTask, getTasks, getTaskid, updateTask, deleteTask };
