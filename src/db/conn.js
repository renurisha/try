const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://renurisha:Renu8271%40123@cluster0.i8evq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connection success..."))
  .catch((e) => {
    console.log(e);
  });
