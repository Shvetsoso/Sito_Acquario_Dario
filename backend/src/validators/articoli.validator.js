const Joi = require('joi');

exports.createArticoloSchema = Joi.object({

  nome: Joi.string().min(3).max(100).required(),

  prezzo: Joi.number().positive().required(),

  descrizione: Joi.string().allow('', null),

  id_categoria: Joi.number().integer().required(),

  quantita: Joi.number().integer().min(0).required()

});