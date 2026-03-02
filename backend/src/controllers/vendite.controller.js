const venditeService = require('../services/vendite.service');

const insertVendita = async (req, res, next) => {
  try {

    const vendita = await venditeService.insertVendita(req.body);

    res.status(201).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};

module.exports = {
  insertVendita
};