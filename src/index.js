const express = require("express");
const mongoose = require("mongoose");
require("./db/conn");
const User = require("./models/userModel");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("home");
});
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    console.log(req.body);
    const createduser = await user.save();
    res.status(201).send(createduser);
  } catch (e) {
    res.status(401).send(e);
  }
});

app.get("/users", async (req, res) => {
  const user = await User.find();
  //user.countDocuments();

  console.log(user);

  res.send({
    data: user,
  });
});
app.get("/users/:name", async (req, res) => {
  const regex = new RegExp(req.params.name, "i");
  const user = await User.find({ name: regex });
  //user.countDocuments();

  console.log(user);

  res.send(user);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
