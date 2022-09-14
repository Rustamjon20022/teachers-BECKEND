const Joi = require("@hapi/joi");

module.exports = {
  addNew: {
    body: {
      firstname: Joi.string().max(1000).required(),
      lastname: Joi.string().max(1000).required(),
      username: Joi.string(),
      password: Joi.string(),
      subject: Joi.string(),
      phone: Joi.string().max(1000).required(),
      address: Joi.string().max(1000).required(),
      birthDate: Joi.string().max(1000).required(),
      image: Joi.string(),
      status: Joi.boolean().default(true)
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      firstname: Joi.string().max(1000).required(),
      lastname: Joi.string().max(1000).required(),
      username: Joi.string(),
      password: Joi.string(),
      subject: Joi.string(),
      phone: Joi.string().max(1000).required(),
      address: Joi.string().max(1000).required(),
      birthDate: Joi.string().max(1000).required(),
      image: Joi.string(),
      status: Joi.boolean().default(true)
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