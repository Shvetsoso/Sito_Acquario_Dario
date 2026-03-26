const express = require('express');
const router = express.Router();

const controller = require('../controllers/articoli.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validate.middleware');
const { createArticoloSchema } = require('../validators/articoli.validator');
const pool = require("../config/db");

//  CREATE
router.post(
  '/',
  //authMiddleware,
  validate(createArticoloSchema),
  controller.createArticolo
);

//  READ ALL

router.get('/articoli', controller.getAllArticoli);

router.get('/pesci', controller.getAllPesci);

router.get('/acquari', controller.getAllAcquari);

router.get('/attrezzature', controller.getAllAttrezzature);

router.get('/prodotti', controller.getAllProdotti);

// FILTRO RICERCA
router.get('/filter/search', controller.filterArticoli);

//  READ ONE
router.get('/articolo/:nome', controller.getArticoloByName);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

// DELETE (soft)
router.delete('/:id', authMiddleware, controller.deleteArticolo);


module.exports = router;