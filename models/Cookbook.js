//import connection
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const cookbookSchema = new Schema({
  title: String,
  yearPublished: { type: Number },
});

//export model
const cookbookModel = mongoose.model("Cookbook", cookbookSchema);
module.exports = cookbookModel;
