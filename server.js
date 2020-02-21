const express = require("express");
const server = express();

server.use(express.static("public"));

//template engine - nunjucks
const nunjuncks = require("nunjucks")
nunjuncks.configure("./",{
  express:server
});

// LISTA DE DOADORES
const donors = [
  {
    name: "Johan Back",
    blood: "AB+"
  },
  {
    name: "Usuario Sobrenome",
    blood: "O+"
  },
  {
    name: "Usuario Sobrenome",
    blood: "A-"
  },
  {
    name: "Usuario Sobrenome",
    blood: "B-"
  },
]



server.get("/", function(req, res){
  return res.render("index.html", {donors})
});

//Ligar servidor porta 3000
server.listen(3000, function(){
  console.log("Ok")
});

