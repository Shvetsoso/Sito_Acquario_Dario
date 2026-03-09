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
/*
router.get('/', controller.getAllArticoli);
*/

router.get('/', async (req, res) => {
  await pool.query("SELECT * FROM prodotti", (err, result) => {
    if(err) 
      return res.status(500)
    else {
      return res.status(200).json({success: true, data: result.rows})
    }
  })

})

//  READ ONE
router.get('/:id', controller.getArticoloById);

//  UPDATE
router.put('/:id', authMiddleware, controller.updateArticolo);

// DELETE (soft)
router.delete('/:id', authMiddleware, controller.deleteArticolo);

// FILTRO RICERCA
router.get('/filter/search', controller.filterArticoli);

module.exports = router;