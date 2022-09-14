const { ErrorHandler } = require("./../util/error");
const Staff = require("./model");

module.exports = {

  findOne: async function (req, res, next) {
    try {
      const docs = await Staff.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Staff"));
    }
  },
  
  findAll: async function (req, res, next) {
    try {
      const docs = await Staff.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Staffs"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newStaff = new Staff(req.body);
      const doc = await newStaff.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Staff"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Staff.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Staff"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Staff.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Staff"));
    }
  },
};
