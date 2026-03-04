const pool = require('../config/db');
const venditeRepo = require('../repositories/vendite.repository');
const magazzinoRepo = require('../repositories/magazzino.repository');
const ApiError = require('../utils/ApiError');

const createVendita = async (data) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    let totale = 0;

    for (const item of data.articoli) {

      const articolo = await venditeRepo.getArticoloById(
        client,
        item.id_articolo
      );

      if (!articolo) {
        throw new ApiError(404, 'Articolo non trovato');
      }

      const magazzino = await magazzinoRepo.getByArticoloId(
        client,
        item.id_articolo
      );

      if (!magazzino || magazzino.quantita < item.quantita) {
        throw new ApiError(409, 'Quantità insufficiente');
      }

      totale += articolo.prezzo * item.quantita;
    }
    const vendita = await venditeRepo.createVendita(
      client,
      data.id_cliente,
      totale
    );

    for (const item of data.articoli) {

      const articolo = await venditeRepo.getArticoloById(
        client,
        item.id_articolo
      );

      await venditeRepo.insertDettaglio(
        client,
        vendita.id,
        item.id_articolo,
        item.quantita,
        articolo.prezzo
      );

      await magazzinoRepo.updateQuantita(
        client,
        item.id_articolo,
        item.quantita
      );
    }

    await client.query('COMMIT');
    return vendita;

  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const findAll = async () => {
  return await venditeRepo.findAll();
};

const getById = async (id) => {
  const vendita = await venditeRepo.findById(id);

  if (!vendita.vendita) {
    throw new ApiError(404, 'Vendita non trovata');
  }

  return vendita;
};

module.exports = {
  createVendita,
  findAll,
  getById
};