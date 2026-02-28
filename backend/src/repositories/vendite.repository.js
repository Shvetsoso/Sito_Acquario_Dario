const insertVendita = async (client, id_cliente, totale) => {
  const result = await client.query(
    `INSERT INTO vendite (id_cliente, totale) 
        VALUES ($1, $2) RETURNING *`,
    [id_cliente, totale]
  );
  return result.rows[0];
};

const getArticoloById = async (client, id) => {
  const result = await client.query(
    `SELECT * FROM articoli 
        WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

const updateMagazzino = async (client, id, quantita) => {
  await client.query(
    `UPDATE articoli 
        SET quantita_magazzino = quantita_magazzino - $1 
        WHERE id = $2`,
    [quantita, id]
  );
};

module.exports = {
  insertVendita,
  getArticoloById,
  updateMagazzino
};