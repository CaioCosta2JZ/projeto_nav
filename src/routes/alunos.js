const express = require('express');
const router = express.Router();

// Listar Alunos - show.ejs
router.get('/', (req, res) => {
    res.render("alunos/show", { title: "Lista de Alunos" });
});

// Adicionar Aluno - add.ejs
router.get('/add', (req, res) => {
    res.render("alunos/add", { title: "Adicionar Aluno" });
});

// Editar Aluno - edit.ejs
router.get('/edit', (req, res) => {
    res.render("alunos/edit", { title: "Editar Aluno" });
});

module.exports = router;
