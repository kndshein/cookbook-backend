require("dotenv").config();

const { MONGODBURI } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(MONGODBURI, config);

const db = mongoose.connection;

db.on("error", (err) => console.log(err.message + "is mongod running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODBURI));
db.on("disconnected", () => console.log("mongo disconnected"));

module.exports = mongoose;

// mongoose.Promise = Promise;
