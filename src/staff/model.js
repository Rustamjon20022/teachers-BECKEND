const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const StaffsSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  groups: [{ type: String }],
  subject: [{ type: String }],
  phone: { type: String, required: true },
  address: { type: String, required: true },
  birthDate: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: Boolean, default: true },
});

StaffsSchema.plugin(normalize);
module.exports = mongoose.model("Staff", StaffsSchema);
