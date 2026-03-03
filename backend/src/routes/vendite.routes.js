const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const controller = require('../controllers/vendite.controller');
const { createVenditaSchema } = require('../validators/vendite.validator');
const validate = require('../middlewares/validate.middleware');

//  CREATE
router.post(
  '/',
  authMiddleware,
  validate(createVenditaSchema),
  controller.insertVendita
);

//  CREATE dettaglio

//  READ ALL
router.get('/', controller.findAll);

//  READ ONE articolo
router.get('/:id', controller.getArticoloById);

//  READ ONE specifico
router.get('/:id', controller.getById);

//  UPDATE

module.exports = router;