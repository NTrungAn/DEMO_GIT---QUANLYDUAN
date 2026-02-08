const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Middleware co ban
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Project Management is running...");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
