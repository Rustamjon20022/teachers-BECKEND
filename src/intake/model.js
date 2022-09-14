const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const IntakeSchema = new mongoose.Schema({
  firstname: { type: String, required: true},
  lastname: { type: String, required: true},
  username: { type: String },
  password: { type: String },
  subject: { type: String },
  phone: { type: String, required: true},
  address: { type: String, required: true},
  birthDate: { type: String, required: true},
  image: { type: String },
  status: { type: Boolean, default: true},
});

IntakeSchema.plugin(normalize);
module.exports = mongoose.model("Intake", IntakeSchema);
