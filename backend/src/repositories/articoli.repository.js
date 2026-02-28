const pool = require('../config/db');

exports.create = async ({ nome, prezzo, quantita_magazzino, descrizione, categoria }) => {
  const result = await pool.query(
    `INSERT INTO articoli (nome, prezzo, quantita_magazzino, descrizione, categoria)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [nome, prezzo, quantita_magazzino, descrizione, categoria]
  );

  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query(
    `SELECT * FROM articoli 
        ORDER BY id DESC`
  );
  return result.rows;
};

exports.findById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM articoli 
        WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

exports.update = async (id, { nome, prezzo, quantita_magazzino, descrizione, categoria }) => {
  const result = await pool.query(
    `UPDATE articoli
     SET nome=$1, prezzo=$2, quantita_magazzino=$3, descrizione=$4, categoria=$5
     WHERE id=$6
     RETURNING *`,
    [nome, prezzo, quantita_magazzino, descrizione, categoria, id]
  );

  return result.rows[0];
};