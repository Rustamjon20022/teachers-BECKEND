const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const RoomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
});

RoomSchema.plugin(normalize);
module.exports = mongoose.model("Room", RoomSchema);
