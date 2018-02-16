var mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    usuario: { type: String, required: true },
    nomeJogo: { type: String, required: true },
    pontuacao: { type: Number, required: true },
    data: { type: Date, required: true }
  },
  { collection: "recorde" }
);

module.exports = mongoose.model("Recorde", schema);
