const mongoose = require("mongoose");

const connnectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connnectDatabase;
