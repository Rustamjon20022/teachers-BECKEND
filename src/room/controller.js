const { ErrorHandler } = require("./../util/error");
const Room = require("./model");

module.exports = {
  findOne: async function (req, res, next) {
    try {
      const docs = await Room.findById(req.params.id).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Room"));
    }
  },

  findAll: async function (req, res, next) {
    try {
      const docs = await Room.find({}).exec();
      if(!docs) throw new Error();
      return res.status(200).json(docs);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to get Rooms"));
    }
  },

  addNew: async function (req, res, next) {
    try {
      const newRoom = new Room(req.body);
      const doc = await newRoom.save();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to add new Room"));
    }
  },

  updateOne: async function (req, res, next) {
    try {
      const doc = await Room.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to update Room"));
    }
  },

  deleteOne: async function (req, res, next) {
    try {
      const doc = await Room.findByIdAndDelete(req.params.id).exec();
      if(!doc) throw new Error();
      return res.status(200).json(doc);
    } catch (err) {
      return next(new ErrorHandler(400, "Failed to delete Room"));
    }
  },
};
