const pool = require('../config/db');

exports.createVendita = async (client, id_cliente, totale) => {
  const result = await client.query(
    `INSERT INTO vendite (id_cliente, totale)
     VALUES ($1, $2)
     RETURNING *`,
    [id_cliente, totale]
  );

  return result.rows[0];
};

exports.insertDettaglio = async (
  client,
  id_vendita,
  id_articolo,
  quantita,
  prezzo_unitario
) => {
  await client.query(
    `INSERT INTO dettaglio_vendita
     (id_vendita, id_articolo, quantita, prezzo_unitario)
     VALUES ($1, $2, $3, $4)`,
    [id_vendita, id_articolo, quantita, prezzo_unitario]
  );
};

exports.getArticoloById = async (client, id) => {
  const result = await client.query(
    `SELECT * FROM articoli
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query(`
    SELECT 
      v.id,
      v.data_vendita,
      v.totale,
      v.stato,
      c.nome,
      c.cognome
    FROM vendite v
    JOIN clienti c ON v.id_cliente = c.id
    ORDER BY v.data_vendita DESC
  `);

  return result.rows;
};

exports.findById = async (id) => {
  const vendita = await pool.query(`
    SELECT * FROM vendite WHERE id = $1
  `, [id]);

  const dettagli = await pool.query(`
    SELECT 
      d.quantita,
      d.prezzo_unitario,
      a.nome
    FROM dettaglio_vendita d
    JOIN articoli a ON d.id_articolo = a.id
    WHERE d.id_vendita = $1
  `, [id]);

  return {
    vendita: vendita.rows[0],
    articoli: dettagli.rows
  };
};