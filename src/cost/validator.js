const Joi = require("@hapi/joi");

module.exports = {

  addNew: {
    body: {
      sana: Joi.string().required(),
      items: Joi.array().required()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      sana: Joi.string().required(),
      items: Joi.array().required()
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