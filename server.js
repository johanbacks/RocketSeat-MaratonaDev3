const express = require("express");
const server = express();
//arquivos staticos da pasta public
server.use(express.static("public"));

//express habilitar body
server.use(express.urlencoded({ extended:true }));

// Conf conection DB
const Pool =  require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: "0808",
  host:"localhost",
  port: 5432,
  database: "doe"
})

//template engine - nunjucks
const nunjuncks = require("nunjucks")
nunjuncks.configure("./",{
  express:server,
  noCache:true,
});




server.get("/", function(req, res){
  
  db.query("SELECT * FROM donors", function(err,result){
    if (err) return res.send("Erro de banco de dados.");
    const donors = result.rows; 
    return res.render("index.html", {donors})
  })
});

server.post("/", function(req, res){
  const name = req.body.name 
  const email = req.body.email 
  const blood = req.body.blood  

  if (name == "" || email == "" || blood == ""){  
    return res.send("Todos os campos são obrigadorios")
  }
  
  const query = `INSERT INTO donors ("name", "email", "blood") 
                  VALUES($1,$2,$3 )`

  const values = [name,email,blood];
  db.query(query ,values , function(err){
    if (err) 
    return res.send("Erro no banco de dados.")

    return res.redirect("/")
   
  });
 
});

//Ligar servidor porta 3000
server.listen(3000, function(){
  console.log("Ok")
});

