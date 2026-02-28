const Joi = require('joi');

exports.createVenditaSchema = Joi.object({
  id_cliente: Joi.number().integer().required(),

  articoli: Joi.array().items(
    Joi.object({
      id_articolo: Joi.number().integer().required(),
      quantita: Joi.number().integer().min(1).required()
    })
  ).min(1).required()
});
