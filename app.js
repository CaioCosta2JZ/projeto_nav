const express = require("express");
const path = require("path");
const app = express();

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, public/assets)))
 
=======
// Configurar a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

>>>>>>> 6d314a2a40ecb1c4ee01bfda2d1bb85176a3675e
// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
<<<<<<< HEAD
 
const quemsomosRouter = require("./routes/index");
app.use("/quemsomos", quemsomosRouter);

// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

const alunoRouter = require("./routes/categorias");
app.use("/alunos", alunoRouter);
 

 
=======

// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");

app.use("/categorias", categoriaRouter);

>>>>>>> 6d314a2a40ecb1c4ee01bfda2d1bb85176a3675e
// Iniciar o servidor e sincronizar com o banco de dados

app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});
