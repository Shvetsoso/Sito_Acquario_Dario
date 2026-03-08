const pool = require('../config/db');
const repository = require('../repositories/articoli.repository');
exports.createArticolo = async (data) => {

  const client = await pool.connect();

  try {

    await client.query('BEGIN');

    const articolo = await repository.createArticolo(client, data);

    switch(data.tipo){

      case "pesce":
        await repository.insertPesce(client, articolo.id, data.dettagli);
      break;

      case "acquario":
        await repository.insertAcquario(client, articolo.id, data.dettagli);
      break;

      case "prodotto":
        await repository.insertProdotto(client, articolo.id, data.dettagli);
      break;

      case "attrezzatura":
        await repository.insertAttrezzatura(client, articolo.id, data.dettagli);
      break;

    }

    await repository.insertMagazzino(client, articolo.id, data.quantita);

    await client.query('COMMIT');

    return articolo;

  } catch(err){

    await client.query('ROLLBACK');
    throw err;

  } finally {

    client.release();

  }

};
/*
exports.getAllArticoli = async () => {

  return await repository.findAll();

};
*/
exports.getArticoloById = async (id) => {

  const articolo = await repo.findById(id);

  if (!articolo) {
    throw new ApiError(404, 'Articolo non trovato');
  }

  return articolo;

};

exports.updateArticolo = async (id, data) => {
  return await repository.update(id, data);
};

exports.deleteArticolo = async (id) => {
  const articolo = await repository.findById(id);

  const ApiError = require('../utils/ApiError');

  if (!articolo) {
    throw new ApiError(404, 'Articolo non trovato');
  }

  await repository.softDelete(id);

  return { message: 'Articolo disattivato con successo' };
};

exports.filterArticoli = async (filters)=>{

return await repo.filter(filters);

};