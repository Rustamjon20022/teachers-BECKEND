const { ErrorHandler } = require("./../util/error");
const Step = require("./model");

module.exports = {
  findOne: async function (req, res, next) {
    try {
      const docs = await Step.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Step"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Step.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Steps"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newStep = new Step(req.body);
      const doc = await newStep.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Step"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Step.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Step"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Step.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Step"));
    }
  },
};
