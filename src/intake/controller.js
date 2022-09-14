const { ErrorHandler } = require("./../util/error");
const Intake = require("./model");

module.exports = {
  
  findOne: async function (req, res, next) {
    try {
      const docs = await Intake.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Intakes"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Intake.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Intakes"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newIntake = new Intake(req.body);
      const doc = await newIntake.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Intake"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Intake.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Intake"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Intake.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Intake"));
    }
  },
};
