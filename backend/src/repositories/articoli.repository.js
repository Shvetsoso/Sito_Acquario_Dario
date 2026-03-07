const pool = require('../config/db');

exports.createArticolo = async (client, data) => {

  const result = await client.query(
    `INSERT INTO articoli (nome, prezzo, descrizione, id_categoria, tipo)
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

exports.insertPesce = async (client, id, d) => {

  await client.query(
    `INSERT INTO pesci
     (id_articolo, specie, temperatura_min, temperatura_max, acqua_dolce, dimensione_media)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [id, d.specie, d.temperatura_min, d.temperatura_max, d.acqua_dolce, d.dimensione_media]
  );

};

exports.insertAcquario = async (client, id, d) => {

  await client.query(
    `INSERT INTO acquari
     (id_articolo, litri, lunghezza, larghezza, altezza, acqua_dolce, con_mobile)
     VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [id, d.litri, d.lunghezza, d.larghezza, d.altezza, d.acqua_dolce, d.con_mobile]
  );

};

exports.insertProdotto = async (client, id, d) => {

  await client.query(
    `INSERT INTO prodotti
     (id_articolo, marca, tipo_prodotto, peso_gm, data_scadenza)
     VALUES ($1,$2,$3,$4,$5)`,
    [id, d.marca, d.tipo_prodotto, d.peso_gm, d.data_scadenza]
  );

};

exports.insertAttrezzatura = async (client, id, d) => {

  await client.query(
    `INSERT INTO attrezzature
     (id_articolo, tipo_attrezzatura)
     VALUES ($1,$2)`,
    [id, d.tipo]
  );

};

exports.insertMagazzino = async (client, id, quantita) => {

  await client.query(
    `INSERT INTO magazzino (id_articolo, quantita)
     VALUES ($1,$2)`,
    [id, quantita]
  );

};

exports.findAll = async () => {

  const result = await pool.query(`

SELECT
a.id,
a.nome,
a.prezzo,
a.descrizione,
a.tipo,
c.nome as categoria,
m.quantita,

p.specie,
p.temperatura,
p.acqua,

ac.litri,
ac.larghezza,
ac.altezza,

pr.marca,
pr.tipo_prodotto,

at.tipo as tipo_attrezzatura,
at.potenza

FROM articoli a

LEFT JOIN categorie c ON a.id_categoria=c.id
LEFT JOIN magazzino m ON m.id_articolo=a.id

LEFT JOIN pesci p ON p.id_articolo=a.id
LEFT JOIN acquari ac ON ac.id_articolo=a.id
LEFT JOIN prodotti pr ON pr.id_articolo=a.id
LEFT JOIN attrezzature at ON at.id_articolo=a.id

WHERE a.attivo=true
ORDER BY a.id DESC

`);

  return result.rows;
};

exports.findById = async (id) => {

const result = await pool.query(`

SELECT
a.id,
a.nome,
a.prezzo,
a.descrizione,
a.tipo,
a.id_categoria,
c.nome as categoria,
m.quantita,

p.specie,
p.temperatura_min,
p.temperatura_max,
p.acqua_dolce,
p.dimensione_media,

ac.litri,
ac.lunghezza,
ac.larghezza,
ac.altezza,
ac.acqua_dolce,
ac.con_mobile,

pr.marca,
pr.tipo_prodotto,
pr.peso_gm,
pr.data_scadenza,

at.tipo_attrezzatura

FROM articoli a

LEFT JOIN categorie c ON a.id_categoria=c.id
LEFT JOIN magazzino m ON m.id_articolo=a.id

LEFT JOIN pesci p ON p.id_articolo=a.id
LEFT JOIN acquari ac ON ac.id_articolo=a.id
LEFT JOIN prodotti pr ON pr.id_articolo=a.id
LEFT JOIN attrezzature at ON at.id_articolo=a.id

WHERE a.id=$1
AND a.attivo=true

`,[id]);

return result.rows[0];

};

exports.updateArticolo = async (id, data) => {

const client = await pool.connect();

try{

await client.query('BEGIN');

const articolo = await repository.update(client,id,data);

switch(data.tipo){

case "pesce":
await repository.updatePesce(client,id,data.dettagli);
break;

case "acquario":
await repository.updateAcquario(client,id,data.dettagli);
break;

case "prodotto":
await repository.updateProdotto(client,id,data.dettagli);
break;

case "attrezzatura":
await repository.updateAttrezzatura(client,id,data.dettagli);
break;

}

if(data.quantita !== undefined){

await repository.updateMagazzino(client,id,data.quantita);

}

await client.query('COMMIT');

return articolo;

}catch(err){

await client.query('ROLLBACK');
throw err;

}finally{

client.release();

}

};

exports.softDelete = async (id) => {
  await pool.query(
    `UPDATE articoli
     SET attivo = false
     WHERE id = $1`,
    [id]
  );
};

exports.filter = async (filters) => {

let query = `
SELECT *
FROM articoli
WHERE attivo=true
`;

let values = [];
let i = 1;

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

query += ` ORDER BY id DESC`;

const result = await pool.query(query,values);

return result.rows;

};