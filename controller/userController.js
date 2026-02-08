const User = require("../models/User"); // Import Model User

// 1. Lấy danh sách user (Dành cho Admin/Review)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Khong tra ve mat khau
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Tạo user mới (Register)
exports.createUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, // Luu y: Thuc te can bam mat khau (hash)
    role: req.body.role || "member",
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 3. Lấy thông tin chi tiết user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
