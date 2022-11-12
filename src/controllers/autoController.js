const {
  getAutoService,
  getAutoByIdService,
  getAutoByMarcaService,
  getAutoByModelosService,
  addAutoService,
  updateAutoService,
  deleteAutoService,
} = require("../services/autoService");

const getAutoController = async (req, res) => {
  try {
    const { marca, modelo } = req.query;
    if (marca) {
      const autos = await getAutoByMarcaService(req, marca);
      if (autos.length > 0) {
        res.status(200).json(autos);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron autos con esa marca" });
      return;
    }
    if (modelo) {
      const autos = await getAutoByModelosService(req, modelo);
      if (autos.length > 0) {
        res.status(200).json(autos);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron autos con ese modelo" });
      return;
    }

    const autos = await getAutoService();
    res.status(200).json(autos);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getAutoByIdController = async (req, res) => {
  try {
    const auto = await getAutoByIdService(req);
    if (auto) {
      res.status(200).json(auto);
      return;
    }
    res.status(200).json({ message: "Id de Auto no encontrada" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addAutoController = async (req, res) => {
  try {
    console.log("ingresa");
    const response = await addAutoService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateAutoController = async (req, res) => {
  console.log("ingresa al controller de la actualizacion");
  try {
    const respuestaUpdate = await updateAutoService(req);
    res.status(200).json({ message: respuestaUpdate });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteAutoController = async (req, res) => {
  try {
    const response = await deleteAutoService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  getAutoController,
  getAutoByIdController,
  addAutoController,
  updateAutoController,
  deleteAutoController,
};
