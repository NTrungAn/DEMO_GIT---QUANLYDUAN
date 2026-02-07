const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
startDate: { type: Date, default: Date.now },
  deadline: Date,
  status: {
    type: String,
    enum: ["planning", "in-progress", "completed"],
    default: "planning",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
