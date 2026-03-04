const repository = require('../repositories/categorie.repository');
const ApiError = require('../utils/ApiError');

exports.createCategoria = async (data) => {
  return await repository.create(data);
};

exports.getAllCategorie = async () => {
  return await repository.findAll();
};

exports.getCategoriaById = async (id) => {
  const categoria = await repository.findById(id);

  if (!categoria) {
    throw new ApiError(404, 'Categoria non trovata');
  }

  return categoria;
};

exports.updateCategoria = async (id, data) => {
  const categoria = await repository.findById(id);

  if (!categoria) {
    throw new ApiError(404, 'Categoria non trovata');
  }

  return await repository.update(id, data);
};

exports.deleteCategoria = async (id) => {
  const categoria = await repository.findById(id);

  if (!categoria) {
    throw new ApiError(404, 'Categoria non trovata');
  }

  await repository.delete(id);

  return { message: 'Categoria eliminata con successo' };
};