var Usuario = require("../usuario");

module.exports = {
  listar: function() {
    return Usuario.find({});
  }
};
