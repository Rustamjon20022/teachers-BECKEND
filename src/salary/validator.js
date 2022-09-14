const Joi = require("@hapi/joi");

module.exports = {

  addNew: {
    body: {
      type: Joi.string().max(1000).required(),
      percent: Joi.number().max(1000).required(),
      teacherId: Joi.string().max(1000).required(),
      sana: Joi.string().max(1000).required(),
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      type: Joi.string().max(1000).required(),
      percent: Joi.number().max(1000).required(),
      teacherId: Joi.string().max(1000).required(),
      sana: Joi.string().max(1000).required(),
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
}