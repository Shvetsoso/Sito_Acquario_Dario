const pool = require('../config/db');

exports.create = async ({ nome }) => {
  const result = await pool.query(
    `INSERT INTO categorie (nome)
     VALUES ($1)
     RETURNING *`,
    [nome]
  );

  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query(
    `SELECT * FROM categorie
     ORDER BY id DESC`
  );

  return result.rows;
};

exports.findById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM categorie
     WHERE id = $1`,
    [id]
  );

  return result.rows[0];
};

exports.update = async (id, { nome }) => {
  const result = await pool.query(
    `UPDATE categorie
     SET nome = $1
     WHERE id = $2
     RETURNING *`,
    [nome, id]
  );

  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query(
    `DELETE FROM categorie
     WHERE id = $1`,
    [id]
  );
};