const { model, Schema } = require("mongoose");

const autoSchema = new Schema({
  id: {
    type: Number,
    required: [true, "el id es requerido"],
    unique: true,
  },
  modelo: {
    type: String,
    required: [true, "el modelo es requerido"],
    unique: false,
  },
  anio: {
    type: Number,
    required: [true, "el año es requerido"],
    unique: false,
  },
  marca: {
    type: String,
    required: [true, "el modelo es requerido"],
    unique: false,
  },
  fabricacion: {
    type: Date,
    required: false,
    unique: false,
  },
  precio: {
    type: Number,
    required: [true, "el precio es requerido"],
    unique: false,
  },
});

const autoModel = model("Auto", autoSchema);

module.exports = autoModel;
