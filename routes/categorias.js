const express = require('express');
const router = express.Router();


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