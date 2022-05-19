const mongoose=require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/try")
  .then(() => console.log("connection success..."))
  .catch((e) => {
    console.log(e);
  });