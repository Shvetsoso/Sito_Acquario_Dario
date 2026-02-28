const pool = require('../config/db');

exports.create = async ({ nome, cognome, telefono, email, data_registrazione, username, indirizzo, password }) => {
  const result = await pool.query(
    `INSERT INTO clienti (nome, cognome, telefono, email, data_registrazione, username, indirizzo, password)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [nome, cognome, telefono, email, data_registrazione, username, indirizzo, password]
  );

  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query(
    `SELECT * FROM clienti 
        ORDER BY id DESC`
  );
  return result.rows;
};

exports.findById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM clienti 
        WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

exports.update = async (id, { nome, cognome, telefono, email, data_registrazione, username, indirizzo, password }) => {
  const result = await pool.query(
    `UPDATE clienti
     SET nome=$1, cognome=$2, telefono=$3, email=$4, data_registrazione=$5, username=$6, indirizzo=$7, password=$8
     WHERE id=$9
     RETURNING *`,
    [nome, cognome, telefono, email, data_registrazione, username, indirizzo, password, id]
  );

  return result.rows[0];
};