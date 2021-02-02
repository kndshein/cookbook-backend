const express = require("express");
const router = express.Router();
const authorModel = require("../models/Author");
const cookbookModel = require("../models/Cookbook");
const mongoose = require("../db/connection");

// Write the route to list all authors
router.get("/", async (req, res) => {
  const data = await authorModel.find({}).populate("cookbooks");
  res.json({ status: 200, data: data });
});

// Write the route to get authors by firstname
router.get("/:firstName", async (req, res) => {
  const data = await authorModel
    .find({ firstName: req.params.firstName })
    .populate("cookbooks");
  res.json({ status: 200, data: data });
});

// Write the route to create an author:
router.post("/", async (req, res) => {
  const data = await authorModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  res.json({ status: 200, data: data });
});

// Write the route to update an author
router.put("/:id", async (req, res) => {
  const data = await authorModel.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: 200, data: data });
});

//Write a route to delete an author
router.delete("/:id", (req, res) => {
  authorModel.delete({ _id: req.params.id }).then((author) => {
    res.json(author);
  });
});

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

module.exports = router;
