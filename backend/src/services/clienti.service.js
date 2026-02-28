const repository = require('../repositories/clienti.repository');

exports.createCliente = async (data) => {
  return await repository.create(data);
};

exports.getAllClienti = async () => {
  return await repository.findAll();
};

exports.getClienteById = async (id) => {
  const cliente = await repository.findById(id);

  const ApiError = require('../utils/ApiError');

  if (!cliente) {
    throw new ApiError(404, 'Cliente non trovato');
  }
  return cliente;
};

exports.updateCliente = async (id, data) => {
  return await repository.update(id, data);
};