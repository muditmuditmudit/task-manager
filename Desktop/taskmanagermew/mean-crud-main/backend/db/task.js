const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean
});
const Task=mongoose.model('tasks',userSchema);
module.exports=Task;
