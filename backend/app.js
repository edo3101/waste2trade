const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const routes = require("./routes/userRoutes");
const partnerRoutes = require("./routes/partnerRoutes"); // Add this line

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
// Set the strictQuery option to false to prepare for Mongoose 7
mongoose.set("strictQuery", false);
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/", routes);
app.use("/partners", partnerRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
