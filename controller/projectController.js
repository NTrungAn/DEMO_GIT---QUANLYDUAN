const Project = require("../models/Project"); // Import Model Project

// 1. Lấy tất cả dự án
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Tạo dự án mới
exports.createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    startDate: req.body.startDate,
    deadline: req.body.deadline,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 3. Cập nhật dự án
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project)
      return res.status(404).json({ message: "Không tìm thấy dự án" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4. Xóa dự án
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project)
      return res.status(404).json({ message: "Không tìm thấy dự án" });
    res.json({ message: "Đã xóa dự án thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
