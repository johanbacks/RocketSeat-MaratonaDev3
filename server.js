const express = require("express");
const server = express();

server.get("/", function(req, res){
  return res.send("ok dev3")
});

//Ligar servidor porta 3000
server.listen(3000);

