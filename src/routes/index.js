const express = require('express');
const router = express.Router();

// Página inicial
router.get('/', async(req, res) => {
    res.render("index", { title: "Home" });
});

// Página "Quem Somos"
router.get('/quemsomos', async(req, res) => {
    res.render("quemsomos", { title: "Quem Somos" });
});

module.exports = router;
