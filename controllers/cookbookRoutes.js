const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");

// Require the Cookbook controller.
const cookbookModel = require("../models/Cookbook");

// Write the route to list all cookbooks
router.get("/", (req, res) => {
  cookbookModel
    .find({})
    .then((allCookbooks) => {
      res.json({
        status: 200,
        cookbooks: allCookbooks,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

// Write the route to get cookbook by title
router.get("/:title", (req, res) => {
  cookbookModel
    .find({ title: req.params.title })
    .then((cookbook) => {
      res.json({
        status: 200,
        title: cookbook,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

// Write the route to get cookbook by year published
router.get("/:yearId", (req, res) => {
  cookbookModel
    .find({ yearPublished: req.params.yearId })
    .then((cookbook) => {
      res.json({
        status: 200,
        cookbook: cookbook,
      });
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

// Write the route to create a cookbook
router.post("/", async (req, res) => {
  const newCookbook = await cookbookModel.create({
    title: req.body.title,
    yearPublished: req.body.yearPublished,
  });
  res.json({ status: 200, data: newCookbook });
});

// Write the route to update a cookbook
router.put("/:id", async (req, res) => {
  const updateCookbook = await cookbookModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({ status: 200, data: updateCookbook });
});

// Write the route to delete the cookbook by title
router.delete("/delete/:title", async (req, res) => {
  const deleteCookbook = await cookbookModel.deleteOne({
    title: req.params.title,
  });
  res.json({ status: 200 });
});

module.exports = router;
