const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const StudentsSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  groups: [{ type: Object }],
  phone: { type: String, required: true },
  address: { type: String, required: true },
  birthDate: { type: String, required: true },
  image: { type: String },
  status: { type: Boolean, default: true }
});

StudentsSchema.plugin(normalize);
module.exports = mongoose.model("Student", StudentsSchema);
