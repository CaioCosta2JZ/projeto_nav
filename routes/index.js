const express = require('express');
const router = express.Router();

<<<<<<< HEAD
// Mostrar a página inicial (index.ejs)
router.get('/', async (req, res) => {
    res.render("index", { // Carregar o arquivo `index.ejs` diretamente
        title: "Home"
    });
});

// Rota para a página "Quem Somos" (quemsomos.ejs)
router.get('/quemsomos', async (req, res) => { // Corrigi a rota para "/quemsomos" sem a extensão .ejs
    res.render("quemsomos", { // Carregar o arquivo `quemsomos.ejs` diretamente
        title: "Quem somos"
    });
});

module.exports = router;
=======

//Mostrar a index.ejs
router.get('/', async  (req, res)  => {
    res.render("base", {
        title: "Home",
        view: "index"
    });
});


router.get('/quemsomos.ejs', async  (req, res)  => {
    res.render("base", {
        title: "Quem somos",
        view: "quemsomos"
    });
});
module.exports = router;
>>>>>>> ddb626db0fb91774c883fc63b050f0b449f2ad1b
