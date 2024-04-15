const mongoose = require("mongoose");

const connnectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://evoshishir:Atefarmanshishir123@cluster0.fvbztsh.mongodb.net/guardiantech"
    )
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connnectDatabase;
