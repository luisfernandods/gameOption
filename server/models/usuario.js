var mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    usuario: { type: String, required: true, index: { unique: true } },
    senha: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    avatar: { type: String, required: true },
    perfil: {
      type: String,
      uppercase: true,
      enum: ["ADMINISTRADOR", "JOGADOR"]
    },
    dataCriacao: { type: Date }
  },
  { collection: "usuario" }
);

module.exports = mongoose.model("Usuario", schema);
