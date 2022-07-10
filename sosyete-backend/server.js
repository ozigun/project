const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb successful");
});

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
