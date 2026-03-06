const venditeService = require('../services/vendite.service');

exports.createVendita = async (req, res, next) => {
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

exports.findAll = async (req, res, next) => {
  try {
    const vendite = await venditeService.findAll();

    res.status(200).json({
      success: true,
      data: vendite
    });

  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const vendita = await venditeService.getById(req.params.id);

    res.status(200).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};