const express = require('express');
const router = express.Router();

const controller = require('../controllers/categorie.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// CREATE
router.post('/', authMiddleware, controller.createCategoria);

// READ ALL
router.get('/', controller.getAllCategorie);

// READ ONE
router.get('/:id', controller.getCategoriaById);

// UPDATE
router.put('/:id', authMiddleware, controller.updateCategoria);

// DELETE
router.delete('/:id', authMiddleware, controller.deleteCategoria);

module.exports = router;