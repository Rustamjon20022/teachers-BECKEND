const Joi = require("@hapi/joi");

module.exports = {

  addNew: {
    body: {
      title: Joi.string().max(1000).required(),
      desc: Joi.string()
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
      title: Joi.string().max(1000).required(),
      desc: Joi.string()
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