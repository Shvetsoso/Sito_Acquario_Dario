const express = require('express');
const router = express.Router();

const controller = require('../controllers/articoli.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { createArticoloSchema } = require('../validators/articoli.validator');
const pool = require("../config/db")

//  CREATE
router.post(
  '/',
  //authMiddleware,
  validate(createArticoloSchema),
  controller.createArticolo
);

//  READ ALL

router.get('/', controller.getAllArticoli);

router.get('/', controller.getAllPesci);

router.get('/', controller.getAllAcquari);

router.get('/', controller.getAllAttrezzature);

router.get('/', controller.getAllProdotti);

//  READ ONE
router.get('/:id', controller.getArticoloByName);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

// DELETE (soft)
router.delete('/:id', authMiddleware, controller.deleteArticolo);

// FILTRO RICERCA
router.get('/filter/search', controller.filterArticoli);

module.exports = router;