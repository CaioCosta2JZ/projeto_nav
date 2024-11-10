const express = require("express");
const path = require("path");
const app = express();

// Certifique-se de que o caminho está entre aspas e corrigido para acessar o diretório "public/assets"
app.use(express.static(path.join(__dirname, "public/assets")));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Corrigir a importação das rotas e garantir que elas apontem para o arquivo correto
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const quemsomosRouter = require("./routes/quemsomos"); // Ajuste para o caminho correto
app.use("/quemsomos", quemsomosRouter);

// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

const alunoRouter = require("./routes/alunos"); // Ajuste para o caminho correto
app.use("/alunos", alunoRouter);

// Configuração do servidor para uso no Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
