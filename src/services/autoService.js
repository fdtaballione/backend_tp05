const autoModel = require("../models/autoModel");

const getAutoService = async () => {
  console.log("buscara todos los autos");
  const autos = await autoModel.find();
  console.log(autos);
  return autos;
};

const getAutoByIdService = async (req) => {
  const id = req.params.id;
  const auto = await autoModel.findOne({ id });
  return auto;
};

const getAutoByMarcaService = async (req, marca) => {
  console.log("se buscara con la marca ", marca);
  const autos = await autoModel.find({ marca: marca });

  console.log(autos);
  return autos;
};

const getAutoByModelosService = async (req, modelo) => {
  const autos = await autoModel.find({ modelo });
  return autos;
};

const addAutoService = async (req) => {
  const auto = req.body;
  const newAuto = new autoModel(auto);
  await newAuto.save();
  console.log(auto);
  return `Se agregó el auto ${auto.modelo}`;
};

const updateAutoService = async (req) => {
  const { id } = req.params;
  const newValsAuto = req.body;

  const auto = await autoModel.findOne({ id });
  if (auto == null) return "Auto no encontrado. No se puede modificar";

  auto.modelo = newValsAuto.modelo;
  auto.anio = newValsAuto.anio;
  auto.marca = newValsAuto.marca;
  auto.fabricacion = newValsAuto.fabricacion;
  auto.precio = newValsAuto.precio;

  await auto.save();

  return `se modificaron los datos del auto id= ${auto.id}`;
};

const deleteAutoService = async (req) => {
  const id = req.params.id;
  const reponse = await autoModel.deleteOne({ id });
  if (reponse.deletedCount == 0)
    throw new Error("No se encontró el auto a eliminar");
  return `Se eliminó el auto id= ${id}`;
};

module.exports = {
  getAutoService,
  getAutoByIdService,
  getAutoByMarcaService,
  getAutoByModelosService,
  updateAutoService,
  deleteAutoService,
  addAutoService,
};
