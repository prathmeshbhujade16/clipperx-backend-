const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

app.post("/api/process-video", (req, res) => {
  const { text } = req.body;

  res.json({
    success: true,
    message: "API Working 🔥",
    input: text
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
