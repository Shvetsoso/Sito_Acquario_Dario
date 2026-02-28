const Joi = require('joi');

exports.createArticoloSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required(),

  prezzo: Joi.number().positive().required(),

  quantita_magazzino: Joi.number().integer().min(0).required(),

  descrizione: Joi.string().allow('', null),

  categoria: Joi.string()
    .valid('acquario', 'pesce', 'prodotto', 'attrezzatura')
    .required()
});