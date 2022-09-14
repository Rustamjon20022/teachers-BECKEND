const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const SubjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
});

SubjectSchema.plugin(normalize);
module.exports = mongoose.model("Subject", SubjectSchema);
