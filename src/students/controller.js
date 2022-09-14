const { ErrorHandler } = require("./../util/error");
const Students = require("./model");

module.exports = {

  findOne: async function (req, res, next) {
    try {
      const docs = await Students.findById(req.params.id).exec();
      if (!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Students"));
    }
  },

  findByGroup: async function (req, res, next) {
    try {
      const docs = await Students.find({ groups: { $elemMatch: { $eq: req.params.id } } }).exec();
      if (!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Students"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Students.find({}).exec();
      if (!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Studentss"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newStudents = new Students(req.body);
      const doc = await newStudents.save();
      if (!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Students"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Students.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if (!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Students"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Students.findByIdAndDelete(req.params.id).exec();
      if (!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Students"));
    }
  },
};
