const service = require('../services/articoli.service');

exports.createArticolo = async (req, res, next) => {
  try {
    const articolo = await service.createArticolo(req.body);
    res.status(201).json({
      success: true,
      data: articolo
    });

  } catch (err) {
    next(err);
  }
};

exports.updateArticolo = async (req, res) => {
  res.json({ message: "update funziona" });
};

exports.getAllArticoli = async (req, res, next) => {
  try {
    const articoli = await service.getAllArticoli();
    res.status(200).json({
      success: true,
      data: articoli
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllPesci = async (req, res, next) => {
  try {
    const pesci = await service.getAllPesci();
    res.status(200).json({
      success: true,
      data: pesci
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllAcquari = async (req, res, next) => {
  try {
    const acquari = await service.getAllAcquari();
    res.status(200).json({
      success: true,
      data: acquari
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllAttrezzature = async (req, res, next) => {
  try {
    const attrezzature = await service.getAllAttrezzature();
    res.status(200).json({
      success: true,
      data: attrezzature
    });
  } catch (err) {
    next(err);
  }
};
exports.getAllProdotti = async (req, res, next) => {
  try {
    const prodotti = await service.getAllProdotti();
    res.status(200).json({
      success: true,
      data: prodotti
    });
  } catch (err) {
    next(err);
  }
};

// GET BY ID --------------------------------------------------------------

exports.getArticoloByName = async (req, res, next) => {
  try {
    const articolo = await service.getArticoliByName(req.params.nome);
    res.status(200).json({
      success: true,
      data: articolo
    });
  } catch (err) {
    next(err);
  }
};

exports.updateArticolo = async (req, res, next) => {
  try {
    const articolo = await service.updateArticolo(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: articolo
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteArticolo = async (req, res, next) => {
  try {
    const result = await service.deleteArticolo(req.params.id);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (err) {
    next(err);
  }
};

exports.filterArticoli = async (req,res,next)=>{

 try{

  const articoli = await service.filterArticoli(req.query)

  res.json({
   success:true,
   data:articoli
  })

 }catch(err){
  next(err)
 }

}