const express = require('express');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
    res.render("index", { title: "Home" });
});

// Página "Quem Somos"
router.get('/quemsomos', (req, res) => {
    res.render("quemsomos", { title: "Quem Somos" });
});

module.exports = router;
