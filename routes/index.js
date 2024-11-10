const express = require('express');
const router = express.Router();

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
