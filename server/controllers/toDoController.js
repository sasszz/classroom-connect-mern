const User = require("../models/personModel");
const ToDo = require("../models/toDoModel");

// Create Todo
module.exports.create = async (req, res) => {
  try {
    const todo = new ToDo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read Todos
module.exports.read = async (req, res) => {
  try {
    const userId = req.user._id;
    const todos = await ToDo.find({ userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Todo
module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(todo);
  } catch (error) {
    res.status(404).json({ error: "Todo not found" });
  }
};

// Delete Todo
module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "Todo not found" });
  }
};
