const express = require('express');
const router = express.Router();

const controller = require('../controllers/clienti.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { createClienteSchema } = require('../validators/clienti.validator');

//  CREATE
router.post(
  '/',
  authMiddleware,
  validate(createClienteSchema),
  controller.createCliente
);

//  READ ALL
router.get('/', controller.getAllClienti);

//  READ ONE
router.get('/:id', controller.getClienteById);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateCliente);

module.exports = router;