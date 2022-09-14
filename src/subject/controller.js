const { ErrorHandler } = require("./../util/error");
const Subject = require("./model");

module.exports = {
  findOne: async function (req, res, next) {
    try {
      const docs = await Subject.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Subject"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Subject.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Subjects"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newSubject = new Subject(req.body);
      const doc = await newSubject.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Subject"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Subject.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Subject"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Subject.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Subject"));
    }
  },
};
