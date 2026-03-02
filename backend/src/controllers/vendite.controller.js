const venditeService = require('../services/vendite.service');

const createVendita = async (req, res, next) => {
  try {

    const vendita = await venditeService.createVendita(req.body);

    res.status(201).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};

module.exports = {
  createVendita
};