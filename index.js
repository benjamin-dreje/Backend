const express = require("express");
const app = express();

app.use(express.json());

// GET "/"
app.get("/", (req, res) => res.send("Hi"));

// POST "/calc"
app.post("/calc", (req, res) => {
  const { numa, numb } = req.body;
  res.json({ result: numa + numb });
});

app.listen(3000, () => console.log("Server ready on http://localhost:3000"));
