const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const whitelist = process.env.ALLOWED_ORIGIN || "http://localhost:5317";

const corsSetting = cors({
  credentials: true,
  origin: function (origin, callback) {
    const originUrl = origin || whitelist;
    if (whitelist.indexOf(originUrl) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

app.use(corsSetting);
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));

mongoose.set("strictQuery", false);
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/user", userRoutes);
app.use("/partner", partnerRoutes);
app.get("/test", (_req, res) => {
  res.send("Welcome to express!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
