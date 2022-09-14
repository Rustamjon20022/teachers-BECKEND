const { ErrorHandler } = require("../util/error");
const Payment = require("./model");

module.exports = {
  
  findOne: async function (req, res, next) {
    try {
      const docs = await Payment.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Intakes"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Payment.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to find Payments"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newPayment = new Payment(req.body);
      const doc = await newPayment.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Payment"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Payment.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update the Payment"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Payment.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete the Payment"));
    }
  }
};