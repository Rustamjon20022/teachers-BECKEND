const Joi = require("@hapi/joi");

module.exports = {
  addNew: {
    body: {
      studentId: Joi.string().max(1000).required(),
      groupId: Joi.string().max(1000).required(),
      summa: Joi.number().required(),
      monthDate: Joi.string().max(1000).required(),
      date: Joi.string().max(1000).required()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      studentId: Joi.string().max(1000).required(),
      groupId: Joi.string().max(1000).required(),
      summa: Joi.number().required(),
      monthDate: Joi.string().max(1000).required(),
      date: Joi.string().max(1000).required()
    }
  },

  deleteOne: {
    params: {
      id: Joi.string().required()
    }
  },

  findOne: {
    params: {
      id: Joi.string().required()
    }
  }
};
