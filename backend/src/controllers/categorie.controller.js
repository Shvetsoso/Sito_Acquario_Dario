const service = require('../services/categorie.service');

exports.createCategoria = async (req, res, next) => {
  try {
    const categoria = await service.createCategoria(req.body);

    res.status(201).json({
      success: true,
      data: categoria
    });

  } catch (err) {
    next(err);
  }
};

exports.getAllCategorie = async (req, res, next) => {
  try {
    const categorie = await service.getAllCategorie();

    res.status(200).json({
      success: true,
      data: categorie
    });

  } catch (err) {
    next(err);
  }
};

exports.getCategoriaById = async (req, res, next) => {
  try {
    const categoria = await service.getCategoriaById(req.params.id);

    res.status(200).json({
      success: true,
      data: categoria
    });

  } catch (err) {
    next(err);
  }
};

exports.updateCategoria = async (req, res, next) => {
  try {
    const categoria = await service.updateCategoria(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: categoria
    });

  } catch (err) {
    next(err);
  }
};

exports.deleteCategoria = async (req, res, next) => {
  try {
    const result = await service.deleteCategoria(req.params.id);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }
};