const Joi = require('joi');
exports.createArticoloSchema = Joi.object({

  nome: Joi.string().required(),

  prezzo: Joi.number().positive().required(),

  descrizione: Joi.string().allow('', null),

  id_categoria: Joi.number().integer().required(),

  tipo: Joi.string().valid(
    "pesce",
    "acquario",
    "attrezzatura",
    "prodotto"
  ).required(),

  quantita: Joi.number().integer().min(0).required(),

  dettagli: Joi.object().optional()

});