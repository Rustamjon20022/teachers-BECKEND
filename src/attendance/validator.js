const Joi = require("@hapi/joi");

module.exports = {
  addNew: {
    body: {
      students: Joi.array().required(),
      sana: Joi.string().required(),
      groudId: Joi.string().required()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      students: Joi.array().required(),
      sana: Joi.string().required(),
      groudId: Joi.string().required()
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
