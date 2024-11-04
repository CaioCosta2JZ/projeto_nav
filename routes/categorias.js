const express  = require('express');
const router = express.Router();


//Listar as categorias - show.ejs
router.get('/', async  (req, res)  => {
    res.render("base", {
        title: "Categoria",
        view: "categorias/show"
    });
});



//Add categorias - add.ejs
router.get('/add', async  (req, res)  => {
    res.render("base", {
        title: "Adicionar Categorias",
        view: "categorias/add"
    });
});

//Editar categorias - edit.ejs
router.get('/edit', async  (req, res)  => {
    res.render("base", {
        title: "Editar Categorias",
        view: "categorias/edit"
    });
});

module.exports =  router;