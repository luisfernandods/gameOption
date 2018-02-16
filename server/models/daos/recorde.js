var Recorde = require("../recorde");

module.exports = {
  listar: function() {
    return Recorde.find({});
  }
};
