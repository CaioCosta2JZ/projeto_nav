const express = require('express');
const router = express.Router();

<<<<<<< HEAD
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
=======

//Listar as categorias - show.ejs
router.get('/', async (req, res) => {
    res.render("base", {
        title: "Alunos",
        view: "alunos/show"
    });
});



//Add categorias - add.ejs
router.get('/add', async (req, res) => {
    res.render("base", {
        title: "Adicionar Alunos",
        view: "alunos/add"
    });
});

//Editar categorias - edit.ejs
router.get('/edit', async (req, res) => {
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit"
    });
});

module.exports = router;
>>>>>>> ddb626db0fb91774c883fc63b050f0b449f2ad1b
