const Joi = require('joi');

exports.createClienteSchema = Joi.object({
  nome: Joi.string().required(),

  cognome: Joi.string().required(),

  email: Joi.string().email().required(),

  telefono: Joi.string().allow('', null),

  password: Joi.string().min(6).required()
});
