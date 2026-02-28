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
  controller.createVendita
);

module.exports = router;