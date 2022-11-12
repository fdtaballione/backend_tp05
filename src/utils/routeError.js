const routeError = async (req, res) => {
  res.status(404).json({
    error: -1,
    description: `El método ${req.method} de la ruta ${req.url} es inválida. Por favor chequea e intenta nuevamente`,
  });
};

module.exports = routeError;
