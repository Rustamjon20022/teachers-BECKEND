const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const AttendanceSchema = mongoose.Schema({
  students: [{ 
    studentId: { type: ObjectId, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    active: { type: Boolean, default: true },
  }],
  sana: { type: String, required: true },
  groudId: { type: ObjectId, required: true }
});

AttendanceSchema.plugin(normalize);

module.exports = mongoose.model("Attendance", AttendanceSchema);
