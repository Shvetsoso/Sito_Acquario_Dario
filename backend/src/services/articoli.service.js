const repository = require('../repositories/articoli.repository');

exports.createArticolo = async (data) => {
  return await repository.create(data);
};

exports.getAllArticoli = async () => {
  return await repository.findAll();
};

exports.getArticoloById = async (id) => {
  const articolo = await repository.findById(id);

  const ApiError = require('../utils/ApiError');

  if (!articolo) {
    throw new ApiError(404, 'Articolo non trovato');
  }
  return articolo;
};

exports.updateArticolo = async (id, data) => {
  return await repository.update(id, data);
};