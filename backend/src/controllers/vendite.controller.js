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
const insertDettaglio = async (req, res, next) => {
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
const findAll = async (req, res, next) => {
  try {

    const vendita = await venditeService.insertVendita(req.body);

    res.status(200).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};
const getArticoloById = async (req, res, next) => {
  try {

    const vendita = await venditeService.insertVendita(req.body);

    res.status(200).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};
const getById = async (req, res, next) => {
  try {

    const vendita = await venditeService.insertVendita(req.body);

    res.status(200).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};

module.exports = {
  insertVendita,
  insertDettaglio,
  getArticoloById,
  findAll,
  getById
};