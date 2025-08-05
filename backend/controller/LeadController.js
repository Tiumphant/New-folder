const express = require("express");
const Lead = require("../model/leadModel");
const router = express.Router();

router.post("/lead", async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.status(201).json(lead);
});

router.get("/lead", async (req, res) => {
  const leads = await Lead.find().populate("assignedTo");
  res.json(leads);
});

router.put("/lead/:_id", async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  res.json(lead);
});

router.delete("/lead/:_id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params._id);
  res.send("Lead deleted");
});

router.delete("/lead/:_id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.send("Lead deleted");
});

module.exports = router;
