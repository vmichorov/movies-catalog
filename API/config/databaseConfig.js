const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("./index");

module.exports = (app) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const database = mongoose.connection;
    database.on("error", (err) => {
      console.error("Database connection error:", err);
      reject(err);
    });
    database.once("open", () => {
      console.log("Connected to MongoDB successfully");
      resolve();
    });
  });
};
