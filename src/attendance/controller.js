const { ErrorHandler } = require("./../util/error");
const Attendance = require("./model");

module.exports = {

  findOne: async function (req, res, next) {
    try {
      const docs = await Attendance.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Attendance"));
    }
  },
  
  findAll: async function (req, res, next) {
    try {
      const docs = await Attendance.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Attendance list"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newAttendance = new Attendance(req.body);
      const doc = await newAttendance.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Attendance"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Attendance.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Attendance"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Attendance.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Attendance"));
    }
  }
};
