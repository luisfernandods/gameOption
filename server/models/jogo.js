var mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    nomeJogo: { type: String, required: true, index: { unique: true } },
    imagem: { type: String },
    dataModificacao: { type: Date, required: true },
    dataCriacao: { type: Date, required: true }
  },
  { collection: "jogo" }
);

module.exports = mongoose.model("Jogo", schema);
