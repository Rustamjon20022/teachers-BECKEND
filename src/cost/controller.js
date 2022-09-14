const { ErrorHandler } = require("./../util/error");
const Cost = require("./model");

module.exports = {

  findOne: async function (req, res, next) {
    try {
      const docs = await Cost.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Cost"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Cost.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Costs"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newCost = new Cost(req.body);
      const doc = await newCost.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Cost"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Cost.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Cost"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Cost.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Cost"));
    }
  },
};
