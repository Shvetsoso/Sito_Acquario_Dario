const pool = require('../config/db');

exports.create = async ({ nome, prezzo, descrizione, id_categoria }) => {
  const result = await pool.query(
    `INSERT INTO articoli (nome, prezzo, descrizione, id_categoria)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [nome, prezzo, descrizione, id_categoria]
  );

  return result.rows[0];
};

exports.findById = async (id) => {
  const result = await pool.query(
    `SELECT a.*, c.nome AS categoria
     FROM articoli a
     JOIN categorie c ON a.id_categoria = c.id
     WHERE a.id = $1`,
    [id]
  );

  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query(`
    SELECT 
      a.id,
      a.nome,
      a.prezzo,
      a.descrizione,
      c.nome AS categoria,
      m.quantita
    FROM articoli a
    JOIN categorie c ON a.id_categoria = c.id
    LEFT JOIN magazzino m ON m.id_articolo = a.id
    ORDER BY a.id DESC
  `);

  return result.rows;
};

exports.update = async (id, { nome, prezzo, descrizione, id_categoria }) => {
  const result = await pool.query(
    `UPDATE articoli
     SET nome=$1,
         prezzo=$2,
         descrizione=$3,
         id_categoria=$4,
         updated_at=CURRENT_TIMESTAMP
     WHERE id=$5
     RETURNING *`,
    [nome, prezzo, descrizione, id_categoria, id]
  );

  return result.rows[0];
};

exports.softDelete = async (id) => {
  await pool.query(
    `UPDATE articoli
     SET attivo = false
     WHERE id = $1`,
    [id]
  );
};