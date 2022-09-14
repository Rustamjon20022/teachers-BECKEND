const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const CostSchema = new mongoose.Schema({
  sana: { type: Date, required: true },
  items: [{
    title: { type: String, required: true },
    price: { type: Number, required: true },
  }]
});

CostSchema.plugin(normalize);
module.exports = mongoose.model("Cost", CostSchema);
