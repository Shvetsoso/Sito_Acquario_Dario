const pool = require('../config/db');

exports.createArticolo = async (client, data) => {

  const result = await client.query(
    `INSERT INTO articoli
    (nome, prezzo, descrizione, id_categoria, tipo)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *`,
    [
      data.nome,
      data.prezzo,
      data.descrizione,
      data.id_categoria,
      data.tipo
    ]
  );

  return result.rows[0];

};

exports.insertPesce = async (client,id,data) => {

await client.query(
  `INSERT INTO pesci
  (id_articolo,specie,temperatura_min,temperatura_max,acqua_dolce,dimensione_media)
  VALUES($1,$2,$3,$4,$5,$6)`,
  [
    id,
    data.specie,
    data.temperatura_min,
    data.temperatura_max,
    data.acqua_dolce,
    data.dimensione_media
  ]);

};


exports.insertAcquario = async (client,id,d)=>{

await client.query(
  `INSERT INTO acquari
  (id_articolo,litri,lunghezza,larghezza,altezza,acqua_dolce,con_mobile)
  VALUES($1,$2,$3,$4,$5,$6,$7)`,
  [
    id,
    d.litri,
    d.lunghezza,
    d.larghezza,
    d.altezza,
    d.acqua_dolce,
    d.con_mobile
  ]);

};


exports.insertProdotto = async (client,id,d)=>{

await client.query(
`INSERT INTO prodotti
(id_articolo,marca,tipo_prodotto,peso_gm,data_scadenza)
VALUES($1,$2,$3,$4,$5)`,
[
id,
d.marca,
d.tipo_prodotto,
d.peso_gm,
d.data_scadenza
]);

};


exports.insertAttrezzatura = async (client,id,d)=>{

await client.query(
`INSERT INTO attrezzature
(id_articolo,tipo_attrezzatura)
VALUES($1,$2)`,
[
id,
d.tipo_attrezzatura
]);

};

exports.insertMagazzino = async (client,id,quantita)=>{

await client.query(
`INSERT INTO magazzino (id_articolo,quantita)
VALUES ($1,$2)`,
[id,quantita]
);

};


exports.updateMagazzino = async (client,id,quantita)=>{

await client.query(
`UPDATE magazzino
SET quantita=$1
WHERE id_articolo=$2`,
[quantita,id]
);

};

exports.updateArticolo = async (client,id,data)=>{

const result = await client.query(
`UPDATE articoli
SET nome=$1,
prezzo=$2,
descrizione=$3,
id_categoria=$4
WHERE id=$5
RETURNING *`,
[
data.nome,
data.prezzo,
data.descrizione,
data.id_categoria,
id
]);

return result.rows[0];

};

exports.updatePesce = async (client,id,d)=>{

await client.query(
`UPDATE pesci
SET specie=$1,
temperatura_min=$2,
temperatura_max=$3,
acqua_dolce=$4,
dimensione_media=$5
WHERE id_articolo=$6`,
[
d.specie,
d.temperatura_min,
d.temperatura_max,
d.acqua_dolce,
d.dimensione_media,
id
]);

};


exports.updateAcquario = async (client,id,d)=>{

await client.query(
`UPDATE acquari
SET litri=$1,
lunghezza=$2,
larghezza=$3,
altezza=$4,
acqua_dolce=$5,
con_mobile=$6
WHERE id_articolo=$7`,
[
d.litri,
d.lunghezza,
d.larghezza,
d.altezza,
d.acqua_dolce,
d.con_mobile,
id
]);

};


exports.updateProdotto = async (client,id,d)=>{

await client.query(
`UPDATE prodotti
SET marca=$1,
tipo_prodotto=$2,
peso_gm=$3,
data_scadenza=$4
WHERE id_articolo=$5`,
[
d.marca,
d.tipo_prodotto,
d.peso_gm,
d.data_scadenza,
id
]);

};


exports.updateAttrezzatura = async (client,id,d)=>{

await client.query(
`UPDATE attrezzature
SET tipo_attrezzatura=$1
WHERE id_articolo=$2`,
[
d.tipo_attrezzatura,
id
]);

};

exports.deleteDettagli = async (client,id)=>{

await client.query(`DELETE FROM pesci WHERE id_articolo=$1`,[id]);
await client.query(`DELETE FROM acquari WHERE id_articolo=$1`,[id]);
await client.query(`DELETE FROM prodotti WHERE id_articolo=$1`,[id]);
await client.query(`DELETE FROM attrezzature WHERE id_articolo=$1`,[id]);

};

exports.softDelete = async (id)=>{

await pool.query(
`UPDATE articoli
SET attivo=false
WHERE id=$1`,
[id]
);

};

exports.findAcquari = async ()=>{

  const result = await pool.query("SELECT * FROM acquari");

  return result.rows;

};

exports.findPesci = async ()=>{

  const result = await pool.query("SELECT * FROM pesci");

  return result.rows;

};

exports.findProdotti = async ()=>{

  const result = await pool.query("SELECT * FROM prodotti");

  return result.rows;

};

exports.findAttrezzature = async ()=>{

  const result = await pool.query("SELECT * FROM attrezzature");

  return result.rows;

};

exports.findArticoli = async ()=>{

  const result = await pool.query("SELECT * FROM articoli");

  return result.rows;

};

// GETTER BY ID -------------------------------------------------------
/*
exports.findAcquariById = async (id) => {

const result = await pool.query(`

  SELECT * FROM acquari WHERE id = ?

`,[id]);

return result.rows[0];

};

exports.findPesciById = async (id) => {

const result = await pool.query(`

  SELECT * FROM pesci WHERE id = ?

`,[id]);

return result.rows[0];

};

exports.findProdottiById = async (id) => {

const result = await pool.query(`

  SELECT * FROM prodotti WHERE id = ?

`,[id]);

return result.rows[0];

};

exports.findAttrezzatureById = async (id) => {

const result = await pool.query(`

  SELECT * FROM attrezzature WHERE id = ?

`,[id]);

return result.rows[0];

};
*/
exports.findArticoliByName = async (nome) => {

const result = await pool.query(`

  SELECT * FROM articoli WHERE nome = ?

`,[nome]);

return result.rows[0];

};


/*
exports.filter = async (filters)=>{

let query = `
SELECT *
FROM articoli
WHERE attivo=true
`;

let values=[];
let i=1;

if(filters.tipo){

query+=` AND tipo=$${i}`;
values.push(filters.tipo);
i++;

}

if(filters.categoria){

query+=` AND id_categoria=$${i}`;
values.push(filters.categoria);
i++;

}

if(filters.minPrezzo){

query+=` AND prezzo >= $${i}`;
values.push(filters.minPrezzo);
i++;

}

if(filters.maxPrezzo){

query+=` AND prezzo <= $${i}`;
values.push(filters.maxPrezzo);
i++;

}

if(filters.search){

query+=` AND nome ILIKE $${i}`;
values.push(`%${filters.search}%`);
i++;

}

query+=` ORDER BY id DESC`;

const result = await pool.query(query,values);

return result.rows;

};

*/