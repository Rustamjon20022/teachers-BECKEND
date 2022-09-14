const { ErrorHandler } = require("./../util/error");
const Salary = require("./model");

module.exports = {
  findOne: async function (req, res, next) {
    try {
      const docs = await Salary.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Room"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Salary.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Salarys"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newSalary = new Salary(req.body);
      const doc = await newSalary.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Salary"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Salary.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Salary"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Salary.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Salary"));
    }
  },
};
