const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const PaymentSchema = new mongoose.Schema({
  studentId: { type: ObjectId, maxlength: 1000 },
  groupId: { type: ObjectId, maxlength: 1000 },
  summa: { type: Number },
  monthDate: { type: String, maxlength: 1000 },
  date:  { type: Date, maxlength: 1000 }
});

PaymentSchema.plugin(normalize);

module.exports = mongoose.model("Payment", PaymentSchema);