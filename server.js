var http = require("http");
var app = require("./server/config/express");
require("./server/config/database")("localhost/GameOption");

http.createServer(app).listen(3000, function() {
  console.log("Servidor Iniciado");
});
