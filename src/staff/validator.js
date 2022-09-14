const Joi = require("@hapi/joi");

module.exports = {
  addNew: {
    body: {
      firstname: Joi.string().max(1000).required(),
      lastname: Joi.string().max(1000).required(),
      username: Joi.string().max(1000).required(),
      password: Joi.string().max(1000).required(),
      subject: Joi.array(),
      groups: Joi.array(),
      phone: Joi.string().max(1000).required(),
      address: Joi.string().max(1000).required(),
      birthDate: Joi.string().max(1000).required(),
      image: Joi.string().max(1000).required(),
      status: Joi.boolean().default(true),
      role: Joi.string().max(1000).required()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      firstname: Joi.string().max(1000).required(),
      lastname: Joi.string().max(1000).required(),
      username: Joi.string().max(1000).required(),
      password: Joi.string().max(1000).required(),
      subject: Joi.array(),
      groups: Joi.array(),
      phone: Joi.string().max(1000).required(),
      address: Joi.string().max(1000).required(),
      birthDate: Joi.string().max(1000).required(),
      image: Joi.string().max(1000).required(),
      status: Joi.boolean().default(true),
      role: Joi.string().max(1000).required()
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