const express = require("express");
const router = express.Router();
const {
  addTask,
  getTasks,
  getTaskid,
  updateTask,
  deleteTask,
  updateStatus,
} = require("../handlers/taskHandle");

router.post("/tasks", async (req, res) => {
  console.log("req.body", req.body);
  let task = await addTask(req.body);
  res.send(task);
});

router.get("/tasks", async (req, res) => {
  let tasks = await getTasks();
  res.send(tasks);
});

router.get("/tasks/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  let task = await getTaskid(req.params["id"]);
  res.send(task);
});

router.put("/tasks/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  await updateTask(req.params["id"], req.body);
  res.send({});
});

router.delete("/tasks/:id", async (req, res) => {
  console.log("id", req.params["id"]);
  await deleteTask(req.params["id"]);
  res.send({});
});


module.exports = router;
