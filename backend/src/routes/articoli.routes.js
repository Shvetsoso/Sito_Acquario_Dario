const express = require('express');
const router = express.Router();

const controller = require('../controllers/articoli.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { createArticoloSchema } = require('../validators/articoli.validator');

//  CREATE
router.post(
  '/',
  //authMiddleware,
  validate(createArticoloSchema),
  controller.createArticolo
);

//  READ ALL
router.get('/', controller.getAllArticoli);

//  READ ONE
router.get('/:id', controller.getArticoloById);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

// DELETE (soft)
router.delete('/:id', authMiddleware, controller.deleteArticolo);

// FILTRO RICERCA
router.get('/filter/search', controller.filterArticoli);

module.exports = router;