const express = require("express");
const path = require("path");

const app = express();

// Configurar EJS como view engine e definir diretório de views
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Configurar diretório para arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Importar rotas
const indexRouter = require("./src/routes/index");
const alunoRouter = require("./src/routes/alunos");
const quemsomosRouter = require("./src/routes/index");



// Usar as rotas
app.use("/", indexRouter);
app.use("/alunos", alunoRouter);
app.use("/quemsomos", quemsomosRouter);

// Configurar porta


module.exports = app;
