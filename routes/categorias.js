const express = require('express');
const router = express.Router();

// Listar categorias - show.ejs
router.get('/', async (req, res) => {
    res.render("alunos/show", {
        title: "Alunos"
    });
});

// Adicionar categorias - add.ejs
router.get('/add', async (req, res) => {
    res.render("alunos/add", {
        title: "Adicionar Alunos"
    });
});

// Editar categorias - edit.ejs
router.get('/edit', async (req, res) => {
    res.render("alunos/edit", {
        title: "Editar Alunos"
    });
});

module.exports = router;
