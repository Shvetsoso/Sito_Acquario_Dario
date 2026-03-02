const pool = require('../config/db');

exports.create = async (id_articolo, quantita) => {
  await pool.query(
    `INSERT INTO magazzino (id_articolo, quantita)
     VALUES ($1, $2)`,
    [id_articolo, quantita]
  );
};

exports.getByArticoloId = async (client, id) => {
  const result = await client.query(
    `SELECT * FROM magazzino
     WHERE id_articolo = $1`,
    [id]
  );

  return result.rows[0];
};

exports.updateQuantita = async (client, id, quantita) => {
  await client.query(
    `UPDATE magazzino
     SET quantita = quantita - $1
     WHERE id_articolo = $2`,
    [quantita, id]
  );
};