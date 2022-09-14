const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const GroupsSchema = new mongoose.Schema({
  title: { type: String, maxlength: 1000, required: true },
  desc: { type: String },
  darsBoshlanishi: { type: String, maxlength: 1000, required: true },
  dasrTugashi: { type: String, maxlength: 1000, required: true },
  darsKunlari: [{ type: Number, maxlength: 1000 }],
  step: { 
    id: {type: ObjectId},
    title: {type: String, maxlength: 1000},
  },
  xona: { 
    id: {type: ObjectId},
    title: {type: String, maxlength: 1000},
  },
  subject: { 
    id: {type: ObjectId},
    title: {type: String, maxlength: 1000},
  },
  status: { type: Boolean, default: true },
});

GroupsSchema.plugin(normalize);
module.exports = mongoose.model("Groups", GroupsSchema);
