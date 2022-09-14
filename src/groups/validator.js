const Joi = require("@hapi/joi");

module.exports = {
  addNew: {
    body: {
      title: Joi.string().required(),
      desc: Joi.string(),
      darsBoshlanishi: Joi.string().required(),
      dasrTugashi: Joi.string().required(),
      darsKunlari: Joi.array().required(),
      step: Joi.object().required(),
      xona: Joi.object().required(),
      subject: Joi.object().required(),
      status: Joi.boolean().required()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      title: Joi.string().required(),
      desc: Joi.string(),
      darsBoshlanishi: Joi.string().required(),
      dasrTugashi: Joi.string().required(),
      darsKunlari: Joi.array().required(),
      step: Joi.object().required(),
      xona: Joi.object().required(),
      subject: Joi.object().required(),
      status: Joi.boolean().required()
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