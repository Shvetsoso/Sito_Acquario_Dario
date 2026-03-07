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

// create singolo categoria


//  READ ALL
router.get('/', controller.getAllArticoli);

// read all singole categorie

//  READ ONE
router.get('/:id', controller.getArticoloById);

// read singola categoria 

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

// update singola categoria 

// DELETE (soft)
router.delete('/:id', authMiddleware, controller.deleteArticolo);

module.exports = router;