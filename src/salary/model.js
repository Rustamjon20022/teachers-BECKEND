const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const SalarySchema = new mongoose.Schema({
  type: { type: String },
  percent: { type: Number, default: 0 },
  teacherId: { type: ObjectId, required: true },
  sana: { type: Date, required: true },
});

SalarySchema.plugin(normalize);
module.exports = mongoose.model("Salary", SalarySchema);
