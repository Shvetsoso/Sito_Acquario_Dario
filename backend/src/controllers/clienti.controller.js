const service = require('../services/clienti.service');

exports.createCliente = async (req, res, next) => {
  try {
    const cliente = await service.createCliente(req.body);

    res.status(201).json({
      success: true,
      data: cliente
    });

  } catch (err) {
    next(err);
  }
};

exports.getAllClienti = async (req, res, next) => {
  try {
    const clienti = await service.getAllClienti();

    res.status(200).json({
      success: true,
      data: clienti
    });

  } catch (err) {
    next(err);
  }
};

exports.getClienteById = async (req, res, next) => {
  try {
    const cliente = await service.getClienteById(req.params.id);

    res.status(200).json({
      success: true,
      data: cliente
    });

  } catch (err) {
    next(err);
  }
};

exports.updateCliente = async (req, res, next) => {
  try {
    const cliente = await service.updateCliente(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: cliente
    });

  } catch (err) {
    next(err);
  }
};