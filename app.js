const express = require("express");
const path = require("path");
const app = express();

<<<<<<< HEAD
// Certifique-se de que o caminho está entre aspas e corrigido para acessar o diretório "public/assets"
app.use(express.static(path.join(__dirname, "public/assets")));

=======
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, public/assets)))
 
=======
// Configurar a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

>>>>>>> 6d314a2a40ecb1c4ee01bfda2d1bb85176a3675e
>>>>>>> ddb626db0fb91774c883fc63b050f0b449f2ad1b
// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

<<<<<<< HEAD
// Corrigir a importação das rotas e garantir que elas apontem para o arquivo correto
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const quemsomosRouter = require("./routes/quemsomos"); // Ajuste para o caminho correto
=======
// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
<<<<<<< HEAD
 
const quemsomosRouter = require("./routes/index");
>>>>>>> ddb626db0fb91774c883fc63b050f0b449f2ad1b
app.use("/quemsomos", quemsomosRouter);

// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

<<<<<<< HEAD
const alunoRouter = require("./routes/alunos"); // Ajuste para o caminho correto
app.use("/alunos", alunoRouter);

// Configuração do servidor para uso no Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
=======
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
>>>>>>> ddb626db0fb91774c883fc63b050f0b449f2ad1b
});
