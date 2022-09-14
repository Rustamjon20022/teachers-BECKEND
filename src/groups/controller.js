const { ErrorHandler } = require("./../util/error");
const Groups = require("./model");

module.exports = {
  
  findOne: async function (req, res, next) {
    try {
      const docs = await Groups.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Groups"));
    }
  },
  
  findAll: async function (req, res, next) {
    try {
      const docs = await Groups.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Groupss"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newGroups = new Groups(req.body);
      const doc = await newGroups.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Groups"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Groups.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Groups"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Groups.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Groups"));
    }
  },
};
