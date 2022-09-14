const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const StepSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
});

StepSchema.plugin(normalize);
module.exports = mongoose.model("Step", StepSchema);
