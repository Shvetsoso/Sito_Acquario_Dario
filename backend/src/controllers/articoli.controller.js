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

exports.getArticoloById = async (req, res, next) => {
  try {
    const articolo = await service.getArticoloById(req.params.id);
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

const articoli = await service.filterArticoli(req.query);

res.json({
success:true,
data:articoli
});

}catch(err){

next(err);

}

};