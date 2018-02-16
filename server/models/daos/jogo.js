const Jogo = require("./../jogo");

module.exports = {
  listar: function() {
    return Jogo.find({});
  }
};
