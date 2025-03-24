const express = require("express");
const os = require("os");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    return res.status(200).json({message: "Home Page"})
})

// Health Check Endpoint
app.get("/health", (req, res) => {
  const healthStatus = {
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date(),
    memoryUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
    systemLoad: os.loadavg(),
  };

  res.status(200).json(healthStatus);
});

app.listen(port, () => {
  console.log(`Server listening at PORT:${port}`);
});
