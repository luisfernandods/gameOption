var modelUsuario = require("../models/daos/usuario");
var fs = require("fs");

module.exports = {
  cadastrar: function(req, res) {
    console.log(req.body.nome);
    return modelUsuario
      .cadastrar(req.body.nome)
      .then(function() {
        res.json();
      })
      .catch(function(error) {
        res.json(error.message);
      });
  },

  listar: function(req, res) {
    return modelUsuario
      .listar()
      .then(function(usuarios) {
        res.json(usuarios);
      })
      .catch(function(error) {
        res.json(error.message);
      });
  }
};
