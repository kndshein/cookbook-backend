//Import connection
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/
const authorSchema = new Schema({
  firstName: String,
  lastName: String,
  cookbooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cookbook",
    },
  ],
});

//export model named "Author"
const authorModel = mongoose.model("Author", authorSchema);
module.exports = authorModel;
