const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, trim: true }, // Them trim de xoa khoang trang thua
startDate: { type: Date, default: Date.now },
  deadline: Date,
  status: {
    type: String,
    enum: ["planning", "in-progress", "completed"],
    default: "planning",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
