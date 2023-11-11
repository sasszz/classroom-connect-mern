const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  text: String,
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;
