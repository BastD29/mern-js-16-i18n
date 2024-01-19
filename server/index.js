const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 8080;

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.use(express.json());

app.use("/api/tests", require("./routes/testRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
