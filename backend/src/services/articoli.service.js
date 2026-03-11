const pool = require('../config/db');
const repository = require('../repositories/articoli.repository');
exports.createArticolo = async (data) => {

  const client = await pool.connect();

  try {

    await client.query('BEGIN');

    const articolo = await repository.createArticolo(client, data);

    switch(data.tipo){

      case "pesce":
        await repository.insertPesce(client, articolo.id, data.dettagli);
      break;

      case "acquario":
        await repository.insertAcquario(client, articolo.id, data.dettagli);
      break;

      case "prodotto":
        await repository.insertProdotto(client, articolo.id, data.dettagli);
      break;

      case "attrezzatura":
        await repository.insertAttrezzatura(client, articolo.id, data.dettagli);
      break;

    }

    await repository.insertMagazzino(client, articolo.id, data.quantita);

    await client.query('COMMIT');

    return articolo;

  } catch(err){

    await client.query('ROLLBACK');
    throw err;

  } finally {

    client.release();

  }

};

// GET ALL --------------------------------------------------------

exports.getAllArticoli = async () => {

  const articoli = await repository.findArticoli();

  if (!articoli) {
    throw new ApiError(404, 'non sono presenti articoli');
  }

  return articoli;

};

exports.getAllPesci = async () => {

  const articoli = await repository.findPesci();

  if (!articoli) {
    throw new ApiError(404, 'non sono presenti pesci');
  }

  return articoli;

};

exports.getAllProdotti = async () => {

  const articoli = await repository.findProdotti();

  if (!articoli) {
    throw new ApiError(404, 'non sono presenti prodotti');
  }

  return articoli;

};

exports.getAllAcquari = async () => {

  const articoli = await repository.findAcquari();

  if (!articoli) {
    throw new ApiError(404, 'non sono presenti acquari');
  }

  return articoli;

};

exports.getAllAttrezzature = async () => {

  const articoli = await repository.findAttrezzature();

  if (!articoli) {
    throw new ApiError(404, 'non sono presenti attrezzature');
  }

  return articoli;

};

// GET BY ID -------------------------------------------------------

exports.getArticoloByNme = async (nome) => {

  const articolo = await repository.findArticoliByName(nome);

  if (!articolo) {
    throw new ApiError(404, 'Articolo non trovato');
  }

  return articolo;

};

exports.updateArticolo = async (id,data)=>{

const client = await pool.connect();

try{

await client.query("BEGIN");

const articolo = await repository.updateArticolo(client,id,data);

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

await client.query("COMMIT");

return articolo;

}catch(err){

await client.query("ROLLBACK");
throw err;

}finally{

client.release();

}

};

exports.deleteArticolo = async (id) => {
  const articolo = await repository.findById(id);

  const ApiError = require('../utils/ApiError');

  if (!articolo) {
    throw new ApiError(404, 'Articolo non trovato');
  }

  await repository.softDelete(id);

  return { message: 'Articolo disattivato con successo' };
};

exports.filterArticoli = async (filters)=>{

return await repository.filter(filters);

};