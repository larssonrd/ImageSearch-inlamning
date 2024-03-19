const Joi = require('joi');

const addNewImageSchema = Joi.object({
  user: Joi.string().required(),
  imageUrl: Joi.string().uri().required(),
});

module.exports = {
  addNewImageSchema,
};
