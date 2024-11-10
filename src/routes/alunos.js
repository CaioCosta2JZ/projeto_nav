const express = require('express');
const router = express.Router();

// Listar Alunos - show.ejs
router.get('/', async(req, res) => {
    res.render("base", { 
        title: "Alunos",
        view: "alunos/show" 
    });
});

// Adicionar Aluno - add.ejs
router.get('/add', async(req, res) => {
    res.render("base", { 
        title: "Adicionar Aluno",
        view: "alunos/add" 
    });
});

// Editar Aluno - edit.ejs
router.get('/edit', async(req, res) => {
    res.render("base", { 
        title: "Editar Aluno",
        view: "alunos/edit"  
    });
});

module.exports = router;
